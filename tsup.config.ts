import { defineConfig } from "tsup";

export default defineConfig({
  shims: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  entry: [
    "./src/components/Counter/index.tsx",
    "./src/components/Foo/index.tsx",
  ],
  format: ["cjs", "esm"],
  outDir: "dist/components/",
  dts: true,
});
