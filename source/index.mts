import assert from "node:assert/strict";

export type CSS = string;

export default function css(
  templateStrings: TemplateStringsArray,
  ...substitutions: (CSS | CSS[])[]
): CSS {
  let output = "";

  for (const index of substitutions.keys()) {
    const templateString = templateStrings[index];
    output += templateString;

    const substitution = substitutions[index];
    if (Array.isArray(substitution))
      for (const substitutionPart of substitution) output += substitutionPart;
    else output += substitution;
  }

  output += templateStrings[templateStrings.length - 1];

  return output;
}

if (process.env.TEST === "@leafac/css") {
  const prettier = await import("prettier");
  assert.equal(
    prettier.format(
      css`
        background-color: var(--color--gray--medium--50);

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
      `,
      { parser: "css" }
    ),
    prettier.format(
      css`
        background-color: var(--color--gray--medium--50);

        color: var(--color--gray--medium--700);

        .highlight--blue {
          color: var(--color--blue--200);
        }

        .highlight--yellow {
          color: var(--color--yellow--200);
        }
      `,
      { parser: "css" }
    )
  );
}
