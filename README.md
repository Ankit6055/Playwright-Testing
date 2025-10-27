# Playwright Automation Test Project

## Overview
This project contains automated tests for the AutomationExercise website using Playwright with TypeScript.

## Installation
```bash
npm install
npx playwright install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run tests in headed mode (browser visible)
npx playwright test --headed

# Run specific test file in headed mode
npx playwright test tests/mytest.spec.ts --headed
```

## Test Development
```bash
# Open Playwright codegen to record and generate test code
npx playwright codegen -o ./tests/mytest.spec.ts https://automationexercise.com/
```
This command opens a browser with Playwright Inspector, allowing you to record interactions and automatically generate test code that will be saved to the specified file.

## Screenshots
Screenshots are saved in `test-results/` folder after test execution.

## Configuration
- Browser: Chromium
- Headless: false
- Screenshots: Enabled

## Known Issues & Observations

While automating the given test assignment, I followed all the instructed steps. I successfully navigated to the homepage and verified the visibility of the “AutomationExercise” text.

However, I was unable to perform the “Add to Cart” action in Playwright due to a UI/DOM interaction issue on the automationexercise.com website. The “Add to Cart” button becomes non-interactable for automation tools, preventing the test flow from continuing.

During the “Add to Cart” and “Proceed to Checkout” steps, I observed consistent functional issues originating from the website itself rather than the test logic. In the process, I identified a critical defect: after adding a product and logging in, the cart displayed items that were not added in the current session, possibly from a previous user session or due to a server-side cart management bug.

I verified this behavior manually in the browser as well, confirming that it’s a site-level issue related to session or cart state handling, not a flaw in the Playwright automation script.