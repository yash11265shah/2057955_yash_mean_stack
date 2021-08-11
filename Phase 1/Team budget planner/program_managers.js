function addbudget()
    {
        var cname=document.getElementById("clientname").value;
        var pname=document.getElementById("projectname").value;
        var budget=document.getElementById("budget").value;

        if(!localStorage.getItem("data"))
        {
          var data=[];
          localStorage.setItem("data",JSON.stringify(data));
        }
        var data=JSON.parse(localStorage.getItem("data"));
        console.log(data.length);
        var row={};
        row["cname"]=cname;
        row["pname"]=pname;
        row["budget"]=budget;
        data[data.length]=row;
        console.log("row:",row);
        localStorage.setItem("data",JSON.stringify(data));
        document.getElementById("clientname").value="";
        document.getElementById("projectname").value="";
        document.getElementById("budget").value="";

    }
