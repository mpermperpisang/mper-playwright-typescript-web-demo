import { Page, expect } from '@playwright/test';
import { LOGIN } from '../utils/elementReader';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(LOGIN.USERNAME, username);
    await this.page.fill(LOGIN.PASSWORD, password);
    await this.page.click(LOGIN.LOGIN_BTN);
  }

  async assertError(message: RegExp | string) {
    const error = this.page.locator(LOGIN.LOGIN_ERROR);
    await expect(error).toBeVisible();
    await expect(error).toHaveText(message);
  }
}
