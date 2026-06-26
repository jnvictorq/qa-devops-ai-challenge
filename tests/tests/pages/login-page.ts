import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly customerLoginButton: Locator;
  readonly userSelect: Locator;
  readonly loginButton: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.customerLoginButton = page.getByRole('button', { name: 'Customer Login' });
    this.userSelect = page.locator('#userSelect');
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
    this.welcomeMessage = page.locator('span.fontBig.ng-binding');
  }

  async open(): Promise<void> {
    await this.page.goto('');
    await this.page.waitForLoadState('networkidle', { timeout: 30_000 });
  }

  async clickCustomerLogin(): Promise<void> {
    await this.customerLoginButton.waitFor({ state: 'visible', timeout: 15_000 });
    await this.customerLoginButton.click();
  }

  async selectCustomer(customer: string): Promise<void> {
    await this.userSelect.selectOption({ label: customer });
  }

  async submit(): Promise<void> {
    await this.loginButton.click();
  }

  async expectDashboardFor(customer: string): Promise<void> {
    await expect(this.welcomeMessage).toContainText(customer);
  }

  async expectSubmitHidden(): Promise<void> {
    await expect(this.loginButton).toBeHidden();
  }
}
