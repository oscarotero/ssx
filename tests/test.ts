import { assertEquals } from "jsr:@std/assert";
import example from "./example.tsx";
const expected = Deno.readTextFileSync("tests/expected.html");

Deno.test("Render TSX", async () => {
  const code = await example();
  assertEquals(code, expected);
});
