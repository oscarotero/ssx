try {
  Deno.removeSync("./_npm", { recursive: true });
} catch {
  // Ignore if the directory does not exist
}

Deno.mkdirSync("./_npm");

const version = Deno.args[0];

if (!version) {
  throw new Error("Version is required");
}

const files = [
  "jsx-runtime.ts",
  "html.ts",
  "css.ts",
  "LICENSE",
  "README.md",
  "CHANGELOG.md",
];
for (const file of files) {
  Deno.copyFileSync(file, `_npm/${file}`);
}
Deno.copyFileSync("_scripts/tsconfig.json", "_npm/tsconfig.json");

await new Deno.Command("deno", {
  args: ["run", "-A", "npm:typescript/tsc", "-p", "."],
  cwd: "_npm",
}).output();

await Deno.remove("_npm/tsconfig.json");
await Deno.remove("_npm/jsx-runtime.ts");
await Deno.remove("_npm/html.d.ts");
await Deno.remove("_npm/html.js");
await Deno.remove("_npm/css.d.ts");
await Deno.remove("_npm/css.js");

await Deno.writeTextFile(
  "_npm/package.json",
  JSON.stringify(
    {
      name: "@lumeland/ssx",
      version,
      description: "Fast and simple JSX library for server side",
      type: "module",
      repository: {
        "type": "git",
        "url": "git+https://github.com/oscarotero/ssx.git",
      },
      keywords: [
        "jsx",
      ],
      author: "Óscar Otero",
      license: "MIT",
      bugs: {
        url: "https://github.com/oscarotero/ssx/issues",
      },
      homepage: "https://github.com/oscarotero/ssx#readme",
      exports: {
        "./jsx-runtime": "./jsx-runtime.js",
      },
      types: "./jsx-runtime.d.ts",
    },
    null,
    2,
  ),
);

await new Deno.Command("deno", {
  args: ["fmt"],
  cwd: "_npm",
}).output();
