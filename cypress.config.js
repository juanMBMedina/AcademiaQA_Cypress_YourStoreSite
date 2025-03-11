const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementación de eventos de Cypress
      on("task", {
        reportTo({ testCaseId, status }) {
          console.log(`Reportando ${testCaseId} con estado: ${status}`);
          return null;
        },
      });

      // Configuración de navegadores
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome" || browser.name === "edge") {
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--disable-features=IsolateOrigins,site-per-process");
        }

        if (browser.name === "firefox" || browser.name === "electron") {
          launchOptions.preferences = {
            "permissions.default.geo": 1,
            "permissions.default.camera": 1,
            "permissions.default.microphone": 1,
            "permissions.default.desktop-notification": 1
          };
        }

        return launchOptions;
      });
    },
    baseUrl: "https://opencart.abstracta.us",

    // Configuración de Screenshots
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",

    // Configuración de Videos
    video: true,
    videosFolder: "cypress/videos",
    videoCompression: 32,

    // Configuración de Reportes
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
