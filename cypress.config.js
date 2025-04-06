const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://your-api-url', // Replace with your actual API URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Disable video recording for API tests (optional)
    video: false,
    // Configure retries for more stable API tests
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});
