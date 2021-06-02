module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'airbnb-base'
        // 'prettier/@typescript-eslint'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            }
        }
    },
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'max-len': ['error', { code: 120 }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never'
            }
        ],
        'no-console': 0,
        'class-methods-use-this': 'warn'
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
};
