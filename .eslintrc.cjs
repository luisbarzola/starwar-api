module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "eslint-config-prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname,
    },
    "rules": {
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
            ],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
    "ignorePatterns": ['.eslintrc.cjs', "jest.config.js", "babel.config.js"],
}
