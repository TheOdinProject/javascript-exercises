const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  globalIgnores(["archive/"]),
  {
    files: ["generators/**/*.js", "**/*.spec.js", "**/*-solution.js", "*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
  },
]);
