module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@angular-eslint"],
  "rules": {
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/contextual-lifecycle": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/no-empty-lifecycle-method": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@angular-eslint/use-lifecycle-interface": "warn"
  },
  "overrides": [
    /**
     * Typescript files (components, services, etc)
     */
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],

      rules: {
        "@angular-eslint/use-lifecycle-interface": ["error"],
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": [
              "Component",
              "Page",
              "Modal",
            ]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "style": "kebab-case",
            "type": "element"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "style": "camelCase",
            "type": "attribute"
          }
        ],
      }
    },

    /**
     * Component templates
     */
    {
      "files": ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
      ],
      "rules": {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
      }
    }
  ]
};
