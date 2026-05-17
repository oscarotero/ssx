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

const rendered = <ComponentB />;
console.log(await rendered.toString());
console.log(await (<ComponentB title="foo" />).toString());
