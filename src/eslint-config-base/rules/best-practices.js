module.exports = {
  extends: "eslint:recommended",
  /**
   * Best practice rules
   * @see http://eslint.org/docs/rules/#best-practices
   */
  rules: {

    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     * @see http://eslint.org/docs/rules/radix
     */
    radix: ["error", "as-needed"],

    /**
     * Disallow inline comments after code
     * @see https://eslint.org/docs/latest/rules/no-inline-comments
     */
    "no-inline-comments": "error",

    /**
     * Disallow duplicate module imports
     * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
     */
    "no-duplicate-imports": "error",

    /**
     * Disallow magic numbers
     *
     * ‘Magic numbers’ are numbers that occur multiple times in
     * code without an explicit meaning. They should preferably
     * be replaced by named constants.
     *
     * @see https://eslint.org/docs/latest/rules/no-magic-numbers
     */
    "no-magic-numbers": "error",

    /**
     * Disallow redundant return statements
     * @see https://eslint.org/docs/latest/rules/no-useless-return
     */
    "no-useless-return": "error"
  }
}