import { test, expect } from "@jest/globals";
import html from "@leafac/html";
import { css, process } from ".";

test("No inline CSS", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <p>Leandro Facchinetti</p>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
          </style>
        </head>
            <body>
              <p>Leandro Facchinetti</p>
            
          
        </body></html>"
  `);
});

test("Plain inline CSS", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <p
            style="${css`
              background-color: red;
            `}"
          >
            Leandro Facchinetti
          </p>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
              .style--8059eb00e3c3b7ac1871c64b5902d00d470a612d7317a6079d6d9833c10d1e9a {
                
                  background-color: red;
                
              }
            
          </style>
        </head>
            <body>
              <p class=\\"style--8059eb00e3c3b7ac1871c64b5902d00d470a612d7317a6079d6d9833c10d1e9a\\">
                Leandro Facchinetti
              </p>
            
          
        </body></html>"
  `);
});

test("Repeating inline CSS is reused", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <p
            style="${css`
              background-color: red;
            `}"
          >
            Leandro Facchinetti
          </p>
          <p
            style="${css`
              background-color: red;
            `}"
          >
            30 years old
          </p>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
              .style--8059eb00e3c3b7ac1871c64b5902d00d470a612d7317a6079d6d9833c10d1e9a {
                
                  background-color: red;
                
              }
            
          </style>
        </head>
            <body>
              <p class=\\"style--8059eb00e3c3b7ac1871c64b5902d00d470a612d7317a6079d6d9833c10d1e9a\\">
                Leandro Facchinetti
              </p>
              <p class=\\"style--8059eb00e3c3b7ac1871c64b5902d00d470a612d7317a6079d6d9833c10d1e9a\\">
                30 years old
              </p>
            
          
        </body></html>"
  `);
});

test("Media queries (responsive design)", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <p
            style="${css`
              @media (max-width: 599px) {
                background-color: red;
              }

              @media (min-width: 600px) {
                background-color: green;
              }
            `}"
          >
            Leandro Facchinetti
          </p>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
              @media (max-width: 599px) {
              .style--8bc14dc83d80e901599db6a9f5ac095ae9d04e6a7a8e7c3bda4fb41a2b245d8c {
                    background-color: red
                
              }
                  }
                
                  @media (min-width: 600px) {
              .style--8bc14dc83d80e901599db6a9f5ac095ae9d04e6a7a8e7c3bda4fb41a2b245d8c {
                    background-color: green
                
              }
                  }
            
          </style>
        </head>
            <body>
              <p class=\\"style--8bc14dc83d80e901599db6a9f5ac095ae9d04e6a7a8e7c3bda4fb41a2b245d8c\\">
                Leandro Facchinetti
              </p>
            
          
        </body></html>"
  `);
});

test("Hover and other states", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <button
            style="${css`
              background-color: red;

              &:hover {
                background-color: green;
              }

              &::active {
                background-color: blue;
              }
            `}"
          >
            Leandro Facchinetti
          </button>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
              .style--a3737535bf0c7b44771724705adf79c3191593603dd1642a039c6a332dd81931 {
                
                  background-color: red;
                
              }

                  .style--a3737535bf0c7b44771724705adf79c3191593603dd1642a039c6a332dd81931:hover {
                    background-color: green;
                  }

                  .style--a3737535bf0c7b44771724705adf79c3191593603dd1642a039c6a332dd81931::active {
                    background-color: blue;
                  }
            
          </style>
        </head>
            <body>
              <button class=\\"style--a3737535bf0c7b44771724705adf79c3191593603dd1642a039c6a332dd81931\\">
                Leandro Facchinetti
              </button>
            
          
        </body></html>"
  `);
});

test("Nesting", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body
          style="${css`
            background-color: black;

            button {
              background-color: red;

              &:hover {
                background-color: green;
              }

              &::active {
                background-color: blue;
              }
            }
          `}"
        >
          <button>Leandro Facchinetti</button>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head>
          <style>
            
              .style--b0d97b603220abceb999f7f9d9c5fb7cff631c626b49396860ffbd16c2937425 {
                
                background-color: black;
              
              }

                .style--b0d97b603220abceb999f7f9d9c5fb7cff631c626b49396860ffbd16c2937425 button {
                  background-color: red;
                }

                .style--b0d97b603220abceb999f7f9d9c5fb7cff631c626b49396860ffbd16c2937425 button:hover {
                    background-color: green;
                  }

                .style--b0d97b603220abceb999f7f9d9c5fb7cff631c626b49396860ffbd16c2937425 button::active {
                    background-color: blue;
                  }
            
          </style>
        </head>
            <body class=\\"style--b0d97b603220abceb999f7f9d9c5fb7cff631c626b49396860ffbd16c2937425\\">
              <button>Leandro Facchinetti</button>
            
          
        </body></html>"
  `);
});
