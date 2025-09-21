import { Page } from '@playwright/test';
import { INVENTORY } from '../utils/elementReader';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertOnInventoryPage() {
    await this.page.waitForSelector(INVENTORY.INVENTORY_TITLE);
  }

  async addBackpackToCart() {
    await this.page.click(INVENTORY.BACKPACK_ADD_BTN);
  }

  async goToCart() {
    await this.page.click(INVENTORY.CART_ICON);
  }
}
