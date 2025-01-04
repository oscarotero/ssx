import { assertEquals } from "jsr:@std/assert";
import { renderComponent } from "../jsx-runtime.ts";
import example from "./example.tsx";
import example2 from "./example2.jsx";
const expected = Deno.readTextFileSync("tests/expected.html");
const expected2 = Deno.readTextFileSync("tests/expected2.html");

Deno.test("Render TSX", async () => {
  const code = await example();
  assertEquals(await renderComponent(code), expected);
  const code2 = await example2();
  assertEquals(await renderComponent(code2), expected2);
});
