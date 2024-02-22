//Converting XLSX file to Json

var XLSX =require('xlsx');

var fs = require('fs')

//Create a work book Object

var workbook = XLSX.readFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/spreadsheets/userdata.xlsx");

// Create workshee/

var worksheet = workbook.Sheets['Sheet1']

//Convert xlsx to Json Object

var user_data = XLSX.utils.sheet_to_json(worksheet)

console.log(user_data);

fs.writeFile("D:/Cypress and API Testing class and doc's/Cypress/Cypress Application/cypress/fixtures/ExceltoJsonuser_data.json", JSON.stringify(user_data), (err) =>{

    if(err){

        console.log(err)
        return
    }
})