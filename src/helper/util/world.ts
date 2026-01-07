import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, BrowserContext, Browser } from '@playwright/test';
import LoginPage from '../../pages/loginPage'; 
import { UserManagementPage } from '../../pages/userManagementPage'; 
import { AssignmentPage } from '../../pages/assignmentPage'; 

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  context!: BrowserContext;
  loginPage!: LoginPage;
  userPage!: UserManagementPage; 
  // 2. Add the assignmentPage property here
  assignmentPage!: AssignmentPage; 

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);




// npx cucumber-js "src/test/features/login.feature" --require-module ts-node/register --require "src/test/steps/loginSteps.ts" --require "src/test/hooks/hooks.ts" --format summary --dry-run