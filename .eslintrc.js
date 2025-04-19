module.exports = {
  root: true,
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["prettier"],
  rules: {
    "no-alert": 0,
    "no-param-reassign": [2, { props: false }],
    "no-plusplus": 0,
    "no-iterator": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "func-style": 0,
    "prettier/prettier": "error",
  },
};
