const {test,expect} = require ("@playwright/test");
const {LoginPage} = require('../../pageObjects/loginPage.js');
const { CommonUtilities } = require("../../utils/commonUtilities.js");

test('Login with valid creds', async ({page})=> {

//creating object for LoginPage class
const loginPage= new LoginPage(page, expect);

await loginPage.websiteLaunch();

await loginPage.validLogin();

})