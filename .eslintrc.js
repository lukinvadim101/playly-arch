module.exports = {
  extends: ["airbnb-base", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-console": 0,
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    "import/prefer-default-export": 0,
    "prefer-template": 0,
  },
};
