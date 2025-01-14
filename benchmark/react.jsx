/** @jsxImportSource npm:react@18.3.1 */

export default function (lenght = 1000) {
  return (
    <>
      {new Array(lenght).fill(null).map((v, key) => (
        <b key={key} className="foo">bar</b>
      ))}
    </>
  );
}
