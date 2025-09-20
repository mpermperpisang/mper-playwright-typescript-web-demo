import { test, expect } from '@playwright/test';

test('SauceDemo E2E - Login, Checkout, Payment', async ({ page }) => {
  // 1. Go to login page
  await page.goto('/');

  // Login with standard user
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Assert successful login by checking inventory page
  await expect(page.locator('.title')).toHaveText('Products');

  // 2. Add product to cart
  await page.click('text=Sauce Labs Backpack');
  await page.click('button:has-text("Add to cart")');

  // Go to cart
  await page.click('.shopping_cart_link');
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // 3. Checkout process
  await page.click('#checkout');

  // Fill checkout form
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Assert checkout overview
   await expect(
    page.locator('.summary_info_label', { hasText: 'Payment Information' })
  ).toBeVisible();

  // 4. Finish payment
  await page.click('#finish');

  // 5. Assert confirmation
    // 5. Assert confirmation
  await expect(page.locator('.complete-header')).toHaveText(/thank you for your order!/i);
});
