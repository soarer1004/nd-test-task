module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', 80]
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
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'indent': ['error', 4],
        'no-unused-vars': 'off',
        'space-before-function-paren': ['error', {
          'anonymous': 'never',
          'named': 'never',
          'asyncArrow': 'always'
        }],
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'padded-blocks': ['error', { 'blocks': 'never', 'classes': 'always' }],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error']
      }
    }
  ]
}
