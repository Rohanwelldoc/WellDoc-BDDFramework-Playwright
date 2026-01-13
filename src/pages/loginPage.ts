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
    }

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
        console.log('🔍 [LoginPage] Clicking Forgot Username link');
        await this.forgotUsernameLink.click();
        console.log('✅ [LoginPage] Navigation to Forgot Username screen triggered');
    }

    async enterRecoveryEmail(email: string) {
        console.log(`📧 [LoginPage] Entering recovery email: ${email}`);
        await this.recoveryEmailInput.click(); // Standard practice to ensure focus
        await this.recoveryEmailInput.fill(email);
        console.log('✅ [LoginPage] Recovery email populated');
    }

    async clickNext() {
        console.log('🖱️ [LoginPage] Clicking Next button (Click for forgotten username)');
        await this.nextBtn.click();
        console.log('✅ [LoginPage] Next button clicked');
    }

    async clickReturnToLogin() {
        console.log('🔙 [LoginPage] Clicking Return to Login');
        await this.returnToLoginLink.click();
        console.log('✅ [LoginPage] Returning to main Login page');
    }}