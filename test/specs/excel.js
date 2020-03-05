const Excel = require('exceljs');

let wb = new Excel.Workbook();
let path = require('path');
let filePath = path.resolve(__dirname,'/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/sample1.xlsx');

wb.xlsx.readFile(filePath).then(async () => {

    let sh = wb.getWorksheet("Sheet1");

    sh.getRow(1).getCell(2).value = 32;
    await wb.xlsx.writeFile("sample2.xlsx");
    console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

    console.log(sh.rowCount);
    //Get all the rows data [1st and 2nd column]
    for (i = 1; i <= sh.rowCount; i++) {
        console.log(sh.getRow(i).getCell(1).value);
        console.log(sh.getRow(i).getCell(2).value);
    }
})