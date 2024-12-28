const {test,expect} = require ("@playwright/test");
const {LoginPage} = require('../../PageObjects/LoginPage.js');

test.skip('Login with valid creds', async ({page})=> {

//creating object for LoginPage class
const loginPage= new LoginPage(page, expect);

await loginPage.websiteLaunch();

await loginPage.validLogin();

})