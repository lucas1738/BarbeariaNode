module.exports = {
  env: {
    es6: true,
<<<<<<< HEAD
    node: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }]
  }
=======
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
    "linebreak-style": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],




  },
>>>>>>> 8cf5c73462d3bf7241a7c29cb8a4fd80c55da816
};
