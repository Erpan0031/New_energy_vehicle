module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true
 },
 extends: [
  'plugin:react/recommended',
  'standard-with-typescript',
  "plugin:prettier/recommended"
 ],
 overrides: [
 ],
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['tsconfig*.json'],
  tsconfigRootDir: __dirname,
 },
 plugins: [
  'react'
 ],
 rules: {
  "react/prop-types": "off"
 }
}