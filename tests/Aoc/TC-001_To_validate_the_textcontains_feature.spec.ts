import { test, expect } from '@playwright/test';

test(
  'To validate the textcontains feature',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('#01 - navigate', async () => {
      await page.goto('https://dev.anticlock.app/aoc/');
    });

    await test.step('#02 - click', async () => {
      await page.getByRole("textbox", { name: "Email Address", exact: true }).click();
    });

    await test.step('#03 - fill', async () => {
      await page.getByRole("textbox", { name: "Email Address", exact: true }).fill('admin@local.test');
    });

    await test.step('#04 - click', async () => {
      await page.getByRole("textbox", { name: "Password", exact: true }).click();
    });

    await test.step('#05 - fill', async () => {
      await page.getByRole("textbox", { name: "Password", exact: true }).fill('Admin@12345');
    });

    await test.step('#06 - click', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

    await test.step('#07 - click', async () => {
      await page.getByRole("button").filter({ hasText: "CLIENT CARE" }).click();
    });

    await test.step('#08 - assert hasText', async () => {
      await expect(page.getByRole("button").filter({ hasText: "Coverage Tracker" })).toContainText('Coverage Tracker');
    });

    await test.step('#09 - click', async () => {
      await page.getByRole("button").filter({ hasText: "Coverage Tracker" }).click();
    });

    await test.step('#10 - assert hasText', async () => {
      await expect(page.getByRole("button").filter({ hasText: "Text and Call Record Clinicians (0 | 0 hrs)" })).toContainText('Text and Call Record Clinicians (0 | 0 hrs)');
    });

    await test.step('#11 - click', async () => {
      await page.locator('input[name="default"]').nth(3).click();
    });

    await test.step('#12 - click', async () => {
      await page.getByRole("button", { name: "Search" }).click();
    });

    await test.step('#13 - click', async () => {
      await page.getByRole("link", { name: "Map" }).click();
    });

    await test.step('#14 - press', async () => {
      await page.getByRole("combobox").filter({ hasText: "Select Map Coverage Needs" }).press('Enter');
    });

    await test.step('#15 - select', async () => {
      await page.getByRole("combobox").filter({ hasText: "Select Map Coverage Needs" }).selectOption('5000');
    });

    await test.step('#16 - wait', async () => {
      await page.waitForTimeout(3000);
    });

    await test.step('#17 - click', async () => {
      await page.getByRole("textbox", { name: "Location", exact: true }).click();
    });

    await test.step('#18 - fill', async () => {
      await page.getByRole("textbox", { name: "Location", exact: true }).fill('houston');
    });

    await test.step('#19 - click', async () => {
      await page.getByPlaceholder("Radius").click();
    });

    await test.step('#20 - fill', async () => {
      await page.getByPlaceholder("Radius").fill('250');
    });

    await test.step('#21 - click', async () => {
      await page.getByRole("button", { name: "Search" }).click();
    });

  }
);

