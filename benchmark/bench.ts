import ssx from "./ssx.jsx";
import preact from "./preact.jsx";
import hono from "./hono.jsx";
import react from "./react.jsx";

Deno.bench({
  name: "ssx",
  fn() {
    ssx();
  },
});

Deno.bench({
  name: "preact",
  fn() {
    preact();
  },
});

Deno.bench({
  name: "hono",
  fn() {
    hono();
  },
});

Deno.bench({
  name: "react",
  fn() {
    react();
  },
});
