module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest'
  ],
  overrides: [
    {
      files: [
        '**/*.stories.*',
        '**/*.story.*'
      ],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
}