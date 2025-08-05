// prettier.config.cjs
/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  plugins: ["prettier-plugin-tailwindcss"], // chỉ truyền tên plugin dưới dạng chuỗi
};
