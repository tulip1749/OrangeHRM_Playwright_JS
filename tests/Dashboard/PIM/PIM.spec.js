const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../PageObjects/LoginPage.js');
const { DashboardPage } = require('../../../PageObjects/DashboardPage.js');
const { PIMPage } = require('../../../PageObjects/PIMPage.js');

const configData  = require('../../../Data/ConfigData.js'); 

test('Navigating to Dashboard options', async ({ page }) => {

    const loginPage = new LoginPage(page, expect);
const dashboardPage = new DashboardPage(page, expect);
const pimPage = new PIMPage(page, expect);

    /* let employeeDetails =
    {
        firstName: "Aron",
        middleName: "A",
        lastName: "Aron",
        createDetailsNeeded: true
    } */

    let employeeLoginDetails =
    {
        userName: "aron01",
        password: "aron123",
        confirmPassword: "aron123"
    }

    await loginPage.websiteLaunch(configData.urls.baseUrl);
    await loginPage.validLogin(configData.webUrlLogin.validUser);
    await dashboardPage.selectingDashboarOptions("PIM");
    const employeeDetails = await PIMPage.readCSV('./Data/EmployeeData.csv');
    for (const emp of employeeDetails)
    {
        await pimPage.addEmployeeDetails(emp,employeeLoginDetails);
    }
    
    
    
}
)