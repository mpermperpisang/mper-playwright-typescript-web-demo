# mper-playwright-typescript-web-demo

Demo automation project using [Playwright](https://playwright.dev/) + TypeScript  
Test domain: [https://www.saucedemo.com/](https://www.saucedemo.com/)  
Covers:
- ✅ 

---

## 🚀 Setup

```bash
# Clone this repo or create your own project folder
git clone <your-repo-url> playwright-saucedemo
cd playwright-saucedemo
```

### Install dependencies
`npm ci`

### Install Playwright browsers
`npx playwright install`

---

## Run
### Run all tests
`npm run test:e2e`

### Run specific test file
`npx playwright test tests/saucedemo.e2e.spec.ts`

### Run by test name (title)
`npx playwright test -g "Login failure"`

### Run in headed mode (see browser UI)
`npx playwright test --headed`

### Show last HTML report
`npx playwright show-report`
