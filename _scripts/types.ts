export interface Inter {
  name: string;
  extends?: string;
  description?: string;
  properties: Props[];
  references?: string[];
  export?: boolean;
}

export interface Props {
  name: string;
  description?: string;
  references?: string[];
  flags?: string[];
  value?: unknown;
}

export function renderInterface(inter: Inter) {
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

function generateDoc(
  description?: string,
  references?: string[],
  flags?: string[],
) {
  if (!description && !references?.length) {
    return "";
  }

  let str = `/**\n`;

  if (description) {
    str += ` * ${description.replaceAll("\n", "\n * ").replaceAll(" ", " ")}\n`;
  }
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
