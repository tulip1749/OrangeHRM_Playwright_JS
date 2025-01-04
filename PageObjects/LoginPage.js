const { CommonUtilities } = require('../Utils/CommonUtilities');

class LoginPage extends CommonUtilities {

    constructor(page, expect)
    {
        super(page);
        this.page = page;
        this.expect = expect;
        this.mentionedUserName = page.locator(".orangehrm-login-error p:nth-child(1)");
        this.mentionedPassword = page.locator(".orangehrm-login-error p:nth-child(2)");
        this.userNameField = page.locator("input[name='username']");
        this.passwordField = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");

    }

    async websiteLaunch(url)
    {
        await this.page.goto(url);
        
        // Tallying the page URL
        await this.expect(this.page).toHaveURL(/opensource-demo\.orangehrmlive\.com/);
    }

    /* async extractedUserName()
    {
        let mentionedUserNameContent = await this.mentionedUserName.textContent();
        return (await mentionedUserNameContent.split(":")[1].trim());
    }

    async extractedPassword()
    {
        let mentionedPasswordContent = await this.mentionedPassword.textContent();
        return (await mentionedPasswordContent.split(":")[1].trim());
    } */

    async validLogin(validCreds)
    {
        // extract username and password
        /* let userName = await this.extractedUserName();
        let password = await this.extractedPassword(); */

        await this.userNameField.fill(validCreds.username);
        await this.passwordField.fill(validCreds.password);
        await this.loginButton.click();
        
        //Handle dialogs 

        await this.handleDialogs();
        
        // Verifying successful login
        //await this.expect(await this.page).toHaveURL(/.*dashboard*/);
        await this.expect(await this.page.title()).toBe("OrangeHRM");

    }

    async inValidLogin(uName,pwd)
    {
        await this.userNameField.fill(uName);
        await this.passwordField.fill(pwd);
    }

}
module.exports = { LoginPage };
