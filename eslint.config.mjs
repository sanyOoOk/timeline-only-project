// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    reactHooks.configs["recommended-latest"],
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { js, reactHooks },
        extends: ["js/recommended"],
        languageOptions: {
            globals: { ...globals.browser, __IS_DEV__: "readonly", jest: true },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/jsx-indent": [2, 4],
            indent: [2, 4],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                },
            ],
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "no-redeclare": "off",
            "react/no-deprecated": "off",
            "no-undef": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
        },
    },
]);
