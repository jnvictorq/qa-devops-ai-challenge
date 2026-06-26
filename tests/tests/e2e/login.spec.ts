import { test } from '@playwright/test';
import { LoginPage } from '@pages/login-page';
import { projectTagForBrowser } from '@support/browser-matrix';
import {
  noCustomerFeature1,
  noCustomerFeature2,
  successfulLoginFeature1,
  successfulLoginFeature2,
} from '@support/test-data';

test.describe('Deposit module login', () => {
  for (const example of successfulLoginFeature1) {
    test(
      `HPP Login exitoso como cliente existente1 | ${example.browser} | ${example.customer} ${projectTagForBrowser(example.browser)}`,
      async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.clickCustomerLogin();
        await loginPage.selectCustomer(example.customer);
        await loginPage.submit();
        await loginPage.expectDashboardFor(example.customer);
      }
    );
  }

  for (const example of successfulLoginFeature2) {
    test(
      `HPP Login exitoso como cliente existente2 | ${example.browser} | ${example.customer} ${projectTagForBrowser(example.browser)}`,
      async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.clickCustomerLogin();
        await loginPage.selectCustomer(example.customer);
        await loginPage.submit();
        await loginPage.expectDashboardFor(example.customer);
      }
    );
  }

  for (const browser of noCustomerFeature1) {
    test(`TTF Intentar login sin seleccionar cliente1 | ${browser} ${projectTagForBrowser(browser)}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.clickCustomerLogin();
      await loginPage.expectSubmitHidden();
    });
  }

  for (const browser of noCustomerFeature2) {
    test(`TTF Intentar login sin seleccionar cliente2 | ${browser} ${projectTagForBrowser(browser)}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.clickCustomerLogin();
      await loginPage.expectSubmitHidden();
    });
  }
});
