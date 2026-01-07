import { Page, Locator } from '@playwright/test';

export default class LoginPage {
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly loginBtn: Locator;

    constructor(private page: Page) {
        console.log('[LoginPage] Initializing locators');

        // Multi-selector strategy for high resilience
        this.usernameField = page.locator('input#username')
            .or(page.getByPlaceholder(/username|email/i))
            .or(page.locator('input[name="username"]'));

        this.passwordField = page.locator('input#password')
            .or(page.getByPlaceholder(/password/i))
            .or(page.locator('input[name="password"]'));

        this.loginBtn = page.getByRole('button', { name: /login|sign in/i })
            .or(page.locator('button#login-button'))
            .or(page.locator('button[type="submit"]'));
    }

    async waitForPage() {
        console.log('[LoginPage] Waiting for login page to load');

        await this.page.waitForLoadState('domcontentloaded');
        await this.usernameField.waitFor({ state: 'visible', timeout: 15000 });

        console.log('[LoginPage] Login page is ready');
    }

    async enterUsername(user: string) {
        console.log(`[LoginPage] Entering username: ${user}`);

        await this.waitForPage();
        await this.usernameField.fill(user);

        console.log('[LoginPage] Username entered');
    }

    async enterPassword(pass: string) {
        console.log('[LoginPage] Entering password');

        await this.passwordField.waitFor({ state: 'visible' });
        await this.passwordField.fill(pass);

        console.log('[LoginPage] Password entered');
    }

    async clickLogin() {
        console.log(' [LoginPage] Clicking Login button');

        await this.loginBtn.click();

        console.log(' [LoginPage] Login button clicked');
    }
}
