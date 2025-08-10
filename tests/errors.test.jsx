import { assertEquals, assertRejects } from "jsr:@std/assert";

Deno.test("Skip invalid attributes", async () => {
  const props = {
    id: "valid",
    tabindex: 1,
    value: () => "not valid",
    foo: Symbol.for("not valid"),
    bar: { not: "valid" },
  };
  const p = <p {...props}>Not valid</p>;
  assertEquals(
    await p.toString(),
    `<p id="valid" tabindex="1"   >Not valid</p>`,
  );
});

Deno.test("Weird components", async () => {
  const Name = null;
  const p = <Name>Not valid</Name>;
  await assertRejects(async () => await p.toString());
});
