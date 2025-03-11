const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opencart.abstracta.us",
    // Screenshots
    //screenshotOnRunFailure: true,
    //screenshotsFolder: "cypress/screenshots",
    // Videos
    //video: true,
    //videosFolder: "cypress/videos",
    //videoCompression: 32,
    // Reportes
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
