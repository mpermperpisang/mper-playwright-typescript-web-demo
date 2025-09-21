import { Page, expect } from '@playwright/test';
import { CHECKOUT } from '../utils/elementReader';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillForm(first: string, last: string, zip: string) {
    await this.page.fill(CHECKOUT.FIRST_NAME, first);
    await this.page.fill(CHECKOUT.LAST_NAME, last);
    await this.page.fill(CHECKOUT.POSTAL_CODE, zip);
    await this.page.click(CHECKOUT.CONTINUE_BTN);
  }

  async assertOverview() {
    await expect(
      this.page.locator(CHECKOUT.SUMMARY_PAYMENT_INFO, { hasText: 'Payment Information' })
    ).toBeVisible();
  }

  async finish() {
    await this.page.click(CHECKOUT.FINISH_BTN);
  }
}
