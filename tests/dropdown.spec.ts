import { test, expect } from "@playwright/test";

test("Select Values From Dropdown", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  /* preference
    1. label
    2. value
    3. index
  */

  // Always go with the label
  await page.locator("#state").selectOption({ label: "Goa" });

  // await page.waitForTimeout(2000);

  await page.locator("#state").selectOption({ value: "Himachal Pradesh" });

  // await page.waitForTimeout(3000);

  await page.locator("#state").selectOption({ index: 4 });

  // const value = await page.locator("#state").textContent();

  // console.log("All dropdown value " + value);

  // await expect(value?.includes("Kerala")).toBeTruthy();

  let allElements = await page.locator("#state option").all();

  console.log("Total options:", allElements.length);

  
});
