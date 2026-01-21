import { Page, Locator } from '@playwright/test';

export default class HelpPage {

private readonly page: Page;
private readonly helpOption: Locator;
private readonly aboutOption: Locator;
 private readonly welldocText: Locator;
 private readonly versionLabel: Locator;
 private readonly versionValue: Locator;
 private readonly buildLabel: Locator;
 private readonly udiImage: Locator;
  private readonly manufacturerInfo: Locator;
 private  readonly copyrightText: Locator;

    constructor(page: Page) {
    this.page = page;

     this.helpOption = page.getByText("Help", { exact: true });

    this.aboutOption = page.getByText('About', { exact: true });
    this.welldocText = page.locator('div').filter({ hasText: /^Welldoc®$/ });
    this.versionLabel = page.getByText('Version:');
    this.versionValue = page.getByText('3.4', { exact: true });
    this.buildLabel = page.getByText('Build:');
    this.udiImage = page.getByRole('img', { name: 'Reference' }).nth(1);
    this.manufacturerInfo = page.getByText('Manufactured by:Welldoc, Inc.');
    this.copyrightText = page.getByLabel('Copyright 2023 Welldoc, Inc');

  }

  async isHelpSectionVisible(): Promise<boolean> {
    return await this.helpOption.isVisible();
  }

  async clickHelp() {
    await this.helpOption.click();
  }

  async openAboutSection() {
    await this.aboutOption.click();
  }

  async isOptionVisible(option: string): Promise<boolean> {
    switch (option) {
      case 'About':
        return await this.aboutOption.isVisible();

      case 'Welldoc®':
        return await this.welldocText.isVisible();

      case 'version':
        return await this.versionLabel.isVisible();

      case 'Build':
        return await this.buildLabel.isVisible();

      case 'UDI Image':
        return await this.udiImage.isVisible();

      case 'Manufacturer Info':
        return await this.manufacturerInfo.isVisible();

      case '© Copyright':
        return await this.copyrightText.isVisible();

      default:
        throw new Error(`Unsupported About option: ${option}`);
    }
  }
}

