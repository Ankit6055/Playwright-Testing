// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

//   // Visit Home Page
//   await page.goto('https://automationexercise.com/');
//   await expect(page.getByRole('heading', { name: 'AutomationExercise' }).first()).toBeVisible();

//   // Add Product to Cart
//   await page.getByText('Add to cart').nth(1).click();
//   await page.getByRole('link', { name: 'View Cart' }).click();

//   // product is in the cart
//   await expect(page.locator('#cart_info tbody tr')).toHaveCount(1); 
  
//   // Proceed to Checkout
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByRole('link', { name: 'Register / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('playwrighttest@example.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('GFXbtcVV@57kPSH');
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Place the Order
//   await page.getByRole('link', { name: ' Cart' }).click();
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByRole('link', { name: 'Place Order' }).click();

//   // card details
//   await expect(page.locator('input[name="name_on_card"]')).toBeVisible();
//   await expect(page.locator('input[name="card_number"]')).toBeVisible();
  
//   // Save screenshot
//   await page.screenshot({ path: 'test-results/card-details-page.png', fullPage: true });
// });