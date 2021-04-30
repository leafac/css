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
          <p>30 years old</p>
        </body>
      </html>
    `)
  ).toMatchInlineSnapshot(`
    "<!DOCTYPE html><html lang=\\"en\\"><head></head>
            <body>
              <p>Leandro Facchinetti</p>
              <p>30 years old</p>
            
          
        </body></html>"
  `);
});

test("Regular inline CSS is maintained", () => {
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
    "<!DOCTYPE html><html lang=\\"en\\"><head></head>
            <body>
              <p style=\\"background-color: red\\">
                Leandro Facchinetti
              </p>
              <p style=\\"background-color: red\\">
                30 years old
              </p>
            
          
        </body></html>"
  `);
});

test("Nested CSS (for example, media queries for responsive design, hover and other states, and so forth) is pulled out", () => {
  expect(
    process(html`
      <!DOCTYPE html>
      <html lang="en">
        <head></head>
        <body>
          <p
            style="${css`
              background-color: red;

              @media (max-width: 599px) {
                margin: 1rem;
              }
            `}"
          >
            Leandro Facchinetti
          </p>
          <p
            id="age"
            style="${css`
              background-color: red;

              &:hover {
                background-color: green;
              }
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
              
              @media (max-width: 599px) {
              #leafac-css--0 {
                    margin: 1rem
              }
                  }
            
              #age:hover {
                    background-color: green;
                  }
            
            </style>
          </head>
            <body>
              <p style=\\"background-color: red\\" id=\\"leafac-css--0\\">
                Leandro Facchinetti
              </p>
              <p id=\\"age\\" style=\\"background-color: red\\">
                30 years old
              </p>
            
          
        </body></html>"
  `);
});
