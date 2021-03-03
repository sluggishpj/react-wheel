module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'func-names': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0,
  },
};
