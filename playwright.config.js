// @ts-check
import { defineConfig, devices } from '@playwright/test';

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
  reporter: 'html',
  
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,
    launchOptions: {
    args: ['--start-maximized'],
    },
    //trace: 'on-first-retry',
  },
});

