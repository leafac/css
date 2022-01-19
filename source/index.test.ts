import { test, expect } from "@jest/globals";
import { localCSS, css } from ".";

test("localCSS()", () => {
  const pageLocalCSS = localCSS();
  for (let i = 0; i < 5; i++)
    pageLocalCSS(css`
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
    `);
  expect(`${pageLocalCSS}`).toMatchInlineSnapshot(`
    "
              .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t {
                
          background-color: var(--color--gray--medium--50);
            
        
              }
          .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t:hover {
            background-color: var(--color--gray--medium--900);
          }
          @media (max-width: 599px) {
              .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t {
            margin: var(--space--1)
            
        
              }
          }
          .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t {

          
            color: var(--color--gray--medium--700);
            
        
    }
          .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t .highlight--blue {
                color: var(--color--blue--200);
              }
          .css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t.css--1qpnq7t .highlight--yellow {
                color: var(--color--yellow--200);
              }
            "
  `);
});
