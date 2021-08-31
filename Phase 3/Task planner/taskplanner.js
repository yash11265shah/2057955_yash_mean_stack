// modual rquire for the project
let http=require("http");
let url=require("url");
let fs = require("fs");

// get records from task.json file
function getRecords_from_files() {
    let records = []
    if (fs.existsSync("task.json")) {
        records = JSON.parse(fs.readFileSync("task.json").toString());
    }
    //debugger;
    return records
}

// add new records in task.json
function store_records_into_file(records,task)
{

    let rd={"empId":task.empId,
               "taskId":task.taskId,
               "task":task.task,
               "deadline":task.deadline

        }
        records.push(rd)
fs.writeFileSync("task.json",JSON.stringify(records));

}


// index page html content
let indexPage=`
                    <html>
                    <head>
                           <title> Task Planner</title>
                    </head>
                    <body>
                    <h2>Task Planner</h2>
                    <a href="addTask">Add Task </a> |
                    <a href="listTask">List Task</a> |
                    <a href="deleteTask">Delete Task </a>
                    </body>
                    
            </html>
`;

// new task page html
let addtaskPage=`
                    <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Add Task </title>
                </head>
                <body>
                        <h2> Add Task </h2>
                        <form action="/newTask" >
                            <table>
                                
                                <tr> <th>Emp Id :</th> <td><input type="text" name="empId"></td></tr>
                                <tr> <th>Task  Id :</th> <td><input type="number" name="taskId"></td></tr>
                                <tr> <th>Task :</th> <td><textarea name="task" id="" cols="30" rows="10"></textarea></td></tr>
                                <tr> <th>Deadline :</th> <td><input type="date" name="deadline"></td></tr>
                                <tr> <th colspan="2" align="center"><input type="submit" value="Add Task"> </th></tr>
                            </table>
                            <h3><a href="/">Home</a></h3>
                        </form>
                
                </body>
                </html>
               `;

// create a listpage html
function viewpage(records)
{
    let listPage=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>List Task </title>
        </head>
        <body>
                <table border="2" >
                    <tr>
                        <th>Emp Id</th>
                        <th>Task Id</th>
                        <th>Task </th>
                        <th>Deadline</th>
                    </tr>`;

    records.forEach(l=>{
        listPage +=`<tr><td>${l.empId}</td>
                    <td>${l.taskId}</td>
                    <td>${l.task}</td>
                    <td>${l.deadline}</td>
                    </tr>`;
    })

       listPage +=` </table>  <h3><a href="/">Home</a></h3>
        </body>
        </html>`;

     return listPage;
}


// delete task page html
let deletePage=`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Delete Task </title>
            </head>
            <body>
                     <h2> Delete Task </h2>
                    <form action="/delete" >
                        <table>
                            <tr> <th>Task  Id :</th> <td><input type="number" name="taskId"></td></tr>
                            <tr> <th colspan="2" align="center"><input type="submit" value="Delete Task"> </th></tr>
                        </table>
                    </form>
                     <h3><a href="/">Home</a></h3>
            </body>
            </html>`
// create the server and define the condition to give appropritate response.
let server=http.createServer((request,response)=>{
    let urlInfo = url.parse(request.url,true);
    console.log(urlInfo.pathname);
    if(urlInfo.path != "/favicon.ico"){

        if(urlInfo.path =="/addTask")
        {
            response.write(addtaskPage);
        }
        else if (urlInfo.path=="/listTask")
        {
            response.write(viewpage(getRecords_from_files()));
        }
        else if(urlInfo.pathname == "/delete")
        {
            console.log("inside delete condition");
            let task=urlInfo.query;
            let taskinfo=getRecords_from_files();
            let index=taskinfo.findIndex(l=>l.taskId==task.taskId);
            console.log("index",index);
            if( index != -1)
            {
                taskinfo.splice(index,index);
                fs.writeFileSync("task.json",JSON.stringify(taskinfo));
                response.writeHead(200,{"content-type":"text/html"});
                response.write(indexPage);
                response.write("<h2 style='color:red'>task is deleted</h2>");
            }
            else
            {
                response.writeHead(200,{"content-type":"text/html"});
                response.write(indexPage);
                response.write("<h2 style='color:red'>invalid task id </h2>");
            }
        }
        else if(urlInfo.path=="/deleteTask"){
            response.write(deletePage);
        }
        else if(urlInfo.pathname =="/newTask"){
                 let task = urlInfo.query;
                 let taskdetail = getRecords_from_files();
                 let result=taskdetail.find(l=>l.taskId==task.taskId);
                 if (result != undefined)
                 {
                     response.writeHead(200,{"content-type":"text/html"});
                     response.write("<h2>task  Id is already taken</h2>");
                     response.write(addtaskPage);
                 }
                 else
                 {
                     store_records_into_file(taskdetail,task);
                      response.writeHead(200,{"content-type":"text/html"});
                      response.write(indexPage);
                      response.write("<h2>task Id is added</h2>");
                 }

        }
        else{
            response.write(indexPage);
        }
    }
    response.end();
})
// start server
server.listen(9090,()=>console.log("server running on port number 9090"))