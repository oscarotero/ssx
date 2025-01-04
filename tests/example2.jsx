const _components = {
  h2: "h2",
  hr: "hr",
  p: "p",
  strong: "strong",
};

export default function Main() {
  return (
    <>
      <_components.hr />
      {"\n"}
      <h2>
        {"Helo world"}
      </h2>
      {"\n"}
      {"\n"}
      <_components.h2>
        {"Hello world 2"}
      </_components.h2>zx
      {"\n"}
      <_components.p>
        {"This is a markdown file with the title "}
        <_components.strong>{"title"}</_components.strong>
        {"."}
      </_components.p>
      {"\n"}
    </>
  );
}
