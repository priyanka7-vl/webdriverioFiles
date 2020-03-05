const filePath="/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/sample1.xlsx";
    const Excel = require("exceljs");
    let workbook = new Excel.Workbook();
    //Use then function to executed code that need to perform immediately after readFile
    workbook.xlsx.readFile(filePath).then(function () {
    //Use sheetName in getWorksheet function
    let worksheet = workbook.getWorksheet("SheetInfo");
    //Use nested iterator to read cell in rows 
    //First iterator for rows in sheet
        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
            console.log("Current Row:" + rowNumber);
            //Second iterator for cells in row
            row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
            //print row number, column number and cell value at[row][col]
            console.log("Cell Value=" + cell.value + " for cell [" + rowNumber + "]" + "[" + colNumber + "]");
            /*
                write code
            */
            });
        });
    });