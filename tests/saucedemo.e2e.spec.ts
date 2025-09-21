import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test('SauceDemo E2E - Successful Checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const completePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.assertOnPage();

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  await cartPage.assertItemInCart('Sauce Labs Backpack');
  await cartPage.checkout();

  await checkoutPage.fillForm('John', 'Doe', '12345');
  await checkoutPage.assertOverview();
  await checkoutPage.finish();

  await completePage.assertThankYou();
});
