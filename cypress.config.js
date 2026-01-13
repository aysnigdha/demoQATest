const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      chromeWebSecurity: false, // Required for iframe access
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
      video: true, // ✅ Enable video recording
      screenshotOnRunFailure: true, // optional: only take screenshots on failures
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos'
  },
});
