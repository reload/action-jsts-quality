import js from "@eslint/js";
import { flatConfigs } from "eslint-plugin-import-x";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  flatConfigs.recommended,
  prettierConfig,
  {
    rules: {
      "import-x/order": "error",
    },
  },
];
