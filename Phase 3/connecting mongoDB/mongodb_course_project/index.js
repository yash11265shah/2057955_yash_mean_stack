// load the module

let express = require("express");
let bodyParser= require("body-parser");
const {response} = require("express");
let mongoose=require("mongoose");
let cors= require("cors");
let url="mongodb://localhost:27017/coursedb"
mongoose.pluralize(null);

// connect to the database
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err))

let course=mongoose.Schema({
        _id:Number,
        CourseName:String,
        Descriptions:String,
        Amount:Number

    });
let courseModel=mongoose.model("Course",course)

let app=express();
let db=mongoose.connection;

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
//  get , post , put ,delete

// this is for home .html
app.get("/",(request,response)=>{
    //response.send("welcome to the project of Course ");
    response.sendFile(__dirname+"\\home.html");
})

// this is for add.html
app.get("/add",(request,response)=>{
    //response.send("welcome to the project of Course ");
    response.sendFile(__dirname+"\\add_course.html");
})

app.post("/add",(request,response)=>{
     //console.log(request.body);
    console.log("inside the post");
    console.log(request.body);

    let record=new courseModel(request.body)
    console.log("before insert");
    courseModel.insertMany(record,(err,result)=>{
    if(!err){
             console.log(result)
             response.send("<h1>Course is added is successfully</h1><h2><a href='/'>Home</a></h2>");
             response.sendFile(__dirname+"\\add_course.html");
         }
         else
         {
             console.log(err)
             response.send("records is not inserted")
         }
    //mongoose.disconnect();

     })
    //response.send("record  is added");
})
// this is for update.html
app.get("/update",(request,response)=>{
    //response.send("welcome to the project of Course ");
    response.sendFile(__dirname+"\\update_course.html");
})
app.post("/update",(request,response)=>{
    let course = request.body;
    console.log(course);
    courseModel.updateOne({_id:course._id},{$set:{Amount:course.Amount}},(err,result)=> {
        if(!err){
            response.send("<h1>Record is updated</h1><h2><a href='/'>Home</a></h2>");
        }else {
            response.send(err);
        }
    })

})



app.get("/delete",(request,response)=>{
    //response.send("welcome to the project of Course ");
    response.sendFile(__dirname+"\\delete_course.html");
})

app.post("/delete",(request,response)=>{
    let cid = request.body._id;
    courseModel.deleteOne({_id:cid},(err,result)=> {
        if(!err){
            response.send("<h1>Course is Deleted </h1><h2><a href='/'>Home</a></h2>");
        }else {
            response.send(err);
        }
    })
})



app.get("/list",(request,response)=>{
    //response.send("welcome to the project of Course ");
     courseModel.find({},(err,data)=> {
        if(!err){
            response.send(listpage(data));
        }else {
             response.send(err);
        }
    })
})

function listpage(records)
{
    let listPage=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>List Course </title>
        </head>
        <body>
                <table border="2" >
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Description </th>
                        <th>Amount</th>
                    </tr>`;

    records.forEach(l=>{
        listPage +=`<tr><td>${l._id}</td>
                    <td>${l.CourseName}</td>
                    <td>${l.Descriptions}</td>
                    <td>${l.Amount}</td>
                    </tr>`;
    })

       listPage +=` </table>  <h3><a href="/">Home</a></h3>
        </body>
        </html>`;

     return listPage;
}
app.listen(9090,()=>console.log("Server is running on port 9090"))