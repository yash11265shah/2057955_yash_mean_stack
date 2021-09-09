// load the express module 
let express = require("express");
let mongoose=require("mongoose");
let url="mongodb://localhost:27017/coursedb"
mongoose.pluralize(null);

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// connect to the database
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err))

let chat=mongoose.Schema({
        name:String,
        message:String,
    });
let courseModel=mongoose.model("chat",chat)
let db=mongoose.connection;
// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})
let i=0;
io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj1",(msg)=> {
        console.log(msg);

        courseModel.insertMany(msg, (err, result) => {
            if (!err) {
                console.log(result)
            } else {
                console.log(err)

            }

        })
    })
})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));