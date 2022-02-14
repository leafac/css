import fs from "fs/promises";
import murmurHash2Import from "@emotion/hash";
// FIXME: There’s something weird with this import.
const murmurHash2 = (murmurHash2Import as any)
  .default as typeof murmurHash2Import;
import postcss from "postcss";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import assert from "node:assert/strict";

export type CSS = string;
export type ClassName = string;

export const processedCSS = new Map<ClassName, CSS>();
export const postcssProcessor = postcss([postcssNested, autoprefixer]);

export function localCSS(): { (css: CSS): ClassName; toString(): CSS } {
  const classNames = new Set<ClassName>();
  const adder = (css: CSS): ClassName => {
    const className = cssClassName(css);
    classNames.add(className);
    return className;
  };
  adder.toString = () =>
    [...classNames]
      .reverse()
      .map((className) => processedCSS.get(className))
      .join("");
  return adder;
}
if (process.env.TEST === "leafac--css") {
  const pageLocalCSS = localCSS();
  const exampleCSS = css`
    background-color: var(--color--gray--medium--50);
    &:hover {
      background-color: var(--color--gray--medium--900);
    }

    @media (max-width: 599px) {
      margin: var(--space--1);
    }

    ${css`
      color: var(--color--gray--medium--700);
    `}

    ${["blue", "yellow"].map(
      (color) => css`
        .highlight--${color} {
          color: var(--color--${color}--200);
        }
      `
    )}
  `;
  assert.equal(pageLocalCSS(exampleCSS), "css--1ci2ui7");
  assert.equal(pageLocalCSS(exampleCSS), "css--1ci2ui7");
  assert.equal(
    pageLocalCSS(
      css`
        font-family: sans-serif;
      `
    ),
    "css--c2qlb4"
  );
  assert.equal(
    `${pageLocalCSS}`,
    `
          .css--c2qlb4.css--c2qlb4.css--c2qlb4.css--c2qlb4.css--c2qlb4.css--c2qlb4 {
            
        font-family: sans-serif;
      
          }
        
          .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7 {
            
    background-color: var(--color--gray--medium--50);
      
  
          }
    .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7:hover {
      background-color: var(--color--gray--medium--900);
    }
    @media (max-width: 599px) {
          .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7 {
      margin: var(--space--1)
      
  
          }
    }
    .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7 {

    
      color: var(--color--gray--medium--700);
      
  
}
    .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7 .highlight--blue {
          color: var(--color--blue--200);
        }
    .css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7.css--1ci2ui7 .highlight--yellow {
          color: var(--color--yellow--200);
        }
        `
  );
}

export function cssClassName(css_: CSS): ClassName {
  const className = `css--${murmurHash2(css_)}`;
  if (!processedCSS.has(className))
    processedCSS.set(
      className,
      processCSS(
        css`
          ${`.${className}`.repeat(6)} {
            ${css_}
          }
        `
      )
    );
  return className;
}

export function processCSS(css: CSS): CSS {
  return postcssProcessor.process(css).css;
}

export function css(
  inputParts: TemplateStringsArray,
  ...interpolations: (CSS | CSS[])[]
): CSS {
  const outputParts: CSS[] = [];
  interpolations.push("");
  for (let index = 0; index < inputParts.length; index++) {
    outputParts.push(inputParts[index]);
    const interpolation = interpolations[index];
    if (Array.isArray(interpolation)) outputParts.push(...interpolation);
    else outputParts.push(interpolation);
  }
  return outputParts.join("");
}

export const globalCSS = await fs.readFile(
  new URL("../source/global.css", import.meta.url),
  "utf-8"
);
