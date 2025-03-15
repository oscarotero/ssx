// deno-lint-ignore-file no-explicit-any

import { Inter, Props, renderInterface } from "./types.ts";

const res = await fetch(
  "https://cdn.jsdelivr.net/npm/@michijs/vscode-svg@latest/dist/svg.json",
);
const data = await res.json();

const numericAttrs: string[] = [];

const globalAttributes: Inter = {
  name: "GlobalAttributes",
  description:
    "Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.",
  properties: [],
};

const tags: Inter[] = [];

for (const attr of data.globalAttributes) {
  globalAttributes.properties.push(createProperty(attr));
}

const intrinsicElements: Inter = {
  export: true,
  name: "SVGElements",
  description: "All SVG elements",
  properties: [],
};

for (const tag of data.tags) {
  const properties = new Map<string, Props>();

  for (const attr of tag.attributes) {
    const global = globalAttributes.properties.find((prop) =>
      prop.name === attr.name
    );
    if (global) {
      continue;
    }
    const property = createProperty(attr);
    const duplicated = properties.get(attr.name);

    if (duplicated) {
      duplicated.description = duplicated.description + "\n" +
        attr.description?.value;
      continue;
    }

    properties.set(property.name, property);
  }

  if (properties.size) {
    tags.push({
      name: toTitleCase(tag.name),
      extends: "GlobalAttributes",
      properties: Array.from(properties.values()),
    });
  }

  intrinsicElements.properties.push({
    name: tag.name,
    description: getDescription(tag.description),
    references: tag.references?.map((ref: any) => `[${ref.name}](${ref.url})`),
    value: properties.size ? toTitleCase(tag.name) : "GlobalAttributes",
  });
}

intrinsicElements.properties.push({
  name: "[key: string]",
  description: "Custom element",
  value: "unknown",
});

function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function createProperty(attr: any): Props {
  let value = "string";
  if (attr.valueSet) {
    if (attr.valueSet === "v") {
      value = "boolean";
    } else {
      const valueSet = data.valueSets.find((val: any) =>
        val.name === attr.valueSet
      );

      value = valueSet?.values.map((v: any) => `"${v.name}"`).join(" | ") ??
        "string";
    }
  }
  if (numericAttrs.includes(attr.name) && value === "string") {
    value = "number | string";
  }
  if (attr.name === "style") {
    value = "string | CSSProperties";
  }
  return {
    name: attr.name,
    description: getDescription(attr.description),
    references: attr.references?.map((ref: any) => `[${ref.name}](${ref.url})`),
    value,
  };
}

function getDescription(description: any): string | undefined {
  return typeof description === "string" ? description : description?.value;
}

const code = [
  `import { GlobalAttributes } from "./html.ts";`,
  renderInterface(intrinsicElements),
  ...tags.map(renderInterface),
];

Deno.writeTextFileSync("svg.ts", code.join("\n\n"));
