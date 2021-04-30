import { JSDOM } from "jsdom";
import * as postcss from "postcss";
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
    const declarations: postcss.Node[] = [];
    const nonDeclarations: postcss.Node[] = [];

    for (const node of postcssProcessor.process(style).root.nodes)
      if (node.type === "decl") declarations.push(node);
      else nonDeclarations.push(node);

    if (declarations.length === 0) element.removeAttribute("style");
    else element.setAttribute("style", declarations.join(";"));

    if (nonDeclarations.length > 0) {
      const style = nonDeclarations.join("");
      if (element.id === "") element.id = `leafac-css--${styles.length}`;
      styles.push(
        postcssProcessor.process(css`
          #${element.id} {
            ${style}
          }
        `).css
      );
    }
  }

  if (styles.length > 0)
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
const postcssProcessor = postcss.default([postcssNested]);
