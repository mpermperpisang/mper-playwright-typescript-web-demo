import { Page, expect } from '@playwright/test';
import { CART } from '../utils/elementReader';

export class CartPage {
  constructor(private page: Page) {}

  async assertItemInCart(expectedName: string) {
    await expect(this.page.locator(CART.CART_ITEM_NAME)).toHaveText(expectedName);
  }

  async checkout() {
    await this.page.click(CART.CHECKOUT_BTN);
  }
}
