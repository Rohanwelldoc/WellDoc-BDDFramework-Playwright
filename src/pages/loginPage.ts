// Location: src/pages/loginPage.ts
import { Page, Locator } from '@playwright/test';

export default class LoginPage {
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly loginBtn: Locator;
    private readonly forgotUsernameLink: Locator;
    private readonly recoveryEmailInput: Locator;
    private readonly nextBtn: Locator;
    private readonly returnToLoginLink: Locator;
    private readonly customerCareNumberLink: Locator;
    private readonly faqBtn: Locator;
  private readonly contactUsBtn: Locator;
  private readonly termsOfUseLink: Locator;
  private readonly privacyPolicyLink: Locator;
  private readonly copyrightText: Locator;
  private readonly poweredByText: Locator;
  private readonly patientsTab: Locator;
  private readonly addPatientBtn: Locator;
  private readonly addNewPatientText: Locator;

   private readonly addPatientTitle: Locator;
   private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly dob: Locator;
  private readonly email: Locator;
  private readonly mobile: Locator;
  private readonly gender: Locator;
  private readonly diabetesType: Locator;
  private readonly otherConditions: Locator;
  private readonly cancelContinueBtn: Locator;
  private readonly maleOption: Locator;
private readonly femaleOption: Locator;
private readonly transMaleOption: Locator;
private readonly transFemaleOption: Locator;
private readonly otherOption: Locator;
private readonly preferNotOption: Locator;
 private readonly diabetesTypeLabel: Locator;
  private readonly type1Option: Locator;
  private readonly type2Option: Locator;
  private readonly noneOption: Locator;  
  private readonly otherConditionsLabel: Locator;
  private readonly heartFailureChk: Locator;
  private readonly highBloodPressureChk: Locator;
  private readonly weightManagementChk: Locator;
  private readonly sleepApneaChk: Locator;
  private readonly metabolicDiseaseChk: Locator;


    constructor(private page: Page) {
        console.log('[LoginPage] Initializing locators');

        // Login Locators
        this.usernameField = page.locator('input#username')
            .or(page.getByPlaceholder(/username|email/i))
            .or(page.locator('input[name="username"]'));

        this.passwordField = page.locator('input#password')
            .or(page.getByPlaceholder(/password/i))
            .or(page.locator('input[name="password"]'));

        this.loginBtn = page.getByRole('button', { name: /login|sign in/i })
            .or(page.locator('button#login-button'))
            .or(page.locator('button[type="submit"]'));

        // Forgot Username Locators
        this.forgotUsernameLink = page.getByRole('link', { name: 'Forgot Username' });
        this.recoveryEmailInput = page.getByRole('textbox', { name: 'Enter Email Address' });
        this.nextBtn = page.getByRole('button', { name: 'Click for forgotten username' });
        this.returnToLoginLink = page.getByRole('link', { name: 'Return to Login' });
        this.customerCareNumberLink = page.getByRole('link', { name: /-888-327-5345/ });

        //Quick Links and Footer Text Locators
   this.copyrightText =page.getByLabel(/Copyright.*Welldoc/i);
    this.poweredByText =page.getByLabel('Copyright 2023 Welldoc, Inc');
    this.faqBtn = page.getByRole('button', { name: /FAQ/i });
    this.contactUsBtn = page.getByRole('button', { name: /contact us/i });
    this.termsOfUseLink = page.getByRole('link', { name: /Terms of Use/i });
    this.privacyPolicyLink = page.getByRole('link', { name: /Privacy Policy/i });
    
    // AddPatient Locators
    this.patientsTab = page.getByRole('link', { name: 'Patients' });
    this.addPatientBtn = page.getByRole('button', {name: 'Click to add a new patient',});
     this.addNewPatientText = page.getByText('Add New Patient');

     // Inside Add PAtient Locators

    this.addPatientBtn = page.getByRole('button', {name: 'Click to add a new patient',});
    this.addPatientTitle = page.getByText('Add New Patient');
    this.firstName = page.getByRole('textbox', {name: 'Click to enter first name',});
    this.lastName = page.getByRole('textbox', {name: 'Click to enter last name',});
    this.dob = page.locator('.react-datepicker__input-container');
    this.email = page.getByRole('textbox', {name: 'Click to enter email',});    
    this.mobile = page.getByRole('textbox', {name: 'Click to enter mobile number', });
    this.gender = page.getByText('Gender', { exact: true });
    this.diabetesType = page.getByText('Diabetes Type*');
    this.otherConditions = page.getByText('Other Condition(s)');
    this.cancelContinueBtn = page.getByText('CancelContinue');
    this.maleOption = page.locator('div').filter({ hasText: /^Male$/ });
  this.femaleOption = page.locator('div').filter({ hasText: /^Female$/ });
  this.transMaleOption = page.getByRole('button', { name: /Transgender Male/i });
  this.transFemaleOption = page.getByRole('button', { name: /Transgender Female/i });
  this.otherOption = page.getByRole('button', { name: 'click to select Other' });
  this.preferNotOption = page.getByRole('button', { name: 'click to select Prefer not to' });
   this.diabetesTypeLabel = page.getByText('Diabetes Type*');

    this.type1Option = page.locator('div').filter({ hasText: /^Type 1$/ });
    this.type2Option = page.locator('div').filter({ hasText: /^Type 2$/ });
    this.noneOption = page.locator('.mt-15 > fieldset > .row > div:nth-child(3)');
    this.otherConditionsLabel = page.getByText('Other Condition(s)');
    this.heartFailureChk = page.getByRole('checkbox', {name: /Heart/i });
    this.highBloodPressureChk = page.getByRole('checkbox', {name: /High/i});
    this.weightManagementChk = page.getByRole('checkbox', {name: /Weight/i});
    this.sleepApneaChk = page.getByRole('checkbox', {name: /Sleep/i});
    this.metabolicDiseaseChk = page.getByRole('checkbox', { name: /Metabolic Dysfunction/i});

    };
    


    async waitForPage() {
        console.log('[LoginPage] Waiting for login page to load');
        await this.page.waitForLoadState('domcontentloaded');
        await this.usernameField.waitFor({ state: 'visible', timeout: 15000 });
        console.log('[LoginPage] Login page is ready');
    }

    async enterUsername(user: string) {
        console.log(`[LoginPage] Entering username: ${user}`);
        await this.usernameField.fill(user);
    }

    async enterPassword(pass: string) {
        console.log('[LoginPage] Entering password');
        await this.passwordField.waitFor({ state: 'visible' });
        await this.passwordField.fill(pass);
    }

    async clickLogin() {
        console.log('[LoginPage] Clicking Login button');
        await this.loginBtn.click();
    }

// Forgot Username Methods
    async clickForgotUsername() {
        console.log('[LoginPage] Clicking Forgot Username link');
        await this.forgotUsernameLink.click();
        console.log('[LoginPage] Navigation to Forgot Username screen triggered');
    }

    async enterRecoveryEmail(email: string) {
        console.log(`[LoginPage] Entering recovery email: ${email}`);
        await this.recoveryEmailInput.click(); // Standard practice to ensure focus
        await this.recoveryEmailInput.fill(email);
        console.log(' [LoginPage] Recovery email populated');
    }

    async clickNext() {
        console.log('[LoginPage] Clicking Next button (Click for forgotten username)');
        await this.nextBtn.click();
        console.log('[LoginPage] Next button clicked');
    }

    async clickReturnToLogin() {
        console.log('[LoginPage] Clicking Return to Login');
        await this.returnToLoginLink.click();
        console.log('[LoginPage] Returning to main Login page');
    }
    
async isCustomerCareNumberVisible(phoneNumber): Promise<boolean> {
  console.log(' Verifying customer care number visibility');
  await this.customerCareNumberLink.waitFor({ state: 'visible', timeout: 5000 });
  return await this.customerCareNumberLink.isVisible();
}
async verifyQuickLinksVisible(): Promise<boolean> {
  console.log('[LoginPage] Verifying quick links visibility');

  await this.faqBtn.waitFor({ state: 'visible', timeout: 5000 });
  await this.contactUsBtn.waitFor({ state: 'visible', timeout: 5000 });
  await this.termsOfUseLink.waitFor({ state: 'visible', timeout: 5000 });
  await this.privacyPolicyLink.waitFor({ state: 'visible', timeout: 5000 });

  console.log('[LoginPage] All quick links are visible');
  return true;
}
async verifyFooterTextVisible(): Promise<boolean> {
  console.log('[LoginPage] Verifying footer text visibility');

  await this.copyrightText.waitFor({ state: 'visible', timeout: 5000 });
  await this.poweredByText.waitFor({ state: 'visible', timeout: 5000 });

  console.log('[LoginPage] Footer text is visible');
  return true;
}

// AddPatient Methods
async navigateToPatientList() {
    console.log('[PatientPage] Navigating to Patient List');

    await this.patientsTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.patientsTab.click();
  }

  async clickAddPatient() {
    console.log('[PatientPage] Clicking Add Patient button');

    await this.addPatientBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.addPatientBtn.click();
  }

 async verifyAddPatientScreenVisible() {
    console.log('🧾 [PatientPage] Verifying Add New Patient screen');

    await this.addNewPatientText.waitFor({state: 'visible',timeout: 10000,
    });

    console.log('✅ [PatientPage] Add New Patient screen is visible');
    return true;
  }

  async verifyAddPatientFieldsVisible() {
 console.log('Verifying Add New Patient fields');
await this.firstName.waitFor({ state: 'visible' });
console.log('First Name field is visible');
await this.lastName.waitFor({ state: 'visible' });
console.log('Last Name field is visible');
await this.dob.waitFor({ state: 'visible' });
console.log('Date of Birth field is visible');
await this.email.waitFor({ state: 'visible' });
console.log('Email field is visible');
await this.mobile.waitFor({ state: 'visible' });
console.log('Mobile field is visible');
await this.gender.waitFor({ state: 'visible' });
console.log('Gender field is visible');
await this.diabetesType.waitFor({ state: 'visible' });
console.log('Diabetes Type field is visible');
await this.otherConditions.waitFor({ state: 'visible' });
console.log('Other Conditions field is visible');


    console.log('All Add New Patient fields are visible');
  }


async verifyCancelAndContinueButtonsVisible() {
  console.log('Verifying Cancel and Continue buttons');

  await this.cancelContinueBtn.waitFor({ state: 'visible', timeout: 5000 });

  console.log('Cancel and Continue buttons are visible');
}

async selectAndVerifyGenderOptions() {
console.log('Verifying gender radio button selection');
await this.maleOption.waitFor({ state: 'visible', timeout: 5000 });
console.log('Male gender option is visible');
await this.maleOption.click();
console.log('Male gender option selected');
await this.femaleOption.click();
console.log('Female gender option selected');
await this.transMaleOption.click();
console.log('Transgender Male option selected');
await this.transFemaleOption.click();
console.log('Transgender Female option selected');
await this.otherOption.click();
console.log('Other gender option selected');
await this.preferNotOption.click();
console.log('Prefer Not to Answer option selected');


  console.log('User can toggle and select one gender option at a time');
}
 async openDiabetesTypeSection() {
    await this.diabetesTypeLabel.waitFor({ state: 'visible', timeout: 5000 });
    console.log('Diabetes Type section visible');
  }

  async selectDiabetesTypes() {
    await this.type1Option.waitFor({ state: 'visible', timeout: 5000 });
    await this.type1Option.click();
    console.log('Type 1 diabetes selected');

    await this.type2Option.click();
    console.log('Type 2 diabetes selected');

    await this.noneOption.click();
    console.log('None diabetes option selected');
    console.log('User can toggle and select one diabetic option at a time');
  }


async openOtherConditionsSection() {
    await this.otherConditionsLabel.waitFor({ state: 'visible', timeout: 5000 });
    await this.otherConditionsLabel.click();
    console.log('Other Conditions section opened');
  }

  async selectMultipleOtherConditions() {
    await this.heartFailureChk.waitFor({ state: 'visible', timeout: 5000 });
    await this.heartFailureChk.check();
    console.log('Heart Failure selected');

    await this.highBloodPressureChk.check();
    console.log('High Blood Pressure selected');

    await this.weightManagementChk.check();
    console.log('Weight Management Program selected');

    await this.sleepApneaChk.check();
    console.log('Sleep Apnea selected');

    await this.metabolicDiseaseChk.check();
    console.log('Metabolic Dysfunction condition selected');
  }

}




