import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore patterns
  { ignores: ['dist', 'build', 'node_modules'] },
  // Base configuration for all TypeScript and JSX files
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      'plugin:prettier/recommended', // Enable Prettier as ESLint rules
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json', // Required for some typescript-eslint rules
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier, // Add Prettier plugin
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // Support TypeScript alias resolution
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // TypeScript rules
      // '@typescript-eslint/explicit-function-return-type': 'off', // Allow implicit return types
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with _
      '@typescript-eslint/no-explicit-any': 'warn', // Warn instead of error for 'any'
      'prettier/prettier': 'error',
      // Prettier rules
      'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Enforce Prettier rules
    },
  },
);
