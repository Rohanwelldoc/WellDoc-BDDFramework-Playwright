import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, BrowserContext, Browser } from '@playwright/test';
import LoginPage from '../../pages/loginPage'; 
import { UserManagementPage } from '../../pages/userManagementPage'; 
import HelpPage from "../../pages/helpPage"; 


export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  context!: BrowserContext;
  loginPage!: LoginPage;
  userPage!: UserManagementPage; 
  helpPage!: HelpPage;        


  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);




// npx cucumber-js "src/test/features/login.feature" --require-module ts-node/register --require "src/test/steps/loginSteps.ts" --require "src/test/hooks/hooks.ts" --format summary --dry-run