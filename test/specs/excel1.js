const filePath="/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/sample1.xlsx";
    const Excel = require("exceljs");
    let workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filePath).then(function () {
    let worksheet = workbook.getWorksheet("SheetInfo");
        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
            console.log("Current Row:" + rowNumber);
            row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
            console.log("Cell Value=" + cell.value + " for cell [" + rowNumber + "]" + "[" + colNumber + "]");
            });
        });
    });