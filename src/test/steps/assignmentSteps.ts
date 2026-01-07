import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../helper/util/world';
import { AssignmentPage } from '../../pages/assignmentPage';

// REMOVED: let assignmentPage; (Global variables cause issues in BDD)

When('the user navigates to the {string} header tab', async function (this: CustomWorld, tabName: string) {
    // We attach the page object to 'this' so it is unique to THIS specific scenario
    this.assignmentPage = new AssignmentPage(this.page);
    await this.assignmentPage.clickHeaderTab(tabName);
});

Then('the {string} and {string} tabs should be visible', async function (this: CustomWorld, tab1, tab2) {
    await expect(this.assignmentPage.tabPendingAssignment).toBeVisible();
    await expect(this.assignmentPage.tabReassign).toBeVisible();
});

When('the user selects {int} patients from the list', async function (this: CustomWorld, count: number) {
    await this.assignmentPage.selectMultipleCheckboxes(count);
});

When('the user clicks the Next button', async function (this: CustomWorld) {
    await this.assignmentPage.btnNextEnabled.click();
});

When('the user selects a member from the Care Team', async function (this: CustomWorld) {
    await this.assignmentPage.checkboxCareTeam.click();
});

When('the user clicks Assign', async function (this: CustomWorld) {
    await this.assignmentPage.btnAssign.click();
});
// 1. Fix for the "Select All" dropdown step
When('the user selects {string} from the account dropdown', async function (this: CustomWorld, option: string) {
    // You might need to add this locator to your AssignmentPage class later
    const dropdown = this.page.locator("//select[contains(@class, 'account-dropdown')] | //div[contains(@class, 'dropdown')]");
    await dropdown.waitFor({ state: 'visible' });
    
    // Select the option (if it's a standard HTML select)
    await dropdown.selectOption({ label: option });
});

// 2. Fix for the "Condition" tab visibility
Then('the {string} tab should be visible', async function (this: CustomWorld, tabName: string) {
    // We use your existing tabCondition locator from assignmentPage.ts
    // or search by text dynamically:
    const tab = this.page.locator(`//span[normalize-space()='${tabName}']`);
    await expect(tab).toBeVisible({ timeout: 10000 });
});

Then('the patient should be assigned successfully', async function (this: CustomWorld) {
    await expect(this.assignmentPage.btnOkPopup).toBeVisible();
    await this.assignmentPage.btnOkPopup.click();
});

Then('the condition hover text should match pattern type {string}', async function (this: CustomWorld, patternType: string) {
    await this.assignmentPage.validateConditionHoverWithPagination(patternType);
});