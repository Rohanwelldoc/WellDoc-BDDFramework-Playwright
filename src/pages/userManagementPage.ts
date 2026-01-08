import { Page, Locator, expect } from '@playwright/test';

export class UserManagementPage {
  private readonly page: Page;

  // ===== Locators =====
  readonly userManagementLink: Locator;
  readonly addUserButton: Locator;
  readonly accountSelectButton: Locator;
  readonly selectAllOption: Locator;
  readonly firstCheckbox: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly roleDropdown: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly reenterPasswordInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly qualificationsInput: Locator;
  readonly designation1Input: Locator;
  readonly designation2Input: Locator;
  readonly descriptionInput: Locator;
  readonly uploadButton: Locator;
  readonly addUserConfirmButton: Locator;
  readonly dismissButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userManagementLink = page.getByRole('link', { name: 'User Management' });
    this.addUserButton = page.getByRole('button', { name: 'Add User' });
    this.accountSelectButton = page.getByRole('button', { name: 'Select' }).first();
    this.selectAllOption = page.getByRole('listitem').filter({ hasText: 'Select All' });
    this.firstCheckbox = page.locator('.checkmark.checkmark-unchecked').first();

    this.firstNameInput = page.getByRole('textbox', { name: 'Enter First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Enter Last Name' });
    this.roleDropdown = page.locator('.css-19bb58m'); // your role dropdown class
    this.emailInput = page.getByRole('textbox', { name: 'Enter Email Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password', exact: true });
    this.reenterPasswordInput = page.getByRole('textbox', { name: 'Re-enter Password' });
    this.mobileNumberInput = page.getByRole('textbox', { name: 'Enter Mobile Number' });
    this.qualificationsInput = page.getByRole('textbox', { name: 'Enter Qualifications' });
    this.designation1Input = page.locator('input[name="designationLine1"]');
    this.designation2Input = page.locator('input[name="designationLine2"]');
    this.descriptionInput = page.getByRole('textbox', { name: 'Enter Description' });
    this.uploadButton = page.getByText('Choose File');
    this.addUserConfirmButton = page.getByRole('button', { name: 'Add User' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
  }

  // ===== Actions =====
  async navigateToUserManagement() {
    await this.userManagementLink.click();
    await expect(this.addUserButton).toBeVisible({ timeout: 15000 });
  }

  async clickAddUser() {
    await this.addUserButton.click();
  }

  async selectAllAccounts() {
    await this.accountSelectButton.click();
    await this.selectAllOption.click();
    await this.accountSelectButton.click();
  }

  async selectFirstCheckbox() {
    await this.firstCheckbox.click();
  }

  async enterFirstName(name: string) {
    await this.firstNameInput.fill(name);
  }

  async enterLastName(name: string) {
    await this.lastNameInput.fill(name);
  }

  async selectRole(role: string) {
    await this.roleDropdown.click();
    await this.page.getByRole('option', { name: role }).click();
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async reenterPassword(password: string) {
    await this.reenterPasswordInput.fill(password);
  }

  async enterMobileNumber(number: string) {
    await this.mobileNumberInput.fill(number);
  }

  async enterQualifications(qual: string) {
    await this.qualificationsInput.fill(qual);
  }

  async enterDesignation1(desig: string) {
    await this.designation1Input.fill(desig);
  }

  async enterDesignation2(desig: string) {
    await this.designation2Input.fill(desig);
  }

  async enterDescription(desc: string) {
    await this.descriptionInput.fill(desc);
  }

 async uploadProfilePicture(filePath: string) {
    await this.uploadButton.setInputFiles(filePath);
}
  async clickAddUserButton() {
    await this.addUserConfirmButton.click();
  }

  async dismissPopup() {
    await this.dismissButton.click();
  }
}
