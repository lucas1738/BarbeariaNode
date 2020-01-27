module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};
