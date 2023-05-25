// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier',
        'prettier/react'
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        parser: 'babel-eslint',
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'warn',
          {extensions: ['.js', '.jsx', '.ts', '.tsx']}
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single']
      }
    
}
