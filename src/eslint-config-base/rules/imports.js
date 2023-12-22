module.exports = {
  rules: {
    /**
     * Enforce sorted import declarations within modules
     * @see https://eslint.org/docs/latest/rules/sort-imports#related-rules
     */
    "sort-imports": [
      "error", {
        /**
         * @see https://eslint.org/docs/latest/rules/sort-imports#allowseparatedgroups
         */
        "allowSeparatedGroups": true,

        /**
         * @see https://eslint.org/docs/latest/rules/sort-imports#ignorecase
         */
        "ignoreCase": true
      }
    ]
  }
}