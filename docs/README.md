# ESlint Config

We're using GitHub for publishing our packages.

Make sure to follow these guides:
- [Working with GH packages / Installing](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)


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
