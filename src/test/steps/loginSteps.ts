import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../helper/util/world';
import LoginPage from '../../pages/loginPage';
import { GlobalVariables } from '../../helper/util/globalVariables';

Given('user is on login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.waitForPage();
});

When('user logs in using default credentials', async function (this: CustomWorld) {
    await this.loginPage.enterUsername(GlobalVariables.USERNAME);
    await this.loginPage.enterPassword(GlobalVariables.PASSWORD);
    await this.loginPage.clickLogin();
});

Then('user should be logged in successfully', async function (this: CustomWorld) {
    await this.page.waitForSelector(
        'xpath=//*[@id="root"]/div[1]/div/div[1]/img',
        { state: 'visible', timeout: 15000 }
    );
});
