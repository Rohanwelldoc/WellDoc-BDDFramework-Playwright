module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
      // This tells Allure where to save the raw JSON data
      resultsDir: "allure-results" 
    },
    paths: [
      "src/test/features/*.feature"
    ],
   require: [
  "src/test/steps/**/*.ts", // This looks in ALL subfolders
  "src/test/hooks/hooks.ts"
],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "summary",
      "allure-cucumberjs/reporter"
    ]
  }
}