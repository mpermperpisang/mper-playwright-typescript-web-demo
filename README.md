# mper-playwright-typescript-web-demo

# Create project folder
mkdir playwright-saucedemo && cd playwright-saucedemo

# Init npm project
npm init -y

# Install Playwright with TypeScript
npm install -D @playwright/test typescript ts-node

# Install browsers
npx playwright install

npx playwright test
npx playwright test tests/saucedemo.e2e.spec.ts
npx playwright test -g "Login failure"
npx playwright test --headed
npx playwright show-report
