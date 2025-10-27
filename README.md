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