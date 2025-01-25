/** @jsxImportSource npm:hono/jsx */

export default function (lenght = 1000) {
  return (
    <>
      {new Array(lenght).fill(null).map((_, key) => (
        <b key={key} className="foo">bar</b>
      ))}
    </>
  );
}
