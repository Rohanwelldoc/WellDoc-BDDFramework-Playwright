import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Status } from "@cucumber/cucumber";


declare const allure: any;

export class TestSession extends World {
    
    public testName = "";
    public testData: any = {};

    constructor(options: IWorldOptions) {
        super(options);
    }

    setSession(name: string, data: any) {
        this.testName = name;
        this.testData = data;

        allure.label("testName", name);

        if (data?.TestCaseID) {
            allure.label("TestCaseID", data.TestCaseID.toString());
        }
        if (data?.DiseaseCombination) {
            allure.label("DiseaseCombination", data.DiseaseCombination.toString());
        }
    }

    attachLog(msg: string) {
        allure.step(msg);
    }

    async attachScreenshot(page: any) {
        if (!page) return;
        const buffer = await page.screenshot();
        allure.attachment("Screenshot", buffer, "image/png");
    }

    attachTestData() {
        allure.attachment(
            "TestData",
            JSON.stringify(this.testData, null, 2),
            "application/json"
        );
    }

    endScenario(status: typeof Status[keyof typeof Status]) {
        allure.label("scenarioStatus", status);
    }
}

setWorldConstructor(TestSession);
