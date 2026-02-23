import { test, expect } from '@playwright/test';

test('ds-button snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('ds-button').first()).toHaveScreenshot('ds-button.png');
});

// TODO: expand snapshots for DsInput, DsModal, DsCard, DsAlert.
