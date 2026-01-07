import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../helper/util/world';
import { UserManagementPage } from '../../pages/userManagementPage';
import { expect } from '@playwright/test';

Given('user navigates to the User Management section', async function (this: CustomWorld) {
    // Initialize the Page Object and assign it to the World context
    this.userPage = new UserManagementPage(this.page);
    await this.userPage.selectUserManagementMenu();
});

Given('user clicks on the Add User button', async function (this: CustomWorld) {
    await this.userPage.clickAddUser();
});

When('user selects an account from the dropdown', async function (this: CustomWorld) {
    await this.userPage.selectAccount();
});

Then('the role dropdown should contain the following roles:', async function (this: CustomWorld, dataTable) {
    // .rows() successfully skips the header row [Role]
    const expectedRoles = dataTable.rows().flat(); 
    
    // Log for debugging in terminal
    console.log("Verifying roles: " + expectedRoles.join(", "));
    
    // Ensure the page object exists before calling methods
    if (this.userPage) {
        await this.userPage.verifyRolesPresence(expectedRoles);
    } else {
        throw new Error("UserManagementPage was not initialized. Check navigation step.");
    }
});