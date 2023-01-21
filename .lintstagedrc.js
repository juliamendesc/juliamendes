module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,ts,jsx,tsx}': 'eslint --config .eslintrc.json --fix',
};
