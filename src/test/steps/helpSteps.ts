import { Given, When, Then ,} from '@cucumber/cucumber';
import { expect } from '@playwright/test'; 
import { CustomWorld } from '../../helper/util/world';
import LoginPage from '../../pages/loginPage';
import { GlobalVariables } from '../../helper/util/globalVariables';
import HelpPage from '../../pages/helpPage';

console.log('🔥 helpSteps.ts LOADED');

Then(
  "user should see Help section under profile information",
  async function (this: CustomWorld) {
    const helpPage = new HelpPage(this.page);

    const visible = await helpPage.isHelpSectionVisible();

    expect(visible).toBeTruthy();
  });

  Then(
  "user should click on Help section under profile information",
  async function (this: CustomWorld) {
    const helpPage = new HelpPage(this.page);
    await helpPage.clickHelp();

  });

  Then(
  'application should display the following options in About section:',
  async function (this: CustomWorld, dataTable) {

    const helpPage = new HelpPage(this.page);

    // Open About section once
    await helpPage.openAboutSection();

    const options: string[] = dataTable.raw().flat();
    console.log('Options to verify:', options);

    for (const option of options) {
      const visible = await helpPage.isOptionVisible(option);
      expect(visible).toBeTruthy();
     
    }
    console.log('All Options verified succssefully');
  }
);