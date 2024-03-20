import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

const config = [
  js.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-undef": "warn",
    },
  },
  {
    languageOptions: {
      parser: babelParser,
    },
  },
];

export default config;

// module.exports = {
//   root: true,
//   extends: ["eslint:recommended"],
//   rules: {
//     "no-unused-vars": [
//       "error",
//       { vars: "all", args: "after-used", ignoreRestSiblings: false },
//     ],
//   },
//   parser: "@babel/eslint-parser",
//   parserOptions: {
//     sourceType: "module",
//     allowImportExportEverywhere: false,
//     ecmaFeatures: {
//       globalReturn: false,
//     },
//   },
// };
