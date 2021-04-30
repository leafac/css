import { test, expect } from "@jest/globals";
import html from "@leafac/html";
import { css, process } from ".";

test("Inline styles with nested CSS (for example, media queries for responsive design, hover and other states, and so forth) is pulled out by id", () => {
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
            
            #leafac-css--0 {
              
                  background-color: red;
                
            }

                  @media (max-width: 599px) {
            #leafac-css--0 {
                    margin: 1rem
                
            }
                  }
          
            #age {
              
                  background-color: red;
                
            }

                  #age:hover {
                    background-color: green;
                  }
          
          </style>
        </head>
            <body>
              <p id=\\"leafac-css--0\\">
                Leandro Facchinetti
              </p>
              <p id=\\"age\\">
                30 years old
              </p>
            
          
        </body></html>"
  `);
});
