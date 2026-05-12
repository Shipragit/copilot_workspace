import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('explore docs link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Look for the docs link
  const docsLink = page.getByRole('link', { name: /docs/i });
  await expect(docsLink).toBeVisible();
});

test('verify main content', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check for main heading
  const mainHeading = page.getByRole('heading', { name: /Playwright/i });
  await expect(mainHeading).toBeVisible();
});