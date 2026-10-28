import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://127.0.0.1:3000",
    channel: "chrome",
    launchOptions: {
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    },
    trace: "off",
  },
  projects: [
    {
      name: "Desktop Chrome (1440px)",
      use: {
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Desktop Laptop (1024px)",
      use: {
        viewport: { width: 1024, height: 768 },
      },
    },
    {
      name: "Tablet (768px)",
      use: {
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: "Mobile (360px)",
      use: {
        viewport: { width: 360, height: 740 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: "npx.cmd next start -p 3000",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120000,
  },
});
