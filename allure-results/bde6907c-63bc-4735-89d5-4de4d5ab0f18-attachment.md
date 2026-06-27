# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Deposit module login >> HPP Login exitoso como cliente existente1 | EdgeHeadless | Harry Potter @edge-headless
- Location: tests\e2e\login.spec.ts:13:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Customer Login' }) to be visible

```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly customerLoginButton: Locator;
  6  |   readonly userSelect: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly welcomeMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.customerLoginButton = page.getByRole('button', { name: 'Customer Login' });
  13 |     this.userSelect = page.locator('#userSelect');
  14 |     this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
  15 |     this.welcomeMessage = page.locator('span.fontBig.ng-binding');
  16 |   }
  17 | 
  18 |   async open(): Promise<void> {
  19 |     await this.page.goto('');
  20 |     await this.page.waitForLoadState('networkidle', { timeout: 30_000 });
  21 |   }
  22 | 
  23 |   async clickCustomerLogin(): Promise<void> {
> 24 |     await this.customerLoginButton.waitFor({ state: 'visible', timeout: 15_000 });
     |                                    ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  25 |     await this.customerLoginButton.click();
  26 |   }
  27 | 
  28 |   async selectCustomer(customer: string): Promise<void> {
  29 |     await this.userSelect.selectOption({ label: customer });
  30 |   }
  31 | 
  32 |   async submit(): Promise<void> {
  33 |     await this.loginButton.click();
  34 |   }
  35 | 
  36 |   async expectDashboardFor(customer: string): Promise<void> {
  37 |     await expect(this.welcomeMessage).toContainText(customer);
  38 |   }
  39 | 
  40 |   async expectSubmitHidden(): Promise<void> {
  41 |     await expect(this.loginButton).toBeHidden();
  42 |   }
  43 | }
  44 | 
```