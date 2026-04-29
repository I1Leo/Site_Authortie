module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     ecmaFeatures: {
       jsx: true
     }
   },
   env: {
     browser: true,
     node: true,
     es2022: true
   },
   extends: [
     'eslint:recommended',
     'plugin:react/recommended',
     'plugin:react-hooks/recommended',
     'plugin:@typescript-eslint/recommended',
     'plugin:prettier/recommended'
   ],
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
     'prettier/prettier': ['error'],
     'react/react-in-jsx-scope': 'off', // React 18+ не требует import React
     '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
   },
   settings: {
     react: {
       version: 'detect'
     }
   }
 };
 