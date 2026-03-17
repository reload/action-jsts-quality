import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierConfig,
  {
    rules: {
      "import/order": "error",
    },
  },
];
