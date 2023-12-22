# ESlint Config

A set of rules for JS applications, considering Yooga recommendations.

> Please prefer to give feedbacks or update rules in our monorepo instead of using `eslint-disable`


## Project structure

```shell
.
└── src/
    ├── 📦eslint-config-base
    ├── 📦eslint-config-angular
    └── 📦eslint-config-vue # WIP
```

### Base

Base config for JS files, inspired by Airbnb's eslint plugin.

Recommended for:
- Simple projects, without frameworks (like this one)

### Angular

A plugin recommended for Angular projects, also inspired by Airbnb's eslint plugin, which encapsulates rules from [angular-eslint](https://github.com/angular-eslint/).

✅ Can be used for:
Projects which contain Angular framework

⛔ Should not be used for:
Vue, React, and other front-end frameworks which is not related to Angular.

### Vue

A WIP project. Will be available soon. ;)


## Install

### Github Packages

Using GitHub Packages to manage app packages? Make sure to follow the [official guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

### NPM

1. Replace `PACKAGE-NAME` by `base` || `angular` || `vue`

2. Add the package to your project
```shell
npm i --save-dev @yooga/eslint-config-PACKAGE-NAME
```

3. Create config file (`.eslintrc.js`) at project root:
```js
module.exports = {
  "ignorePatterns": [
    // Add ignored files and folders here
  ],
  "extends": [
    "@yooga/eslint-config-PACKAGE-NAME/.eslintrc.js"
  ]
}
```

4. Add scripts to your project
```json package.json
{
    "scripts": {
        "lint:js": "npx eslint",
        "lint:cache": "npx eslint --cache-strategy content",
    }
}
```
