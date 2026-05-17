import { renderComponent } from "@lumeland/ssx/jsx-runtime";

function ComponentA() {
  return <div>Hello</div>;
}

function ComponentB({ title }) {
  return (
    <span title={title}>
      <ComponentA />
    </span>
  );
}

// Render with renderComponent helper
console.log(await renderComponent(<ComponentB />));

// Render with .toString() method
const rendered = <ComponentB />;
console.log(await rendered.toString());

// .toString() in a single line
console.log(await (<ComponentB title="foo" />).toString());
