const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../PageObjects/LoginPage.js');
const { DashboardPage } = require('../../PageObjects/DashboardPage.js');

test.skip('Navigating to Dashboard options', async ({ page }) => {

    const loginPage = new LoginPage(page, expect);
    const dashboardPage = new DashboardPage(page, expect);

    await loginPage.websiteLaunch();
    await loginPage.validLogin();
    await dashboardPage.selectingDashboarOptions("PIM");

}
)