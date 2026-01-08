import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../helper/util/world';
import LoginPage from '../../pages/loginPage';
import { GlobalVariables } from '../../helper/util/globalVariables';

console.log('🔥 loginSteps.ts LOADED');

Given('user is on login page', async function (this: CustomWorld) {
    console.log('➡️ Step: User is on login page');
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.waitForPage();
    console.log('✅ Login page loaded');
});

// When('user logs in using default credentials', async function (this: CustomWorld) {
//     console.log('➡️ Step: User logs in using default credentials');
//     await this.loginPage.enterUsername(GlobalVariables.USERNAME);
//     await this.loginPage.enterPassword(GlobalVariables.PASSWORD);
//     await this.loginPage.clickLogin();
//     console.log('✅ Login form submitted');
// });

Then('user should be logged in successfully', async function (this: CustomWorld) {
    console.log('➡️ Step: Verify user is logged in successfully');
    await this.page.waitForSelector(
        'xpath=//*[@id="root"]/div[1]/div/div[1]/img',
        { state: 'visible', timeout: 15000 }
    );
    console.log('✅ User logged in successfully');
});
