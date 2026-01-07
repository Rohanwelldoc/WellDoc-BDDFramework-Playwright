import { Page, Locator, expect } from '@playwright/test';

export class AssignmentPage {
    readonly page: Page;
    readonly tabPendingAssignment: Locator;
    readonly tabReassign: Locator;
    readonly listCheckboxes: Locator;
    readonly btnNextEnabled: Locator;
    readonly checkboxCareTeam: Locator;
    readonly btnAssign: Locator;
    readonly btnOkPopup: Locator;
    readonly tabCondition: Locator;
    readonly btnSort: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabPendingAssignment = page.locator("//div[.='Pending Assignment']");
        this.tabReassign = page.locator("//div[1][.='Reassign']");
        this.listCheckboxes = page.locator("//tbody//div[@class='checkmark checkmark-unchecked']");
        this.btnNextEnabled = page.locator("//div[@class='assignment-button enabled']");
        this.checkboxCareTeam = page.locator("//*[@id='assignment-table']/div/table/tbody/tr[1]/td[1]/div/label/div");
        this.btnAssign = page.locator("//div[@class='assignment-button enabled']");
        this.btnOkPopup = page.locator("//button[@aria-label='Dismiss']");
        this.tabCondition = page.locator("//span[normalize-space()='Condition']");
        this.btnSort = page.locator("//th[@class='col-3']//button");
    }

    async clickHeaderTab(tabName: string) {
        const indexMap: { [key: string]: number } = {
            "action items": 1, "patients": 2, "assignment": 3, "messages": 4, "help": 5
        };
        const index = indexMap[tabName.toLowerCase()];
        await this.page.locator(`//div[@class='menu-link-container roll-spec__link-container'][${index}]`).click();
    }

    async selectMultipleCheckboxes(count: number) {
        await this.listCheckboxes.first().waitFor();
        for (let i = 0; i < count; i++) {
            await this.listCheckboxes.nth(i).click();
        }
    }

    async validateConditionHoverWithPagination(patternType: string) {
        let conditionSatisfied = false;
        const pageItems = this.page.locator("//li[@class='page-item']");
        const pageCount = await pageItems.count();

        for (let i = 0; i <= pageCount; i++) {
            if (i > 0) await pageItems.nth(i - 1).click();
            conditionSatisfied = await this.checkConditionsOnCurrentPage(patternType);
            if (conditionSatisfied) break;
        }
        expect(conditionSatisfied).toBeTruthy();
    }

    private async checkConditionsOnCurrentPage(patternType: string): Promise<boolean> {
        const spans = this.page.locator("//table[@class='table my-0 table-sm']//tbody//tr//td[5]//span");
        const count = await spans.count();
        for (let i = 0; i < count; i++) {
            const element = spans.nth(i);
            await element.scrollIntoViewIfNeeded();
            await element.hover();
            const hoverText = await this.page.locator("//table[@class='table my-0 table-sm']//tbody//tr//td[5]//div[2]").nth(i).innerText();
            const regex = patternType === "1" 
                ? /^[A-Za-z0-9\s()\-]+ and [A-Za-z0-9\s()\-]+$/ 
                : /^[A-Za-z0-9\s()\-]+, [A-Za-z0-9\s()\-]+ and [A-Za-z0-9\s()\-]+$/;
            if (regex.test(hoverText.trim())) return true;
        }
        return false;
    }
}