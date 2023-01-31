module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals"
  ],

  // no rules are defined in this config, so it will inherit all rules from the base configs

}