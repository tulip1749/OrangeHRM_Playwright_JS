const {createBdd} = require('playwright-bdd');
const {Given, When, Then, Before} = createBdd();
const { expect, Page } = require('@playwright/test');
const { LoginPage } = require('../../PageObjects/LoginPage.js');
const testData  = require('../../Data/ConfigData.js');


let loginPage;

Before(async({page}) =>{
    loginPage = new LoginPage(page, expect);
})


Given('I have launched the web url and I am on the login page', async ()=> {
    await loginPage.websiteLaunch(testData.urls.baseUrl);
});

When('I provide valid credentials', async ()=> {
    await loginPage.validLogin(testData.webUrlLogin.validUser);
});

Then('I am logged in to the web application', async ({page})=> {
    await expect(page).toHaveURL(/.*dashboard*/);
});
