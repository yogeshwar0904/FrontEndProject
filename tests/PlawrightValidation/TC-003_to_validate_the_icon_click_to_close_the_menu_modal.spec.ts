import { test, expect } from '@playwright/test';

test(
  'to validate the icon click to close the menu modal',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
    tag: ['@QADENCE_TC_ID:TC-003'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to \'https://aseraautomation.pre-uat.asera.as-software.com/\'', async () => {
      await page.goto('https://aseraautomation.pre-uat.asera.as-software.com/');
    });
    //Start - Module - Asera- login

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
    //End - Module - Asera- login

    await test.step('#07 - Click on the \'Patients\' list item', async () => {
      await page.getByRole("listitem").filter({ hasText: "Patients" }).click();
    });

    await test.step('#08 - Click on the 35th flex div element in a grid cell', async () => {
      await page.getByRole("gridcell").locator('div.flex').nth(34).click();
    });

    await test.step('#09 - Click on the backdrop element to close the modal', async () => {
      await page.getByRole("presentation").locator('div.MuiBackdrop-root').click();
    });

    await test.step('#10 - Click on the presentation element filtered by text \'MM/DD/YYYY\' (3rd occurrence)', async () => {
      await page.getByRole("presentation").filter({ hasText: "MM/DD/YYYY" }).nth(3).click();
    });

    await test.step('#11 - Click on the presentation element filtered by text \'MM/DD/YYYY\' (3rd occurrence)', async () => {
      await page.getByRole("presentation").filter({ hasText: "MM/DD/YYYY" }).nth(3).click();
    });

  }
);

