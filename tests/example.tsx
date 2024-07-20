export default function Main() {
  return (
    <html>
      <body>
        <custom-element />
        <p>Example:</p>
        <br />
        <Header name="World">
          Welcome to SSX
          {{ __html: "Raw <b>HTML</b> code" }}
        </Header>
      </body>
    </html>
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
