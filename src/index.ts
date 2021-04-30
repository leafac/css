import crypto from "crypto";

import { JSDOM } from "jsdom";
import postcss from "postcss";
import postcssNested from "postcss-nested";
import { html, HTML } from "@leafac/html";
import css from "tagged-template-noop";

export type CSS = string;

export { default as css } from "tagged-template-noop";

// TODO: Async?
// TODO: Receive and produce JSDOM.
// TODO: Avoid recomputing the nesting if the styles are the same… (use a Map instead of a Set)

export function process(htmlWithInlineCSS: HTML): HTML {
  const dom = new JSDOM(htmlWithInlineCSS);
  const document = dom.window.document;
  const inlineStyles = new Set<CSS>();
  for (const element of document.querySelectorAll("[style]")) {
    const styles = element.getAttribute("style")!;
    element.removeAttribute("style");
    const className = `style--${crypto
      .createHash("sha256")
      .update(styles)
      .digest("hex")}`;
    element.classList.add(className);
    inlineStyles.add(
      cssProcessor.process(
        css`
          .${className} {
            ${styles}
          }
        `,
        { from: undefined }
      ).css
    );
  }
  document.head.insertAdjacentHTML(
    "beforeend",
    html`
      <style>
        $${[...inlineStyles]}
      </style>
    `
  );
  return dom.serialize();
}
const cssProcessor = postcss([postcssNested]);
