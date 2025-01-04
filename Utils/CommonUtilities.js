const fs = require('fs');
const path = require ('path');
const csvParser = require('csv-parser');
class CommonUtilities {
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

    static getCreateEmpDetailsData(fileName) {
        const filePath = path.join(__dirname, '..', 'Data', fileName);
        const rawData = fs.readFileSync(filePath);
        return JSON.parse(rawData);
    }

    

}

module.exports = {CommonUtilities};