import { assertEquals } from "jsr:@std/assert@1.0.16";
import { renderComponent } from "../jsx-runtime.ts";
import example from "./example.tsx";
import example2 from "./example2.jsx";
import { withoutTitle, withTitle } from "./example3.tsx";
const expected = Deno.readTextFileSync("tests/expected.html");
const expected2 = Deno.readTextFileSync("tests/expected2.html");

Deno.test("Render TSX", async () => {
  const code = await example();
  assertEquals(await renderComponent(code), expected);
  assertEquals(await renderComponent(code), await code.toString());

  const code2 = await example2();
  assertEquals(await renderComponent(code2), expected2);
  assertEquals(await renderComponent(code2), await code2.toString());

  const code3 = await withTitle();
  assertEquals(
    await renderComponent(code3),
    '<span title="has title">Content</span>',
  );

  const code4 = await withoutTitle();
  assertEquals(await renderComponent(code4), "<span>Content</span>");
});
