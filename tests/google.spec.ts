import { test, expect } from "@playwright/test";

test("Verify Google Title", async ({ page }) => {
  await page.goto("http://google.com");

  const url = await page.url();

  console.log("Title is " + url);

  const title = await page.title();

  console.log("Title is " + title);

  await expect(page).toHaveTitle("Google");
});
