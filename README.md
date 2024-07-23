# SSX

JSX is terrible for frontend. But it's an acceptable way to create HTML code in
server side, specially if it's supported by default by TypeScript and Deno.

Most of the current JSX libraries are designed to work in server and client
sides. They do complicated things like a virtual DOM, reactivity, hooks,
hydration, events, etc, in order to create interactive user interfaces.

SSX is a minimal JSX library designed to be used ONLY in server side and output
plain HTML code.

- Created in TypeScript, for Deno.
- Very fast. It uses the
  [`precompile` option](https://deno.com/blog/v1.38#fastest-jsx-transform)
  available in Deno.
  > 7-20x faster rendering times and a 50% reduction in Garbage Collection
  > times.
- Designed to output HTML. It uses real HTML attributes (no more `className`).
- Great HTML documentation. Every element and property has a description and
  even links to [MDN documentation](https://developer.mozilla.org/). Types are
  generated using the data from
  [VSCode Custom Data](https://github.com/microsoft/vscode-custom-data).
- It supports async components (components returning a Promise).
- Allows to insert raw HTML code easily (without patronizing you).

## Configuration

In your `deno.json` file:

```json
{
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "ssx"
  },
  "imports": {
    "ssx/jsx-runtime": "https://deno.land/x/ssx/jsx-runtime.ts"
  }
}
```

## Example:

```jsx
function Main () {
  return (
    <html>
      <body>
        <custom-element />
        <p>Example:</p>
        <Header name="World">
          Welcome to SSX
          {{ __html: "Raw <b>HTML</b> code" }}
        </Header>
      </body>
    </html>
  );
}

// Async component
async function Header({ name, children }: { name: string; children: JSX.Children }) {
  const res = await fetch("https://weather.com/");
  const json = await res.json();

  return (
    <>
      <h1>Hello {name}</h1>
      <p>Today is { json.status }</p>
      { children }
    </>
  );
}

// String with the HTML code
console.log(await main());
```

### Adding Doctype:

Any children content with the type `{ __html: string }` is considered raw HTML
code that won't be escaped. You can use it to add the `<!doctype html>`
(something not possible in other JSX libraries):

```jsx
{
  {
    __html: "<!doctype html>";
  }
}
<html>
  ...
</html>;
```
