export default function Main() {
  return (
    <>
      {{ __html: "<!doctype html>" }}
      <html>
        <body>
          <custom-element />
          <p class={"foo" + 1}>Example:</p>
          <br />
          <Header name="World">
            Welcome to SSX
            {{ __html: "Raw <b>HTML</b> code" }}
          </Header>
          <p
            class="foo"
            dangerouslySetInnerHTML={{ __html: "<span>Raw content</span>" }}
          />
          <MyDiv>
            <Header name="World">Welcome to SSX</Header>
            {{ __html: "Raw <b>HTML</b> code" }}
          </MyDiv>
        </body>
      </html>
    </>
  );
}

// Async component
async function Header(
  { name, children }: { name: string; children: JSX.Children },
) {
  await new Promise((resolve) => setTimeout(resolve, 1));

  return (
    <>
      <h1>Hello {name}</h1>
      {children}
    </>
  );
}

// Other component
function MyDiv(props: { children: JSX.Children }) {
  return (
    <div>
      {props.children}
    </div>
  );
}
