/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
module.exports = {
  extends: [
    // rule mac dinh tu cac plugin
    'eslint: recommended',
    'plugin: react/recommended',
    'plugin: react-hooks/recommended',
    'plugin: import/recommended',
    'plugin: jsx-a11ly/recommended',
    'plugin: @typescript-eslint/recommended',
    // disable cac eslint xung dot voi prettier
    // dat o duoi de override cac rule tren
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // tu dong biet version cua react
      version: 'detect'
    },
    'import/resolver': {
      // tu dong biet duong dan cua cac module
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    // tat rule yeu cau import React trong jsx
    'react/react-in-jsx-scope': 'off',
    //canh bao khi the <a target='_blank' /> khong co rel=' noreferrer'
    'react/jsx-no-target-blank': 'warn',
    // tang cuong mot so rule prettier
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 100,
        jsxSingleQuote: true
      }
    ]
  }
}
