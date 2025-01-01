const fs = require('fs');
const csvParser = require('csv-parser');
export class CommonUtilities {
    constructor(page) {
        this.page = page;
    }
    async handleDialogs() {
        await this.page.on('dialog', dialog => dialog.accept());
    }

    static async readCSV(filePath) {
        return new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (error) => reject(error));
        });
    }
}