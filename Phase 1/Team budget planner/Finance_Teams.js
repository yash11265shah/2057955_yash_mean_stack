  let dollarUS = Intl.NumberFormat("en-US", {
                           style: "currency",
                           currency: "USD",
                      });
          var data=JSON.parse(localStorage.getItem("data"));
          var tbody=document.getElementById("budget");
          var total=0;
          for(var i=0;i<data.length;i++)
          {
            var tr=document.createElement("tr");
            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var td3=document.createElement("td");

            td1.innerHTML=data[i].cname;
            td2.innerHTML=data[i].pname;
            td3.innerHTML=dollarUS.format(data[i].budget);
            total += parseInt(data[i].budget);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tbody.append(tr);
          }
          tbody.innerHTML +=`<td colspan="2" style="text-align: right"> Total </td><td> ${total}</td>`;
