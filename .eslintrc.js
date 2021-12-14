module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},
};
