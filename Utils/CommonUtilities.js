export class CommonUtilities
{
    constructor(page)
    {
        this.page = page;
    }
    async handleDialogs()
    {
        await this.page.on('dialog',dialog=>dialog.accept());
    }

}