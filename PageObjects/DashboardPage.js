import { CommonUtilities } from "../Utils/CommonUtilities";

export class DashboardPage extends CommonUtilities
{
    constructor (page,expect)
    {
        super(page);
        this.page = page;
        this.expect = expect;
        this.dashboardPageOptionList = page.locator(".oxd-main-menu-item-wrapper");
    }

    async selectingDashboarOptions(pageOption) {

        await this.dashboardPageOptionList.first().waitFor({ state: 'visible' });
        const list = await this.dashboardPageOptionList.all();
        for (const element of list) {
            const elementText = await element.textContent();
            if (elementText.trim() === pageOption) {
                await element.click();
                break;
            }
        }
        await this.expect(this.page).toHaveURL(/.*pim*/);
    }
    

}