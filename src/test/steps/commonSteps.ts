import { Given, When } from '@cucumber/cucumber';

Given('user is on the login page', async function () {
  await this.page.goto('https://azqa32-dsm.testwd.com/CarePortal/login');
});

When('user logs in using default credentials', async function () {
  await this.page.getByPlaceholder('Enter Username').fill('welldocsu');
  await this.page.getByPlaceholder('Enter Password').fill('welldoc123');
  await this.page.getByRole('button', { name: /login/i }).click();
});
