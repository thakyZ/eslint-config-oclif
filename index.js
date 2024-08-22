import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import js from "@eslint/js";
import path from "node:path";

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends( 'eslint:recommended', 'xo-space', 'plugin:n/recommended', 'plugin:unicorn/recommended'),
  ...compat.plugins( 'mocha'),
  nodePlugin.configs["flat/recommended"],
  ...compat.config({
    rules: {
      'capitalized-comments': 0,
      'comma-dangle': ['error', 'always-multiline'],
      'default-case': 0,
      'no-multi-spaces': 0,
      'n/shebang': 0,
      curly: 0,
      indent: ['error', 2, {SwitchCase: 0, MemberExpression: 0}],
      quotes: ['error', 'single', {avoidEscape: true}],
      semi: ['error', 'never'],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'warn',
      'logical-assignment-operators': 'off',
    },
    globals: {
      describe: true,
      it: true,
    }
  }),
]

