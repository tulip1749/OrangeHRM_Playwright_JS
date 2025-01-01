const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../PageObjects/LoginPage.js');
const { DashboardPage } = require('../../../PageObjects/DashboardPage.js');
const { PIMPage } = require('../../../PageObjects/PIMPage.js');

test('Navigating to Dashboard options', async ({ page }) => {

    const loginPage = new LoginPage(page, expect);
    const dashboardPage = new DashboardPage(page, expect);
    const pimPage = new PIMPage(page, expect);

    let employeeDetails =
    {
        firstName: "Aron",
        middleName: "A",
        lastName: "Aron",
        createDetailsNeeded: true
    }

    let employeeLoginDetails =
    {
        userName: "aron01",
        password: "aron123",
        confirmPassword: "aron123"
    }

    await loginPage.websiteLaunch();
    await loginPage.validLogin();
    await dashboardPage.selectingDashboarOptions("PIM");
    await pimPage.addEmployeeDetails(employeeDetails, employeeLoginDetails);
}
)