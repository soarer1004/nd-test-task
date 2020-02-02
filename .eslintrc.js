module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'semi': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error']
      }
    }
  ]
}
