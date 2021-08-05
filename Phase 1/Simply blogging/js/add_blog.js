 function addblog()
    {
        var title=document.getElementById("title").value;
        var articles=document.getElementById("articles").value;
        var imgfile=document.getElementById("imagfile").value;

        console.log("imagefile :",imagfile);

        if(!localStorage.getItem("blogs"))
        {
          var blogs=[];
          localStorage.setItem("blogs",JSON.stringify(blogs));
        }
        var blogs=JSON.parse(localStorage.getItem("blogs"));
        console.log(blogs.length);
        var row={};
        row["title"]=title;
        row["articles"]=articles;
        blogs[blogs.length]=row;
        console.log("row:",row);
        localStorage.setItem("blogs",JSON.stringify(blogs));
        document.getElementById("title").value="";
        document.getElementById("articles").value="";

    }
