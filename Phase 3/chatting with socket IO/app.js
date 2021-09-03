// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();
let server_response=["hi may i help you","from which city you are ?","share your contact detail our team will  contact you soon ","rate our conversations"];
// load the http module and connect to express module with Server property
let http = require("http").Server(app);

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
        if(i==server_response.length)
            i=0;
        socket.emit("obj","Server Says : "+server_response[i]);
        i++;

    })
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      socket.emit("obj",'Good morning')
    } else if (curHr < 18) {
      socket.emit("obj",'Good afternoon')
    } else {
      socket.emit('obj','Good evening')
    }
    // sending data to client 
    //socket.emit("obj1","Hello Client connected server...");
})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));