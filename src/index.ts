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
  const styles: CSS[] = [];

  for (const element of document.querySelectorAll("[style]")) {
    const style = element.getAttribute("style")!;
    element.removeAttribute("style");
    if (element.id === "") element.id = `leafac-css--${styles.length}`;
    styles.push(
      postcss([postcssNested]).process(css`
        #${element.id} {
          ${style}
        }
      `).css
    );
  }

  document.head.insertAdjacentHTML(
    "beforeend",
    html`
      <style>
        $${styles}
      </style>
    `
  );

  return dom.serialize();
}
