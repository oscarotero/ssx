// deno-lint-ignore-file no-explicit-any
const res = await fetch(
  "https://cdn.jsdelivr.net/npm/@vscode/web-custom-data@0.4.11/data/browsers.html-data.json",
);
const data = await res.json();

interface Inter {
  name: string;
  extends?: string;
  description: string;
  properties: Props[];
  references?: string[];
  export?: boolean;
}

interface Props {
  name: string;
  description: string;
  references?: string[];
  flags?: string[];
  value?: unknown;
}

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
  name: "IntrinsicElements",
  description: "All HTML tags",
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
      description: "",
      extends: "GlobalAttributes",
      properties: Array.from(properties.values()),
    });
  }

  intrinsicElements.properties.push({
    name: tag.name,
    description: tag.description?.value,
    references: tag.references?.map((ref: any) => `[${ref.name}](${ref.url})`),
    value: properties.size ? toTitleCase(tag.name) : "GlobalAttributes",
  });
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
  value: "GlobalAttributes | undefined",
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
      value = valueSet.values.map((v: any) => `"${v.name}"`).join(" | ");
    }
  }
  return {
    name: attr.name,
    description: attr.description?.value,
    references: attr.references?.map((ref: any) => `[${ref.name}](${ref.url})`),
    value,
  };
}

function generateDoc(
  description?: string,
  references?: string[],
  flags?: string[],
) {
  if (!description) return "";
  let str = `/**\n * ${
    description.replaceAll("\n", "\n * ").replaceAll(" ", " ")
  }\n`;
  if (references) {
    for (const ref of references) {
      str += ` * @see ${ref}\n`;
    }
  }
  str += ` */\n`;
  if (flags?.length) {
    str += `// deno-lint-ignore ${flags.join(" ")}\n`;
  }
  return str;
}

function renderInterface(inter: Inter) {
  let str = generateDoc(inter.description, inter.references);
  if (inter.export) {
    str += `export `;
  }
  str += `interface ${inter.name}`;
  if (inter.extends) {
    str += ` extends ${inter.extends}`;
  }
  str += ` {\n`;
  const properties = inter.properties.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  for (const prop of properties) {
    str += generateDoc(prop.description, prop.references, prop.flags);
    const name = prop.name.includes("-") ? `'${prop.name}'` : prop.name;
    const optional = name.startsWith("[") ? "" : "?";
    str += `  ${name}${optional}: ${prop.value};\n\n`;
  }
  str += `}\n\n`;
  return str;
}

const code = [
  renderInterface(intrinsicElements),
  renderInterface(globalAttributes),
  ...tags.map(renderInterface),
];

Deno.writeTextFileSync(
  "html.ts",
  `// deno-lint-ignore no-namespace
export namespace JSX {
${code.join("\n\n")}
}
`,
);
