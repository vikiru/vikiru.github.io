import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import perfectionist from 'eslint-plugin-perfectionist';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends(
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ),
    perfectionist.configs['recommended-natural'],
    {
        plugins: {
            prettier,
            react,
            jest,
            'jsx-a11y': jsxA11Y,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...jest.environments.globals.globals,
            },
            parserOptions: {
                babelOptions: {
                    requireConfigFile: false,
                },
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: __dirname,
                project: './tsconfig.json',
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            '@typescript-eslint/no-undef': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',  
            '@typescript-eslint/no-unsafe-argument': 'off',
            'arrow-spacing': [
                'warn',
                {
                    before: true,
                    after: true,
                },
            ],

            'comma-dangle': ['error', 'always-multiline'],
            'comma-spacing': 'error',
            'comma-style': 'error',
            curly: ['error', 'multi-line', 'consistent'],
            'dot-location': ['error', 'property'],
            'handle-callback-err': 'off',
            'keyword-spacing': 'error',

            'max-nested-callbacks': [
                'error',
                {
                    max: 4,
                },
            ],

            'max-statements-per-line': [
                'error',
                {
                    max: 2,
                },
            ],

            'no-console': 'off',
            'no-empty-function': 'error',
            'no-floating-decimal': 'error',
            'no-inline-comments': 'error',
            'no-lonely-if': 'error',
            'no-multi-spaces': 'error',

            'no-multiple-empty-lines': [
                'error',
                {
                    max: 2,
                    maxEOF: 1,
                    maxBOF: 0,
                },
            ],

            'no-shadow': [
                'error',
                {
                    allow: ['err', 'resolve', 'reject'],
                },
            ],

            'no-trailing-spaces': ['error'],
            'no-var': 'error',
            'object-curly-spacing': ['error', 'always'],
            'prefer-const': 'error',

            'prettier/prettier': [
                'off',
                {
                    endOfLine: 'auto',
                },
            ],

            semi: ['error', 'always'],
            'space-before-blocks': 'error',

            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],

            'space-in-parens': 'error',
            'space-infix-ops': 'error',
            'space-unary-ops': 'error',
            'spaced-comment': 'error',
            yoda: 'error',
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/enforces-shorthand': 'off',
            'tailwindcss/class-names-order': 'off',
            'tailwindcss/no-unnecessary-arbitrary-value': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-restricted-globals': 'off',
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
    },
    { ignores: ['node_modules/', '.github/', '*.json', '*.mjs', '*.css', '*.xml', '*.html', 'dist/', '*.config.js', '*.js', 'src/types/index.d.ts', 'src/reportWebVitals.js', 'src/index.js', 'src/setupTests.js'
    ] },
];
