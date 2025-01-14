export default function (lenght = 1000) {
  return (
    <>
      {new Array(lenght).fill(null).map((v, key) => (
        <b key={key} class="foo">bar</b>
      ))}
    </>
  );
}
