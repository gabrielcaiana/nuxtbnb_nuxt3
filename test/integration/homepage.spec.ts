// @ts-check
import { test, expect } from "@playwright/test";
import { appUrl } from "../fixtures/urls";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test("navigation to homepage", async ({ page }) => {
    await expect(page).toHaveURL(appUrl);
    await expect(page).toHaveTitle(/Homepage | Mastering Nuxt/);
  });

  test("navigate to the hosting page", async ({ page }) => {
    const cardHome = page.getByRole("link", {
      name: "Rustic Piney Lodge Nestled in the Foothills ",
    });

    await expect(cardHome).toHaveAttribute("href", "/home/2");

    await cardHome.click();

    await expect(page).toHaveURL(`${appUrl}/home/2`);
  });
});
