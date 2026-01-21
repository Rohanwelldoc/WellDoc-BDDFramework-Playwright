import { Before, After, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from '@playwright/test';
import { CustomWorld } from '../../helper/util/world';
import { GlobalVariables } from '../../helper/util/globalVariables';
import * as fs from 'fs';
import { UserManagementPage } from '../../pages/userManagementPage';
import HelpPage from '../../pages/helpPage';
import LoginPage from '../../pages/loginPage';


setDefaultTimeout(60 * 1000);

// ==========================
// BEFORE HOOK
// ==========================
Before(async function (this: CustomWorld) {
    console.log(">>> Before Hook: Initializing Test Environment...");
    try {
        if (this.browser) {
            console.log(">>> Browser instance already exists. Closing it...");
            await this.browser.close();
        }

        let platform = (GlobalVariables.PLATFORM_NAME || 'chromium').toLowerCase();
        if (platform === 'android') platform = 'chromium';

        console.log(`>>> Launching Browser: ${platform}`);
        switch (platform) {
            case 'firefox':
                this.browser = await firefox.launch({ headless: false });
                break;
            case 'webkit':
                this.browser = await webkit.launch({ headless: false });
                break;
            default:
                this.browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
                break;
        }

        if (!this.browser) throw new Error("Browser failed to launch.");

        console.log(">>> Browser launched successfully.");
        this.context = await this.browser.newContext({
            viewport: null,
            recordVideo: {
                dir: 'test-results/videos/',
                size: { width: 1280, height: 720 }
            }
        });
        this.page = await this.context.newPage();

        this.loginPage = new LoginPage(this.page);
        this.helpPage = new HelpPage(this.page);
        this.userPage = new UserManagementPage(this.page);

        if (this.page && GlobalVariables.BASE_URL) {
            console.log(`>>> Navigating to: ${GlobalVariables.BASE_URL}`);
            let retries = 3;
            while (retries > 0) {
                try {
                    await this.page.goto(GlobalVariables.BASE_URL, { waitUntil: 'load' });
                    break;
                } catch (error) {
                    console.error(">>> ERROR navigating to URL. Retrying...");
                    retries--;
                    if (retries === 0) throw error;
                }
            }
        }

    } catch (error) {
        console.error(">>> ERROR in Before Hook:", error);
        throw error;
    }
});

// ==========================
// AFTER HOOK (Per Scenario)
// ==========================
After(async function (this: CustomWorld, scenario) {
    console.log(">>> After Hook: Cleaning up resources...");
    try {
        if (this.page) {
            if (scenario.result?.status === Status.FAILED) {
                console.log(">>> Scenario failed. Capturing screenshot...");
                try {
                    const screenshot = await this.page.screenshot();
                    this.attach(screenshot, "image/png");
                } catch (error) {
                    console.error(">>> ERROR capturing screenshot:", error);
                }
            }

            const videoPath = await this.page.video()?.path();
            await this.page.close();

            if (scenario.result?.status === Status.FAILED && videoPath) {
                console.log(">>> Attaching video for failed scenario...");
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (fs.existsSync(videoPath)) {
                    const videoBuffer = fs.readFileSync(videoPath);
                    this.attach(videoBuffer, 'video/webm');
                } else {
                    console.error(">>> Video file not found:", videoPath);
                }
            }
        }

        if (this.context) await this.context.close();
        if (this.browser) await this.browser.close();

        console.log(">>> After Hook: Resources cleaned up successfully.");
    } catch (error) {
        console.error(">>> ERROR in After Hook:", error);
        throw error;
    }
});
