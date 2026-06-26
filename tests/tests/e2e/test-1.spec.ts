import { test } from '@playwright/test';
import { LoginPage } from '@pages/login-page';

// Basic smoke test - verifies the basic login flow with a single customer
test('Basic login smoke test @chrome-headless', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.clickCustomerLogin();
  await loginPage.selectCustomer('Harry Potter');
  await loginPage.submit();
  await loginPage.expectDashboardFor('Harry Potter');
});