import { test, expect } from "@jest/globals";
import { localCSS, css } from ".";

test("localCSS()", () => {
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
  expect(pageLocalCSS(exampleCSS)).toMatchInlineSnapshot(`"css--1ci2ui7"`);
  expect(pageLocalCSS(exampleCSS)).toMatchInlineSnapshot(`"css--1ci2ui7"`);
  expect(
    pageLocalCSS(
      css`
        font-family: sans-serif;
      `
    )
  ).toMatchInlineSnapshot(`"css--c2qlb4"`);
  expect(`${pageLocalCSS}`).toMatchInlineSnapshot(`
    "
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
            "
  `);
});
