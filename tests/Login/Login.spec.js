const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../PageObjects/LoginPage.js');
const testData  = require('../../Data/ConfigData.js');

test.only('Login with valid creds', async ({ page }) => {

    //creating object for LoginPage class
    const loginPage = new LoginPage(page, expect);

    await loginPage.websiteLaunch(testData.urls.baseUrl);

    await loginPage.validLogin(testData.webUrlLogin.validUser);


})