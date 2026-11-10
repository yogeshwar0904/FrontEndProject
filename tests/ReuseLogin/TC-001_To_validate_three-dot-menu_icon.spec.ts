import { test, expect } from '@playwright/test';

test(
  'To validate three-dot-menu icon',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to \'https://aseraautomation.pre-uat.asera.as-software.com/\'', async () => {
      await page.goto('https://aseraautomation.pre-uat.asera.as-software.com/');
    });

    await test.step('#02 - Click on \'Email address *\' field', async () => {
      await page.getByLabel("Email address *").click();
    });

    await test.step('#03 - Enter email \'physicianuser@as-software.com\' in the \'Email address *\' field', async () => {
      await page.getByLabel("Email address *").fill('physicianuser@as-software.com');
    });

    await test.step('#04 - Click on \'Password *\' field', async () => {
      await page.getByLabel("Password *").click();
    });

    await test.step('#05 - Enter password \'Admin@@123\' in the \'Password *\' field', async () => {
      await page.getByLabel("Password *").fill('Admin@@123');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

    await test.step('#07 - Click on \'Patients\' menu item in the navigation list', async () => {
      await page.getByRole("listitem").filter({ hasText: "Patients" }).click();
    });

    await test.step('#08 - Click on the 35th flex div element in a grid cell', async () => {
      await page.getByRole("gridcell").locator('div.flex').nth(34).click();
    });

    await test.step('#09 - Click on the backdrop overlay to close the modal/dialog', async () => {
      await page.getByRole("presentation").locator('div.MuiBackdrop-root').click();
    });

    await test.step('#10 - Click on \'Worklist\' menu item in the navigation list', async () => {
      await page.getByRole("listitem").filter({ hasText: "Worklist" }).click();
    });

    await test.step('#11 - Click the \'My Worklist\' button', async () => {
      await page.getByRole("button", { name: "My Worklist", exact: true }).click();
    });

    await test.step('#12 - Click on the backdrop overlay to close the modal/dialog', async () => {
      await page.getByRole("presentation").locator('div.MuiBackdrop-root').click();
    });

    await test.step('#13 - Click on the third \'Patient ID\' element using XPath locator', async () => {
      await page.locator('xpath=//div[normalize-space()="Patient ID"]').nth(2).click();
    });

    await test.step('#14 - Click on the fifth presentation element containing text \'All\'', async () => {
      await page.getByRole("presentation").filter({ hasText: "All" }).nth(4).click();
    });

    await test.step('#15 - Click on the backdrop overlay to close the modal/dialog', async () => {
      await page.getByRole("presentation").locator('div.MuiBackdrop-root').click();
    });

    await test.step('#16 - Click on the fourth presentation element containing text \'MM/DD/YYYY\'', async () => {
      await page.getByRole("presentation").filter({ hasText: "MM/DD/YYYY" }).nth(3).click();
    });

  }
);

