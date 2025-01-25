// deno-lint-ignore-file no-explicit-any

import { Inter, Props, renderInterface } from "./types.ts";

const res = await fetch(
  "https://cdn.jsdelivr.net/npm/@vscode/web-custom-data@latest/data/browsers.css-data.json",
);
const data = await res.json();

const CSSProperties: Inter = {
  name: "CSSProperties",
  description: "All CSS properties",
  properties: [],
  export: true,
};

for (const prop of data.properties) {
  const property = createProperty(prop);

  if (property) {
    CSSProperties.properties.push(property);
  }
}

function createProperty(attr: any): Props | undefined {
  if (
    attr.atRule || attr.status === "nonstandard" || attr.name.startsWith("-")
  ) {
    return;
  }

  let value = "string";
  let description = attr.description;

  if (Array.isArray(attr.values) && attr.values.length > 0) {
    value = attr.values
      .map((v: any) => {
        if (!v.name.includes("<")) {
          return `"${v.name}"`;
        }
      })
      .filter((v: unknown) => v)
      .join(" | ");

    if (attr.syntax) {
      description += `\nSyntax: ${attr.syntax}`;

      if (attr.syntax.includes("<")) {
        value = value ? `${value} | string` : "string";
      }
    }
    if (attr.restrictions) {
      if (attr.restrictions.includes("integer")) {
        value += " | number";
      }
      if (attr.restrictions.includes("length")) {
        value += " | 0";
      }
    }
  }

  return {
    name: attr.name,
    description,
    value,
    references: attr.references?.map((r: any) => r.url),
  };
}

CSSProperties.properties.push({
  name: "[key: string]",
  description: "Custom property",
  value: "unknown",
});

const code = renderInterface(CSSProperties);

Deno.writeTextFileSync("css.ts", code);
