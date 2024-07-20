import { HTMLElements } from "./html.ts";

/** The interface to output unescaped raw HTML */
interface RawHtml {
  __html?: string;
}

/** The jsx function to create elements */
export function jsx(
  type: string,
  props: Record<string, unknown>,
) {
  return [type, props];
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

    if (Array.isArray(value)) {
      const r = value[0](value[1]);
      if (typeof r === "string") {
        result += r;
      } else {
        result += await r;
      }
    } else {
      result += value;
    }
    result += strings[i + 1];
  }
  return result;
}

type Content =
  | string
  | number
  | boolean
  | RawHtml
  | (() => Content)
  | Content[];

/** Required for "precompile" mode: render content */
export function jsxEscape(content: Content): string {
  if (typeof content === "function") {
    return jsxEscape(content());
  }

  if (Array.isArray(content)) {
    return content.map(jsxEscape).join("");
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
      break;
    case "number":
    case "boolean":
      return content.toString();
  }

  return "";
}

/** Required for "precompile" mode: render attributes */
export function jsxAttr(name: string, value: unknown): string {
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
