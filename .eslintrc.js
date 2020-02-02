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
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'indent': ['error', 4],
        'space-before-function-paren': ['error', {
          'anonymous': 'never',
          'named': 'never',
          'asyncArrow': 'always'
        }],
        'padded-blocks': ['error', { 'blocks': 'never', 'classes': 'always' }],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error']
      }
    }
  ]
}
