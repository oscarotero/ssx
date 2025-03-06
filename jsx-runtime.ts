import { HTMLElements } from "./html.ts";
import { CSSProperties } from "./css.ts";

interface RawHtml {
  __html?: string;
}

type Props = Record<string, unknown>;

type Content =
  | string
  | number
  | boolean
  | RawHtml
  | ((...args: unknown[]) => Content)
  | Content[];

const ssxElement = Symbol.for("ssx.element");

interface Component {
  // deno-lint-ignore no-explicit-any
  type: string | ((props: Props) => any);
  props: Props;
}

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const attributes = new Map<string, string>([
  ["className", "class"],
  ["htmlFor", "for"],
]);

const proto = Object.create(null, {
  [ssxElement]: {
    value: true,
    enumerable: false,
  },
});

/** The jsx function to create elements */
export function jsx(
  type: string,
  props: Props,
): Component {
  const element = Object.create(proto);
  element.type = type;
  element.props = props;
  return element;
}

/** Alias jsxs to jsx for compatibility with automatic runtime */
export { jsx as jsxs };

/** Fragment component to group multiple elements */
export function Fragment(props: { children: unknown }) {
  return props.children;
}

/** Required for "precompile" mode */
export async function jsxTemplate(
  strings: string[],
  ...values: unknown[]
): Promise<string> {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    if (typeof value === "string") {
      result += value;
    } else if (isComponent(value)) {
      result += await renderComponent(value);
    } else {
      result += await value;
    }

    result += strings[i + 1];
  }
  return result;
}

/** Required for "precompile" mode: render content */
export async function jsxEscape(content: Content): Promise<string> {
  if (Array.isArray(content)) {
    return (await Promise.all(content.map(jsxEscape))).join("");
  }

  if (content == null || content === undefined) {
    return "";
  }

  switch (typeof content) {
    case "string":
      return content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
        />/g,
        "&gt;",
      );
    case "object":
      if ("__html" in content) {
        return (content as RawHtml).__html ?? "";
      }
      if (isComponent(content)) {
        return await renderComponent(content);
      }
      break;
    case "number":
    case "boolean":
      return content.toString();
  }

  return content as Promise<string>;
}

// deno-lint-ignore no-explicit-any
function isComponent(value: any): value is Component {
  return value !== null && typeof value === "object" &&
    value[ssxElement] === true;
}

export async function renderComponent(
  component: Component | Component[],
): Promise<string> {
  if (Array.isArray(component)) {
    return (await Promise.all(component.map(renderComponent))).join("");
  }

  const { type, props } = component;

  // A Fragment
  if (type === Fragment) {
    return await jsxEscape(props.children as Content);
  }

  // An HTML tag
  if (typeof type === "string") {
    const isVoid = voidElements.has(type);
    const attrs: string[] = [type];
    let content = "";

    if (props) {
      for (
        const [key, val] of Object.entries(props)
      ) {
        if (key === "dangerouslySetInnerHTML") {
          content = (val as RawHtml).__html ?? "";
          continue;
        }
        if (key === "children") {
          content = await jsxEscape(val as Content);
          continue;
        }
        attrs.push(jsxAttr(key, val));
      }
    }
    if (isVoid) {
      if (content) {
        throw new Error(`Void element "${type}" cannot have children`);
      }
      return `<${attrs.join(" ")}>`;
    }

    return `<${attrs.join(" ")}>${content}</${type}>`;
  }

  const comp = await type(props);

  return typeof comp === "string" ? comp : await renderComponent(comp);
}

/** Required for "precompile" mode: render attributes */
export function jsxAttr(name: string, value: unknown): string {
  name = attributes.get(name) ?? name;

  if (name === "style" && typeof value === "object") {
    value = renderStyles(value as CSSProperties);
  }

  if (typeof value === "string") {
    return `${name}="${value.replace(/"/g, "&quot;")}"`;
  }

  if (typeof value === "boolean") {
    return value ? name : "";
  }

  if (value == null || value === undefined) {
    return "";
  }

  return `${name}="${value}"`;
}

/** Make JSX global */
declare global {
  export namespace JSX {
    export type Children =
      | HTMLElements
      | RawHtml
      | string
      | number
      | boolean
      | Children[];
    export interface IntrinsicElements extends HTMLElements {}
    export interface ElementChildrenAttribute {
      children: Children;
    }
  }
}

function renderStyles(properties: CSSProperties) {
  return Object.entries(properties)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
}
