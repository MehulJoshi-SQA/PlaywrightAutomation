// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// Importing the base URL and other environment variables from envHelper.js
const { baseURL} = require('./Utilities/envHelper.js');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: false,

  // default timeout for each test
  timeout: 30000,

  // default timeout for expect() conditions
  expect: { 
    timeout: 10000,
  },

  //Reporter to use.
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
 ],
  
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,
    launchOptions: {
    args: ['--start-maximized'],
    },
    baseURL
    //trace: 'on-first-retry',
  },
});

