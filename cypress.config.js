const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    viewportHeight: 1200,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
    }
  }
});
