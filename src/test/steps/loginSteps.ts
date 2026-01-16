// Location: src/test/steps/loginSteps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test'; 
import { CustomWorld } from '../../helper/util/world';
import LoginPage from '../../pages/loginPage';
import { GlobalVariables } from '../../helper/util/globalVariables';

console.log('🔥 loginSteps.ts LOADED');

Given('user is on login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.page.goto('https://azqa32-dsm.testwd.com/CarePortal/login');
    await this.loginPage.waitForPage();
    console.log('✅ Navigated to Login Page');
});

When('user logs in using default credentials', async function () {
  await this.page.getByPlaceholder('Enter Username').fill('welldocsu');
  await this.page.getByPlaceholder('Enter Password').fill('welldoc123');
  await this.page.getByRole('button', { name: /login/i }).click();
});


Then('user should be logged in successfully', async function (this: CustomWorld) {
    await this.page.waitForSelector(
        'xpath=//*[@id="root"]/div[1]/div/div[1]/img',
        { state: 'visible', timeout: 15000 }
        
    );
    console.log('✅ user Logged in Successfully');


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

Then(
  'user should see customer care number {string}',
  async function (this: CustomWorld, phoneNumber: string) {
    const visible = await this.loginPage.isCustomerCareNumberVisible(phoneNumber);
    expect(visible).toBeTruthy();
  });

  // quick links and footer text on Forgot Username screen
Then('user should see all quick links', async function (this: CustomWorld) {
  const isVisible = await this.loginPage.verifyQuickLinksVisible();
  expect(isVisible).toBeTruthy();
});

Then('user should see welldoc footer text', async function (this: CustomWorld) {
  const isVisible = await this.loginPage.verifyFooterTextVisible();
  expect(isVisible).toBeTruthy();
});

//
Given(
  'user is logged into Management Portal as CareManagement user', async function (this: CustomWorld) {

await this.page.goto('https://azqa32-dsm.testwd.com/CarePortal/login');

    await this.loginPage.enterUsername('egopal+hcp@welldoc.com');
    await this.loginPage.enterPassword('welldoc123');
    await this.loginPage.clickLogin();
  }
);

Given(
  'user is on Patient List screen',
  async function (this: CustomWorld) {
    await this.loginPage.navigateToPatientList();
  }
);

When(
  'user clicks on Add Patient button',
  async function (this: CustomWorld) {
    await this.loginPage.clickAddPatient();
  }
);

Then(
  'Add Patient screen should be displayed',
  async function (this: CustomWorld) {
    const visible = await this.loginPage.verifyAddPatientScreenVisible();
    expect(visible).toBeTruthy();
  }
);

Then(
  'user should see all fields on Add New Patient page',
  async function (this: CustomWorld) {
    await this.loginPage.verifyAddPatientFieldsVisible();
  }
);
//
Then(
  'user should see Cancel and Continue buttons',
  async function (this: CustomWorld) {
    await this.loginPage.verifyCancelAndContinueButtonsVisible();
  }
);
Then(
  'user should be able to select each gender option',
  async function (this: CustomWorld) {
    await this.loginPage.selectAndVerifyGenderOptions();
  }
);

When('user opens Diabetes Type section', async function (this: CustomWorld) {
  await this.loginPage.openDiabetesTypeSection();
});

Then('user should be able to select diabetes type options', async function (this: CustomWorld) {
  await this.loginPage.selectDiabetesTypes();
});

