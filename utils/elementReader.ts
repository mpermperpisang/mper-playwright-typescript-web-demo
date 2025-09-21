import * as fs from 'fs';
import * as path from 'path';

function loadProperties(fileName: string) {
  const filePath = path.resolve(__dirname, fileName);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const props: Record<string, string> = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const index = trimmed.indexOf('=');
    if (index > -1) {
      const key = trimmed.substring(0, index).trim();
      const value = trimmed.substring(index + 1).trim();
      props[key] = value;
    }
  }
  return props;
}

export const LOGIN = loadProperties('login_page.properties');
export const INVENTORY = loadProperties('inventory_page.properties');
export const CART = loadProperties('cart_page.properties');
export const CHECKOUT = loadProperties('checkout_page.properties');
export const CHECKOUT_COMPLETE = loadProperties('checkout_complete_page.properties');
