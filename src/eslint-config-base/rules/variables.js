module.exports = {

  /**
   * Variable rules
   * @see http://eslint.org/docs/rules/#variables
   */
  rules: {

    /**
     * Disallow unused variables
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],

    /**
     * Enforce variables to be declared
     * either together or separately in functions
     * @see https://eslint.org/docs/rules/one-var
     */
    "one-var": ["warn", { initialized: "never", uninitialized: "always" }],

    /**
     * Require or disallow newlines
     * around variable declarations
     * @see https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": ["error", "initializations"],

    /**
     * Require let or const instead of var
     * @see https://eslint.org/docs/latest/rules/no-var
     */
    "no-var": "error",

    /**
     * Require const declarations for variables that are never reassigned after declared
     * @see https://eslint.org/docs/latest/rules/prefer-const
     */
    "prefer-const": "error",

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-object-spread
     */
    "prefer-object-spread": "error",
  }
}