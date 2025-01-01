import { CommonUtilities } from "../Utils/CommonUtilities";

export class PIMPage extends CommonUtilities {
    constructor(page, expect) {
        super(page);
        this.page = page;
        this.expect = expect;

        //Add Employee locators
        this.AddEmployeeTab = page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: 'Add Employee' });
        this.employeeFirstName = page.locator("input[name='firstName']");
        this.employeeMiddleName = page.locator("input[name='middleName']");
        this.employeeLastName = page.locator("input[name='lastName']");
        this.createLoginToggle = page.locator("span[class='oxd-switch-input oxd-switch-input--active --label-right']");
        this.cancelButton = page.getByText(" Cancel ", { exact: true });
        this.saveButton = page.locator("button[type='submit']");
        //Add Employee > Create Login locators
        this.createLoginUsernameField = page.locator("//label[text()='Username']/ancestor::div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]//input[@class='oxd-input oxd-input--active']");
        this.createLoginPasswordField = page.locator("//label[text()='Password']/ancestor::div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]//input[@class='oxd-input oxd-input--active']");
        this.createLoginStatusRadioEnabled = page.locator("//label[text()='Enabled']");
        this.createLoginStatusRadioDisabled = page.locator("//label[text()='Disabled']");
        this.createLoginConfirmPasswordField = page.locator("//label[text()='Confirm Password']/ancestor::div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]//input[@class='oxd-input oxd-input--active']");
        //this.addEmployeeSuccessToast = page.locator('.oxd-toast oxd-toast--success oxd-toast-container--toast').filter({hasText:'Successfully Updated'});
        //this.addEmployeeSuccessToast = page.locator('.oxd-toast-container oxd-toast-container--bottom');

        //Employeelist locators
        this.employeeInfoTable = page.locator('.oxd-table-filter .oxd-table-filter-header');
        this.employeeNameField = page.locator("//label[text()='Employee Name']/ancestor::div[contains(@class, 'oxd-input-group')]//input[@placeholder='Type for hints...']");
        this.employeeIdField = page.locator("//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]//input[@class='oxd-input oxd-input--active']");
        this.supervisorNameField = page.locator("//label[text()='Supervisor Name']/ancestor::div[contains(@class, 'oxd-input-group')]//input[@placeholder='Type for hints...']");
        this.ResetButton = page.locator("button[type='reset']");
        this.SearchButton = page.locator("button[type='submit']");
    }

    async addEmployeeDetails(employeeDetails, employeeLoginDetails) {
        await this.AddEmployeeTab.click();
        await this.employeeFirstName.fill(employeeDetails.firstName);
        await this.employeeMiddleName.fill(employeeDetails.middleName);
        await this.employeeLastName.fill(employeeDetails.lastName);

        if (employeeDetails.createDetailsNeeded === true) {
            await this.createLoginToggle.click();
            await this.createLogin(employeeLoginDetails);
        }
        await this.saveButton.click();
        //await this.expect(this.addEmployeeSuccessToast).toBeVisible({ timeout: 7000 });
        //console.log('✅ Toast message is visible.');

    }

    async createLogin(employeeLoginDetails) {
        await this.createLoginUsernameField.fill(employeeLoginDetails.userName);
        await this.createLoginPasswordField.fill(employeeLoginDetails.password);
        await this.createLoginConfirmPasswordField.fill(employeeLoginDetails.confirmPassword);
    }


    /*    async addEmployeeName (employeeName)
        {
    
        }
    
        async addEmployeeId (employeeId)
        {
    
        }
    
        async addEmployeeStatus (EmployeeStatus)
        {
    
        }
    
        async addInclude (include)
        {
    
        }
    
        async addSupervisorName (SupervisorName)
        {
    
        }
    
        async addJobTitle (JobTitle)
        {
    
        }
    
        async addSubUnit (SubUnit)
        {
    
        }
    */
}