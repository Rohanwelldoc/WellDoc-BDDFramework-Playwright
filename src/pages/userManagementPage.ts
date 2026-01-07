import { Page, Locator, expect } from '@playwright/test';

export class UserManagementPage {
    readonly page: Page;
    readonly btn_addUser: Locator;
    readonly drop_account: Locator;
    readonly selectAll: Locator;
    readonly drop_role: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btn_addUser = page.locator("button.secondary-button", { hasText: /Add User/i });
        this.drop_account = page.locator("button[type='button']").first();
        this.selectAll = page.locator("text=Select All");
        this.drop_role = page.locator(".css-19bb58m");
    }

    async selectUserManagementMenu() {
        await this.page.click('text=User Management');
        await this.page.waitForLoadState('networkidle');
    }

    async clickAddUser() {
        await this.btn_addUser.click();
    }

    async selectAccount() {
        await this.drop_account.click();
        await this.selectAll.click();
        await this.drop_role.click();
        await this.page.waitForTimeout(500); 
    }

   async verifyRolesPresence(roles: string[]) {
    console.log(`Starting verification for roles: ${roles.join(', ')}`);
    
    for (const role of roles) {
        // Targeted locator: Look for the specific class used in the dropdown menu
        const roleOption = this.page.locator('.css-1nmdiq5-menu div')
            .filter({ hasText: new RegExp(`^\\s*${role}\\s*$`, 'i') })
            .first();
        
        try {
            // Wait for it to be visible. If it fails here, the dropdown might have closed.
            await roleOption.waitFor({ state: 'visible', timeout: 5000 });
            await roleOption.scrollIntoViewIfNeeded();
            
            await expect(roleOption).toBeVisible();
            console.log(`✅ Verified Role: ${role}`);
        } catch (error) {
            console.error(`❌ Could not find role: ${role}. Check if dropdown is still open.`);
            await this.page.screenshot({ path: `test-results/failed-role-${role.replace(/\s+/g, '_')}.png` });
            throw new Error(`Role "${role}" was not found or the dropdown closed unexpectedly.`);
        }
    }
}}