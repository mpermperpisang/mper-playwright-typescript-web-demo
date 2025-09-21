import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('SauceDemo - Login Failure', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'wrong_password');
  await loginPage.assertError(/Epic sadface/i);
});
