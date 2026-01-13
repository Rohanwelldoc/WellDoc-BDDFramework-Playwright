// Location: src/test/steps/loginSteps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test'; 
import { CustomWorld } from '../../helper/util/world';
import LoginPage from '../../pages/loginPage';
import { GlobalVariables } from '../../helper/util/globalVariables';

console.log('🔥 loginSteps.ts LOADED');

Given('user is on login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.page.goto('https://azqa24-dsm.testwd.com/CarePortal/login');
    await this.loginPage.waitForPage();
});

Then('user should be logged in successfully', async function (this: CustomWorld) {
    await this.page.waitForSelector(
        'xpath=//*[@id="root"]/div[1]/div/div[1]/img',
        { state: 'visible', timeout: 15000 }
    );
});

// Match: When user clicks on the "Forgot Username" link
When('user clicks on the "Forgot Username" link', async function (this: CustomWorld) {
    await this.loginPage.clickForgotUsername();
});

// Match: Then user should see the "Enter Email Address" field
Then('user should see the "Enter Email Address" field', async function (this: CustomWorld) {
    await expect(this.page.getByRole('textbox', { name: 'Enter Email Address' })).toBeVisible();
});

// Match: And user should see the "Next" button
Then('user should see the "Next" button', async function (this: CustomWorld) {
    await expect(this.page.getByRole('button', { name: 'Click for forgotten username' })).toBeVisible();
});

// Match: When user enters recovery email "rsisodiya@welldocinc.com"
When('user enters recovery email {string}', async function (this: CustomWorld, email: string) {
    await this.loginPage.enterRecoveryEmail(email);
});

// Match: And user clicks the "Next" button
When('user clicks the "Next" button', async function (this: CustomWorld) {
    await this.loginPage.clickNext();
});

// Match: Then user clicks on "Return to Login"
Then('user clicks on "Return to Login"', async function (this: CustomWorld) {
    await this.loginPage.clickReturnToLogin();
});