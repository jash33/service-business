import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // Use preview server to serve the built dist folder
    // This ensures OG images generated at build time are available
    command: 'npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
