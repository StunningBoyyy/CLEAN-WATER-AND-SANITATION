import { test } from "@playwright/test";
import path from "path";

const SCREENSHOT_DIR = "C:/Users/vishw/.gemini/antigravity/brain/fe036e9f-46fc-4e66-8d95-36d5f55f5500/screenshots";

const PAGES = [
  { name: "home", path: "/" },
  { name: "the-issue", path: "/the-issue" },
  { name: "why-it-matters", path: "/why-it-matters" },
  { name: "solutions", path: "/solutions" },
  { name: "take-action", path: "/take-action" },
  { name: "about", path: "/about" },
  { name: "privacy", path: "/privacy" },
];

test.describe("Capture Page Screenshots", () => {
  for (const p of PAGES) {
    test(`Capture desktop & dark screenshot for ${p.name}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(p.path);
      await page.waitForTimeout(500);

      // Light mode desktop
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${p.name}-desktop.png`),
        fullPage: true,
      });

      // Dark mode desktop
      const themeBtn = page.getByRole("button", { name: /switch to/i });
      if (await themeBtn.isVisible()) {
        await themeBtn.click();
        await page.waitForTimeout(300);
        await page.screenshot({
          path: path.join(SCREENSHOT_DIR, `${p.name}-dark.png`),
          fullPage: true,
        });
      }
    });

    test(`Capture mobile screenshot for ${p.name}`, async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 740 });
      await page.goto(p.path);
      await page.waitForTimeout(500);

      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${p.name}-mobile.png`),
        fullPage: true,
      });
    });
  }
});
