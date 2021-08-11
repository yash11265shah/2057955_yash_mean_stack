class product
{
    constructor(public name:string,public price:number){}

    display(index:number):void{
            let products=document.getElementById("products");
            // @ts-ignore
            products.innerHTML +=` <div class="col-3 m-2 p-3 text-center" style="border:2px solid black;"> 
                                   <h2> Name : ${this.name} </h2>
                                   <h2> Price :$ ${this.price}</h2>
                                   <a class="h3" href="#" onclick="add(${index})">Add </a>   
                                   </div>                                                                     
                                ` ;
    }

}
let product_list:product[]=[];
let cart_product_list:product[]=[];
let num_of_products_cart:number=0;
product_list[0]=new product("Laptop",1000)
product_list[1]=new product("Mobile",500)
product_list[2]=new product("Perfume",20)
product_list[3]=new product("Helmet",15)
product_list[4]=new product("Mouse",10)
product_list[5]=new product("Monitor",200)

for (const index in product_list) {
    // @ts-ignore
    product_list[index].display(index);
}
function add(index:number)
{
    cart_product_list[num_of_products_cart]=product_list[index];
    num_of_products_cart++;
    // @ts-ignore
    document.getElementById("cart_size").innerHTML="Cart Size:"+num_of_products_cart;
}
function checkout()
{
            // @ts-ignore
            document.getElementById("heading").innerHTML="Shopping Cart Checkout";
            let products=document.getElementById("body_content");

            let sum=0;
            // @ts-ignore
            products.innerHTML='';

            // @ts-ignore
          let table:string =` <table class="table  table-striped">
                                    <thead><tr class="bg-primary text-white text-center"><th>Item Name </th><th>Price</th></tr></thead>                                
                                    <tbody>                                                      
                                ` ;
            for (const pr of cart_product_list) {

                console.log(pr.name," ,  ",pr.price);
                 // @ts-ignore
                 table += `<tr class="text-center font-weight-bold"><td > ${pr.name}</td> <td>$ ${pr.price}</td></tr>`;
                // @ts-ignore
                console.log(products.innerHTML);
                sum += pr.price;
            }

            table += `<tr><td colspan='2' class="text-center text-primary font-weight-bold">Total Price :$ ${sum}</td> </tr></tbody></table>`;
            // @ts-ignore
             products.innerHTML = table;

}