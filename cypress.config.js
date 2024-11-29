const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://crmdev.crmmarshal.com',
    viewportHeight: 950,
    viewportWidth: 1440,
    watchForFileChanges: true,
    pageLoadTimeout: 65000,
    defaultCommandTimeout: 65000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    chromeWebSecurity: false,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'CRM Marchal Automation POM',
      embeddedScreenshots: true,
      inlineAssests: true,
      savAllAttempts: false,
    },
  },
});
