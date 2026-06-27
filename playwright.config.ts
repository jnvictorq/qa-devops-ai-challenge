import { defineConfig, devices } from '@playwright/test';

const baseURL =
  process.env.BASE_URL ??
  'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60_000,
  expect: {
    timeout: 15_000,
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: 'chrome',
      grep: /(^|\s)@chrome(\s|$)/,
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
      },
    },
    {
      name: 'firefox',
      grep: /(^|\s)@firefox(\s|$)/,
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        headless: false,
      },
    },
    {
      name: 'edge',
      grep: /(^|\s)@edge(\s|$)/,
      use: {
        ...devices['Desktop Edge'],
        browserName: 'chromium',
        channel: 'msedge',
        headless: false,
      },
    },
    {
      name: 'chrome-headless',
      grep: /(^|\s)@chrome-headless(\s|$)/,
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        channel: 'chrome',
        headless: true,
      },
    },
    {
      name: 'firefox-headless',
      grep: /(^|\s)@firefox-headless(\s|$)/,
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        headless: true,
      },
    },
    {
      name: 'edge-headless',
      grep: /(^|\s)@edge-headless(\s|$)/,
      use: {
        ...devices['Desktop Edge'],
        browserName: 'chromium',
        channel: 'msedge',
        headless: true,
      },
    },
  ],
});
