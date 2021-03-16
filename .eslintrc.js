module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    rules: {
      camelcase: ['off'],
      'comma-dangle': ['error', 'never'],
      'function-paren-newline': ['error', 'consistent'],
      'import/no-unresolved': ['off'],
      'import/extensions': ['off'],
      'import/no-extraneous-dependencies': ['off'],
      'no-console': ['warn'],
      'no-else-return': ['error', {allowElseIf: true}],
      'no-undef': ['off'],
      'no-new': ['off'],
      'no-mixed-operators': ['off'],
      'no-multi-str': ['off'],
      'no-param-reassign': ['off'],
      'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
      'no-restricted-globals': ['off'],
      'no-unused-vars': ['error', {argsIgnorePattern: '_'}],
      'object-curly-newline': ['error', {multiline: true, consistent: true}],
      'object-curly-spacing': ['error', 'never'],
      'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: false}],
      'operator-linebreak': ['error', 'after'],
      'prefer-destructuring': ['off'],
      radix: ['off'],
      'vars-on-top': ['off'],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'max-len': ['error', {code: 100}],
      semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
      'newline-per-chained-call': ['off'],
      'no-multiple-empty-lines': ['error', {max: 1}],
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-inline-styles': 2,
      'react-native/no-color-literals': 2,
    }
};
