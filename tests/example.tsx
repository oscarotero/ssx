export default function Main() {
  return (
    <>
      {{ __html: "<!doctype html>" }}
      <html>
        <body>
          <custom-element />
          <p className={"foo" + 1}>Example:</p>
          <br />
          <Header name="World">
            Welcome to SSX
            {{ __html: "Raw <b>HTML</b> code" }}
          </Header>
          <svg>
            <path d="M2"></path>
          </svg>
          <p
            class="foo"
            style={{
              bottom: undefined,
              position: "static",
              "--foo": "red",
              background: "var(--foo)",
            }}
            tabindex={2}
            dangerouslySetInnerHTML={{ __html: "<span>Raw content</span>" }}
          />
          <MyDiv>
            <Header name="World">Welcome to SSX</Header>
            {{ __html: "Raw <b>HTML</b> code" }}
          </MyDiv>
          <Other enabled />
          <Other enabled={false} />
        </body>
      </html>
    </>
  );
}

// Async component
async function Header(
  { name, children }: { name: string; children: JSX.Children },
): Promise<JSX.Children> {
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

function Other({ enabled }: { enabled: boolean }) {
  return (
    <>
      {enabled && <strong>Enabled</strong>}
    </>
  );
}
