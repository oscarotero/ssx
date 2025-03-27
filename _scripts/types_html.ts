// deno-lint-ignore-file no-explicit-any

import { Inter, Props, renderInterface } from "./types.ts";

const htmlData = await (await fetch(
  "https://cdn.jsdelivr.net/npm/@vscode/web-custom-data@latest/data/browsers.html-data.json",
)).json();

const svgData = await (await fetch(
  "https://cdn.jsdelivr.net/npm/@michijs/vscode-svg@latest/dist/svg.json",
)).json();

const numericAttrs = [
  "colspan",
  "rowspan",
  "size",
  "span",
  "width",
  "height",
  "value",
  "min",
  "max",
  "maxlength",
  "minlength",
  "step",
  "rows",
  "cols",
  "tabindex",
  "high",
  "low",
  "optimum",
  "placeholder",
  "aria-placeholder",
  "label",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-setsize",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
];

// Global HTML & SVG attributes
const globalAttributes: Inter = {
  name: "GlobalAttributes",
  description:
    "Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.",
  properties: [],
};

const added = new Set<string>();

for (const data of [htmlData, svgData]) {
  for (const attr of data.globalAttributes) {
    if (added.has(attr.name)) {
      continue;
    }
    added.add(attr.name);
    globalAttributes.properties.push(createProperty(attr, data.valueSets));
  }
}

// HTML & SVG elements
const tags: Inter[] = [];

const intrinsicElements: Inter = {
  export: true,
  name: "HTMLElements",
  description: "All HTML elements",
  properties: [],
};
added.clear();
for (const data of [htmlData, svgData]) {
  for (const tag of data.tags) {
    if (added.has(tag.name)) {
      continue;
    }
    added.add(tag.name);

    const properties = new Map<string, Props>();

    for (const attr of tag.attributes) {
      const global = globalAttributes.properties.find((prop) =>
        prop.name === attr.name
      );
      if (global) {
        continue;
      }
      const property = createProperty(attr, data.valueSets);
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
      references: tag.references?.map((ref: any) =>
        `[${ref.name}](${ref.url})`
      ),
      value: properties.size ? toTitleCase(tag.name) : "GlobalAttributes",
    });
  }
}

globalAttributes.properties.push({
  name: "[key: string]",
  description: "Custom attribute",
  flags: ["no-explicit-any"],
  value: "any",
});

intrinsicElements.properties.push({
  name: "[key: string]",
  description: "Custom element",
  value: "unknown",
});

function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function createProperty(attr: any, valueSets: any): Props {
  let value = "string";
  if (attr.valueSet) {
    if (attr.valueSet === "v") {
      value = "boolean";
    } else {
      const valueSet = valueSets.find((val: any) => val.name === attr.valueSet);
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
  `import { CSSProperties } from "./css.ts";`,
  renderInterface(intrinsicElements),
  renderInterface(globalAttributes),
  ...tags.map(renderInterface),
];

Deno.writeTextFileSync("html.ts", code.join("\n\n"));
