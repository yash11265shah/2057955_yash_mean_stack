//import fs from "fs";
let readline= require("readline-sync");
let fs = require("fs");

function getRecords_from_files()
{
    let records=[]
    if(fs.existsSync("records.json"))
    {
        records=JSON.parse(fs.readFileSync("records.json").toString());
    }
    debugger;
    return records
}
function store_records_into_file(records)
{
    let date=new Date()
    let first_name = readline.question("Enter the First Name:")
    let last_name = readline.question("Enter the Last Name:");
    let gender = readline.question("Enter Gender:")
    let email = readline.questionEMail("Enter your email id:")
    let rd={"first_name":first_name,
       "last_name":last_name,
       "gender":gender,
       "email":email,
        "date":date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear(),
        "time":date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()
        }
        debugger;
records.push(rd)
fs.writeFileSync("records.json",JSON.stringify(records));

}

store_records_into_file(getRecords_from_files())