const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  scrollBehavior: 'center',
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'https://rin-staging.azureedge.net/',
  },
});
