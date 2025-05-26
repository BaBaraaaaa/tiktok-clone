import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react/prop-types": "off",
      "import/prefer-default-export": "off",
      "import/no-cycle": "off",
      "no-multi-assign": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-curly-brace-presence": "off",
      "react/jsx-wrap-multilines": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/parser": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  }
);
