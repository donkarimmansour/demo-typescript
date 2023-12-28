import { test, expect, chromium } from "@playwright/test";

describe("/e2e post", () => {


  test("should show post list", async ({ page }) => {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });


  test("should navigate to the post page", async ({ page }) => {
    await page.getByRole("link", { name: "Get started" }).click();

    await expect(page).toHaveURL("http://localhost:3000/about");

    await expect(page.locator("h1")).toContainText("About Page");
  });

  
});
