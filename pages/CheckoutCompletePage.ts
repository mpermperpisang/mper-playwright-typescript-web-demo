import { Page, expect } from '@playwright/test';
import { CHECKOUT_COMPLETE } from '../utils/elementReader';

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  async assertThankYou() {
    await expect(this.page.locator(CHECKOUT_COMPLETE.COMPLETE_HEADER))
      .toHaveText(/thank you for your order!/i);
  }
}
