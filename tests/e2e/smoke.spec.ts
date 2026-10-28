import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/the-issue",
  "/why-it-matters",
  "/solutions",
  "/take-action",
  "/about",
  "/privacy",
];

test.describe("Clean Water & Sanitation Platform Smoke Tests", () => {
  for (const route of ROUTES) {
    test(`Route ${route} returns 200 with no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      // Verify page has a main heading
      const heading = page.locator("h1");
      await expect(heading).toBeVisible();

      // Verify no horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // 1px rounding tolerance

      // Verify footer is rendered
      const footer = page.locator("footer");
      await expect(footer).toBeVisible();

      // Verify founders appear in footer
      await expect(footer).toContainText("Vishwa Vijay");
      await expect(footer).toContainText("Prateek Saroj");

      expect(consoleErrors).toEqual([]);
    });
  }

  test("Desktop navigation links work correctly", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav test only");

    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main Navigation" });

    await nav.getByRole("link", { name: "The Issue" }).click();
    await expect(page).toHaveURL(/.*the-issue/);

    await nav.getByRole("link", { name: "Why It Matters" }).click();
    await expect(page).toHaveURL(/.*why-it-matters/);

    await nav.getByRole("link", { name: "Solutions" }).click();
    await expect(page).toHaveURL(/.*solutions/);

    await nav.getByRole("link", { name: "Take Action" }).click();
    await expect(page).toHaveURL(/.*take-action/);
  });

  test("About page prominently credits founders Vishwa Vijay and Prateek Saroj", async ({ page }) => {
    await page.goto("/about");

    const foundersSection = page.getByRole("heading", {
      name: /founded by vishwa vijay and prateek saroj/i,
    });
    await expect(foundersSection).toBeVisible();

    await expect(page.getByRole("heading", { name: "Vishwa Vijay", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Prateek Saroj", exact: true })).toBeVisible();
  });

  test("Interactive tools test on /take-action", async ({ page }) => {
    await page.goto("/take-action");

    // 1. Footprint calculator
    const calcHeading = page.getByRole("heading", { name: /personal water footprint calculator/i });
    await expect(calcHeading).toBeVisible();

    // 2. Pledge board
    const pledgeHeading = page.getByRole("heading", { name: /clean water pledge board/i });
    await expect(pledgeHeading).toBeVisible();

    const firstPledge = page.getByRole("checkbox").first();
    await firstPledge.click();
    await expect(firstPledge).toHaveAttribute("aria-checked", "true");

    // Reload and check persistence
    await page.reload();
    const firstPledgeAfterReload = page.getByRole("checkbox").first();
    await expect(firstPledgeAfterReload).toHaveAttribute("aria-checked", "true");

    // 3. Quiz interactivity
    const quizHeading = page.getByRole("heading", { name: /myth vs fact: water & hygiene quiz/i });
    await expect(quizHeading).toBeVisible();

    const mythRadio = page.getByRole("radio", { name: /myth/i });
    await mythRadio.click();
    // Explanation should appear
    await expect(page.getByText(/verified source:/i)).toBeVisible();
  });

  test("Theme toggle switches dark and light modes", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop theme toggle test");

    await page.goto("/");
    const themeBtn = page.getByRole("button", { name: /switch to/i });
    await expect(themeBtn).toBeVisible();

    // Click to switch theme
    await themeBtn.click();
    const html = page.locator("html");
    const isDark = await html.evaluate((el) => el.classList.contains("dark"));

    await themeBtn.click();
    const isDarkAfter = await html.evaluate((el) => el.classList.contains("dark"));
    expect(isDark).not.toBe(isDarkAfter);
  });

  test("Mobile menu opens and closes on small viewports", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile menu test only");

    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /open mobile menu/i });
    await expect(hamburger).toBeVisible();

    await hamburger.click();
    const menuDialog = page.getByRole("dialog", { name: /navigation menu/i });
    await expect(menuDialog).toBeVisible();

    const closeBtn = page.getByRole("button", { name: /close menu/i });
    await closeBtn.click();
    await expect(menuDialog).not.toBeVisible();
  });
});
