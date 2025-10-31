import { test, expect } from "@playwright/test";

test("My First Test", async ({ page }) => {
  expect(12).toBe(12);
});

test.skip("My Second Test", async ({ page }) => {
  expect(101).toBe(100);
});

test("My Third Test", async ({ page }) => {
  expect("Ankit").toBe("Ankit");
});

test("My Fourth Test", async ({ page }) => {
  expect("Ankit Kumar".includes("Kumar")).toBeTruthy();
});

test("My Fifth Test", async ({ page }) => {
    expect(false).toBeFalsy();
});
