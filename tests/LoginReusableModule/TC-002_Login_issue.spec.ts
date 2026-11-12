import { test, expect } from '@playwright/test';

test(
  'Login issue',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-002' },
    tag: ['@QADENCE_TC_ID:TC-002'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to \'http://3.214.254.188/home\'', async () => {
      await page.goto('http://3.214.254.188/home');
    });

    await test.step('#02 - Click on the \'Username *\' field', async () => {
      await page.getByLabel("Username *").click();
    });

    await test.step('#03 - Enter username \'arunraj\' in the \'Username *\' field', async () => {
      await page.getByLabel("Username *").fill('arunraj');
    });

    await test.step('#04 - Click on the \'Password *\' field', async () => {
      await page.getByLabel("Password *").click();
    });

    await test.step('#05 - Enter password \'VDZ4m+uLYGI+Paw5~PsCF*Am6\' in the \'Password *\' field', async () => {
      await page.getByLabel("Password *").fill('VDZ4m+uLYGI+Paw5~PsCF*Am6');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

    await test.step('#07 - Click the \'Navigate to Part Maintenance workspace\' link', async () => {
      await page.getByRole("link", { name: "Navigate to Part Maintenance workspace", exact: true }).click();
    });

    await test.step('#08 - Click the 4th header icon in the presentation grid', async () => {
      await page.getByRole("presentation").locator('span.ag-header-icon').nth(3).click();
    });

    await test.step('#09 - Click the \'Scheduling Board\' button', async () => {
      await page.getByRole("button", { name: "Scheduling Board", exact: true }).click();
    });

    await test.step('#10 - Click the date picker with selected date \'Nov 10, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Nov 10, 2026").click();
    });

    await test.step('#11 - Select date \'14\' from the calendar grid', async () => {
      await page.getByRole("gridcell", { name: "14" }).click();
    });

    await test.step('#12 - Click the date picker with selected date \'Nov 14, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Nov 14, 2026").click();
    });

    await test.step('#13 - Click the date picker with selected date \'Nov 14, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Nov 14, 2026").click();
    });

    await test.step('#14 - Click the date picker with selected date \'Nov 14, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Nov 14, 2026").click();
    });

    await test.step('#15 - Click the date picker with selected date \'Dec 22, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Dec 22, 2026").click();
    });

    await test.step('#16 - Click the date picker with selected date \'Dec 22, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Dec 22, 2026").click();
    });

    await test.step('#17 - Click the date picker with selected date \'Dec 22, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Dec 22, 2026").click();
    });

    await test.step('#18 - Click the date picker with selected date \'Dec 22, 2026\'', async () => {
      await page.getByLabel("Choose date, selected date is Dec 22, 2026").click();
    });

  }
);

