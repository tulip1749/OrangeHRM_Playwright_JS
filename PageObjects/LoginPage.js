import { CommonUtilities } from "../utils/commonUtilities";

export class LoginPage extends CommonUtilities {

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

    async websiteLaunch()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Tallying the page URL
        await this.expect(this.page).toHaveURL(/opensource-demo\.orangehrmlive\.com/);
    }

    async extractedUserName()
    {
        let mentionedUserNameContent = await this.mentionedUserName.textContent();
        return (await mentionedUserNameContent.split(":")[1].trim());
    }

    async extractedPassword()
    {
        let mentionedPasswordContent = await this.mentionedPassword.textContent();
        return (await mentionedPasswordContent.split(":")[1].trim());
    }

    async validLogin()
    {
        // extract username and password
        let userName = await this.extractedUserName();
        let password = await this.extractedPassword();

        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        
        //Handle dialogs 
        this.handleDialogs();
        
        // Verifying successful login
        await this.expect(this.page).toHaveURL(/.*dashboard*/);
        this.expect(await this.page.title()).toBe("OrangeHRM");
    }

    async inValidLogin(uName,pwd)
    {
        await this.userNameField.fill(uName);
        await this.passwordField.fill(pwd);
    }

}