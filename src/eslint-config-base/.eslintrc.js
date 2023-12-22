module.exports = {
  globals: {
    MyGlobal: true
  },
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  env: {
    "browser": true,
    "amd": true,
    "node": true,
    "es6": true,
  },
  extends: [
    "./rules/stylistic",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/best-practices",
  ],
  plugins: ["markdown"],
  overrides: [
    {
      // Enable the Markdown processor for all .md files.
      files: ["**/*.{md,mkdn,mdown,markdown}"],
      processor: "markdown/markdown"
    },
    {
      // Optionally, customize the configuration ESLint uses for ```js
      // fenced code blocks inside .md files.
      files: ["**/*.md/*.js"],
      // ...
      rules: {
        // ...
      }
    }
  ]
};