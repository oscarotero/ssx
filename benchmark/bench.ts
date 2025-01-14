import preact from "./preact.jsx";
import react from "./react.jsx";
import ssx from "./ssx.jsx";

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
  name: "react",
  fn() {
    react();
  },
});
