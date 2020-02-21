module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  extends: ["airbnb", "prettier"],
  rules: {
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
  },
}
