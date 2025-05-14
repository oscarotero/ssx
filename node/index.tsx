import { renderComponent } from "@lumeland/ssx/jsx-runtime";

function ComponentA() {
  return <div>Hello</div>;
}

function ComponentB() {
  return (
    <span>
      <ComponentA />
    </span>
  );
}

const rendered = await renderComponent(<ComponentB />);
console.log(rendered);
