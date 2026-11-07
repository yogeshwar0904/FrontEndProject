import { test, expect } from '@playwright/test';

test(
  'To validate the down-arrow icon accros the application',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-002' },
    tag: ['@QADENCE_TC_ID:TC-002'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to \'https://iassistant-qa.ideas2it.com/\'', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/');
    });

    await test.step('#02 - Click on \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#03 - Fill \'yogeshwar.sankaralingam@ideas2it.com\' in \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('yogeshwar.sankaralingam@ideas2it.com');
    });

    await test.step('#04 - Click on \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).click();
    });

    await test.step('#05 - Fill \'Popular@123\' in \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).fill('Popular@123');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

    await test.step('#07 - Click on header dropdown container menu icon', async () => {
      await page.locator('#headerDropDownContainer').locator('div.ml-1').click();
    });

    await test.step('#08 - Click on \'Profile\' link', async () => {
      await page.getByRole("link", { name: "Profile", exact: true }).click();
    });

    await test.step('#09 - Click on \'home\' link', async () => {
      await page.getByRole("link", { name: "home", exact: true }).click();
    });

    await test.step('#10 - Click on \'Appreciations (9)\' text', async () => {
      await page.getByText("Appreciations (9)", { exact: true }).click();
    });

    await test.step('#11 - Click on \'Search Posts\' textbox', async () => {
      await page.getByRole("textbox", { name: "Search Posts", exact: true }).click();
    });

    await test.step('#12 - Fill \'Vies\' in \'Search Posts\' textbox', async () => {
      await page.getByRole("textbox", { name: "Search Posts", exact: true }).fill('Vies');
    });

    await test.step('#13 - Click on close icon image', async () => {
      await page.getByRole("img", { name: "close" }).click();
    });

    await test.step('#14 - Click on \'My Timesheet\' link', async () => {
      await page.getByRole("link", { name: "My Timesheet", exact: true }).click();
    });

    await test.step('#15 - Click on first \'+ Add Entry\' link', async () => {
      await page.locator('a:has-text("+ Add Entry")').nth(0).click();
    });

    await test.step('#16 - Click on first dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').nth(0).click();
    });

    await test.step('#17 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-13a3n3o-indicatorContainer').click();
    });

    await test.step('#18 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').click();
    });

    await test.step('#19 - Select \'Billed\' option', async () => {
      await page.getByRole("option", { name: "Billed", exact: true }).click();
    });

    await test.step('#20 - Click on \'Enter No.of.Hours\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter No.of.Hours", exact: true }).click();
    });

    await test.step('#21 - Fill \'8\' in \'Enter No.of.Hours\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter No.of.Hours", exact: true }).fill('8');
    });

    await test.step('#22 - Click on project selection text area', async () => {
      await page.getByText("ProjectSelect projectProject name is requiredNo.of.HoursBillable TypeBilled", { exact: true }).click();
    });

    await test.step('#23 - Click on \'Work From Home\' checkbox', async () => {
      await page.getByRole("checkbox", { name: "Work From Home", exact: true }).click();
    });

    await test.step('#24 - Click on third dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').nth(2).click();
    });

    await test.step('#25 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-13a3n3o-indicatorContainer').click();
    });

    await test.step('#26 - Click the \'Cancel\' button', async () => {
      await page.getByRole("button", { name: "Cancel" }).click();
    });

    await test.step('#27 - Click the \'Cancel\' button', async () => {
      await page.getByRole("button", { name: "Cancel" }).click();
    });

    await test.step('#28 - Click on \'Next Month\' image', async () => {
      await page.getByRole("img", { name: "Next Month", exact: true }).click();
    });

    await test.step('#29 - Click on \'Previous Month\' image', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).click();
    });

    await test.step('#30 - Click on \'Previous Month\' image', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).click();
    });

    await test.step('#31 - Click on header dropdown container menu icon', async () => {
      await page.locator('#headerDropDownContainer').locator('div.ml-1').click();
    });

    await test.step('#32 - Click on \'tickets\' link', async () => {
      await page.getByRole("link", { name: "tickets", exact: true }).click();
    });

    await test.step('#33 - Click on \'Create Ticket\' button in blue addon section', async () => {
      await page.locator('div.bg-addon_blue').locator('div.w-full').getByRole("button", { name: "Create Ticket", exact: true }).click();
    });

    await test.step('#34 - Select \'AI Tool/Software Request\' from label dropdown', async () => {
      await page.locator('#label').selectOption('AI Tool/Software Request');
    });

    await test.step('#35 - Click on \'cancel icon\' image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#36 - Click the \'Yes\' button', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#37 - Click on \'Create Ticket\' button in purple addon section', async () => {
      await page.locator('div.bg-addon_purple').locator('div.w-full').getByRole("button", { name: "Create Ticket", exact: true }).click();
    });

    await test.step('#38 - Click on \'cancel icon\' image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#39 - Click on \'leave request\' link', async () => {
      await page.getByRole("link", { name: "leave request", exact: true }).click();
    });

    await test.step('#40 - Click the \'Apply WFC\' button', async () => {
      await page.getByRole("button", { name: "Apply WFC", exact: true }).click();
    });

    await test.step('#41 - Click on \'From Date\' textbox', async () => {
      await page.getByRole("textbox", { name: "From Date", exact: true }).click();
    });

    await test.step('#42 - Click on first dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(0).click();
    });

    await test.step('#43 - Select \'Dec\' option', async () => {
      await page.getByRole("option", { name: "Dec", exact: true }).click();
    });

    await test.step('#44 - Click on second dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(1).click();
    });

    await test.step('#45 - Select \'2031\' option', async () => {
      await page.getByRole("option", { name: "2031" }).click();
    });

    await test.step('#46 - Click on second dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(1).click();
    });

    await test.step('#47 - Select \'2020\' option', async () => {
      await page.getByRole("option", { name: "2020" }).click();
    });

    await test.step('#48 - Click on second dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(1).click();
    });

    await test.step('#49 - Click on first \'2031\' text', async () => {
      await page.getByText("2031", { exact: true }).nth(0).click();
    });

    await test.step('#50 - Click on second dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(1).click();
    });

    await test.step('#51 - Select \'2026\' option', async () => {
      await page.getByRole("option", { name: "2026" }).click();
    });

    await test.step('#52 - Click on reason dropdown', async () => {
      await page.locator('#reason').locator('div').nth(5).click();
    });

    await test.step('#53 - Click on scrollable space area', async () => {
      await page.locator('div.space-y-3.overflow-scroll.scrollbar-none').click();
    });

    await test.step('#54 - Click on reporting manager IDs dropdown', async () => {
      await page.locator('#reportingManagerIds').locator('div').nth(5).click();
    });

    await test.step('#55 - Select \'Change approvers..\' option', async () => {
      await page.getByRole("option", { name: "Change approvers..", exact: true }).click();
    });

    await test.step('#56 - Click on scrollable space area', async () => {
      await page.locator('div.space-y-3.overflow-scroll.scrollbar-none').click();
    });

    await test.step('#57 - Click on \'cancel icon\' image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#58 - Click the \'Yes\' button', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#59 - Click on \'leave request\' link', async () => {
      await page.getByRole("link", { name: "leave request", exact: true }).click();
    });

    await test.step('#60 - Click the \'Apply Leave Request\' button', async () => {
      await page.getByRole("button", { name: "Apply Leave Request", exact: true }).click();
    });

    await test.step('#61 - Click the \'Proceed\' button', async () => {
      await page.getByRole("button", { name: "Proceed", exact: true }).click();
    });

    await test.step('#62 - Click on leave type dropdown', async () => {
      await page.locator('#leaveType').locator('div').nth(5).click();
    });

    await test.step('#63 - Select \'Sick Leave\' option', async () => {
      await page.getByRole("option", { name: "Sick Leave", exact: true }).click();
    });

    await test.step('#64 - Click on \'Select start date\' textbox', async () => {
      await page.getByRole("textbox", { name: "Select start date", exact: true }).click();
    });

    await test.step('#65 - Click on first dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(0).click();
    });

    await test.step('#66 - Select \'Dec\' option', async () => {
      await page.getByRole("option", { name: "Dec", exact: true }).click();
    });

    await test.step('#67 - Select \'Choose Friday, December 25th, 2026\' option', async () => {
      await page.getByRole("option", { name: "Choose Friday, December 25th, 2026", exact: true }).click();
    });

    await test.step('#68 - Click on \'Select end date\' textbox', async () => {
      await page.getByRole("textbox", { name: "Select end date", exact: true }).click();
    });

    await test.step('#69 - Select \'Choose Thursday, December 31st, 2026\' option', async () => {
      await page.getByRole("option", { name: "Choose Thursday, December 31st, 2026", exact: true }).click();
    });

    await test.step('#70 - Click on leave type combobox', async () => {
      await page.locator('#leaveType').getByRole("combobox").click();
    });

    await test.step('#71 - Select \'Earned Leave\' option', async () => {
      await page.getByRole("option", { name: "Earned Leave", exact: true }).click();
    });

    await test.step('#72 - Click on leave reason dropdown', async () => {
      await page.locator('#leaveReason').locator('div').nth(5).click();
    });

    await test.step('#73 - Select \'Medical Appointment\' option', async () => {
      await page.getByRole("option", { name: "Medical Appointment", exact: true }).click();
    });

    await test.step('#74 - Click on reporting manager IDs combobox', async () => {
      await page.locator('#reportingManagerIds').getByRole("combobox").click();
    });

    await test.step('#75 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-13a3n3o-indicatorContainer').click();
    });

    await test.step('#76 - Click on \'cancel icon\' image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#77 - Click the \'Yes\' button', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#78 - Click on \'Leave Balance\' link', async () => {
      await page.getByRole("link", { name: "Leave Balance", exact: true }).click();
    });

    await test.step('#79 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').click();
    });

    await test.step('#80 - Select \'2025\' option', async () => {
      await page.getByRole("option", { name: "2025" }).click();
    });

    await test.step('#81 - Click on \'claims\' link', async () => {
      await page.getByRole("link", { name: "claims", exact: true }).click();
    });

    await test.step('#82 - Click the \'Reimburse Food\' button', async () => {
      await page.getByRole("button", { name: "Reimburse Food", exact: true }).click();
    });

    await test.step('#83 - Click on \'Select date\' textbox', async () => {
      await page.getByRole("textbox", { name: "Select date", exact: true }).click();
    });

    await test.step('#84 - Click on first dropdown selector', async () => {
      await page.locator('div.css-1xawajx').nth(0).click();
    });

    await test.step('#85 - Select \'Nov\' option', async () => {
      await page.getByRole("option", { name: "Nov", exact: true }).click();
    });

    await test.step('#86 - Select \'Choose Friday, November 27th, 2026\' option', async () => {
      await page.getByRole("option", { name: "Choose Friday, November 27th, 2026", exact: true }).click();
    });

    await test.step('#87 - Click on \'Enter the description\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the description", exact: true }).click();
    });

    await test.step('#88 - Fill \'1234567\' in \'Enter the description\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the description", exact: true }).fill('1234567');
    });

    await test.step('#89 - Click on \'Amount *\' spinbutton', async () => {
      await page.getByRole("spinbutton", { name: "Amount *", exact: true }).click();
    });

    await test.step('#90 - Fill \'12345\' in \'Amount *\' spinbutton', async () => {
      await page.getByRole("spinbutton", { name: "Amount *", exact: true }).fill('12345');
    });

    await test.step('#91 - Click on dropdown indicator container', async () => {
      await page.locator('div.css-qrebse-indicatorContainer').click();
    });

    await test.step('#92 - Click on flex column section', async () => {
      await page.locator('div.flex-col.px-5').click();
    });

    await test.step('#93 - Click on flex column section', async () => {
      await page.locator('div.flex-col.px-5').click();
    });

    await test.step('#94 - Click on \'cancel icon\' image', async () => {
      await page.getByRole("img", { name: "cancel icon", exact: true }).click();
    });

    await test.step('#95 - Click the \'Yes\' button', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#96 - Click on \'fuel (Flexi Benefit)\' link', async () => {
      await page.getByRole("link", { name: "fuel (Flexi Benefit)", exact: true }).click();
    });

    await test.step('#97 - Click the \'Resolved Claims\' button', async () => {
      await page.getByRole("button", { name: "Resolved Claims", exact: true }).click();
    });

    await test.step('#98 - Click on \'discussions\' link', async () => {
      await page.getByRole("link", { name: "discussions", exact: true }).click();
    });

    await test.step('#99 - Click on \'loans\' link', async () => {
      await page.getByRole("link", { name: "loans", exact: true }).click();
    });

    await test.step('#100 - Click on second tooltip target element', async () => {
      await page.getByTestId("flowbite-tooltip-target").nth(1).click();
    });

    await test.step('#101 - Click the \'Apply Micro Loan\' button', async () => {
      await page.getByRole("button", { name: "Apply Micro Loan", exact: true }).click();
    });

    await test.step('#102 - Click on \'Mode Of Transaction\' text', async () => {
      await page.getByText("Mode Of Transaction", { exact: true }).click();
    });

    await test.step('#103 - Click on \'Enter the amount\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the amount", exact: true }).click();
    });

    await test.step('#104 - Fill \'5000\' in \'Enter the amount\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the amount", exact: true }).fill('5000');
    });

    await test.step('#105 - Click on \'Enter the reason...\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the reason...", exact: true }).click();
    });

    await test.step('#106 - Fill \'123ygcx\' in \'Enter the reason...\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the reason...", exact: true }).fill('123ygcx');
    });

    await test.step('#107 - Click on close icon image', async () => {
      await page.getByRole("img", { name: "close" }).click();
    });

    await test.step('#108 - Click the \'Yes\' button', async () => {
      await page.getByRole("button", { name: "Yes" }).click();
    });

    await test.step('#109 - Click on \'Employee Lookup\' link', async () => {
      await page.getByRole("link", { name: "Employee Lookup", exact: true }).click();
    });

  }
);

