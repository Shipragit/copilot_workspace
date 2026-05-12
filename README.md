# Playwright E2E Testing Project

This project contains end-to-end tests using Playwright for web application testing.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests: `npm test`
- Run tests in headed mode: `npm run test:headed`
- Run tests with UI mode: `npm run test:ui`
- Show test report: `npm run report`

## CI/CD

This project uses GitHub Actions for continuous integration. The workflow runs on every push and pull request to the main branch.

- Tests are executed on Ubuntu with Node.js LTS
- Browsers are installed automatically
- Test reports are uploaded as artifacts

## Project Structure

- `tests/` - Test files
- `playwright.config.js` - Playwright configuration
- `.github/workflows/ci.yml` - GitHub Actions workflow
