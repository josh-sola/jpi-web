import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      // Stripping control characters from untrusted page/search text is the point, not a mistake.
      "no-control-regex": "off",
      // matches is always the executable paths findExecutable collects; default lexicographic order is correct.
      "require-array-sort-compare": "off",
    },
    options: { typeAware: true, typeCheck: true },
  },
});
