import { Given, When, Then } from '@cucumber/cucumber';
import { UserManagementPage } from '../../pages/userManagementPage';

let userManagementPage: UserManagementPage;

console.log('🔥 userSteps.ts LOADED');

// --- User Management Section ---

// Use Given to match your Feature file exactly
Given('user navigates to the User Management section', async function () {
  console.log('➡️ Step: Navigate to User Management section');
  userManagementPage = new UserManagementPage(this.page);
  await userManagementPage.navigateToUserManagement();
  console.log('✅ Navigated to User Management section');
});

Given('user clicks on the Add User button', async function () {
  console.log('➡️ Step: Click Add User button (open form)');
  await userManagementPage.clickAddUser();
  console.log('✅ Add User form opened');
});

When('user selects all accounts', async function () {
  console.log('➡️ Step: Select all accounts');
  await userManagementPage.selectAllAccounts();
  console.log('✅ All accounts selected');
});

When('user selects the first checkbox', async function () {
  console.log('➡️ Step: Select first checkbox');
  await userManagementPage.selectFirstCheckbox();
  console.log('✅ First checkbox selected');
});

// FIXED: Added backticks for template literals to fix "Cannot find name Step"
When('user enters first name {string}', async function (firstName: string) {
  console.log(`➡️ Step: Enter first name -> ${firstName}`);
  await userManagementPage.enterFirstName(firstName);
  console.log('✅ First name entered');
});

When('user enters last name {string}', async function (lastName: string) {
  console.log(`➡️ Step: Enter last name -> ${lastName}`);
  await userManagementPage.enterLastName(lastName);
  console.log('✅ Last name entered');
});

When('user selects role {string}', async function (role: string) {
  console.log(`➡️ Step: Select role -> ${role}`);
  await userManagementPage.selectRole(role);
  console.log('✅ Role selected');
});

When('user enters email {string}', async function (email: string) {
  console.log(`➡️ Step: Enter email -> ${email}`);
  await userManagementPage.enterEmail(email);
  console.log('✅ Email entered');
});

When('user enters password {string}', async function (password: string) {
  console.log('➡️ Step: Enter password');
  await userManagementPage.enterPassword(password);
  console.log('✅ Password entered');
});

When('user re-enters password {string}', async function (password: string) {
  console.log('➡️ Step: Re-enter password');
  await userManagementPage.reenterPassword(password);
  console.log('✅ Password re-entered');
});

When('user enters mobile number {string}', async function (number: string) {
  console.log(`➡️ Step: Enter mobile number -> ${number}`);
  await userManagementPage.enterMobileNumber(number);
  console.log('✅ Mobile number entered');
});

When('user submits the Add User form', async function () {
  console.log('➡️ Step: Submit Add User form');
  await userManagementPage.clickAddUserButton();
  console.log('✅ Add User form submitted');
});

Then('user dismisses the confirmation popup', async function () {
  console.log('➡️ Step: Dismiss confirmation popup');
  await userManagementPage.dismissPopup();
  console.log('✅ Confirmation popup dismissed');
});