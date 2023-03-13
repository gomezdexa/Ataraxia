//Let itemID be the index needed to get the info out of the products array. Each ID will store product name, price, and a brief description.

let products = [
    ['Brown silk maxi dress', 25.99, 'A brown silk maxi dress with an adjustable black belt and cut out in the lower center of the chest', 'images/images (1).jfif'],
    ['Corduroy jacket', 35.99, 'A short corduroy tan jacket with pockets on either side of the chest', 'images/images (2).jfif'],
    ['White cottagecore maxi dress', 20.99, 'A white maxi dress made out of satin with ruffles along the bottom of the dress', 'images/images (3).jfif'],
    ['Button up cardigan', 15.99, 'Mint womens cardigan with white shoulder details and embroidery on the collarbone.', 'images/images (10).jfif'],
    ['Green knit skater dress', 15.99, 'A green knit skater dress with buttons going up the chest', 'images/images (11).jfif'],
  ['Beige business casual set', 55.99, 'An oversized Beige button up shirt with beige joggers', 'images/images (7).jfif'],
  ['Womans knit romper', 20.99, 'Teal knit womans romper with an adjustable waist and pockets', 'images/images (8).jfif'],
  ['Button up oversized tshirt dress', 25.99, 'Oversized beige womens button up long sleeve shirt dress', 'images/images (6).jfif'],
  ['Coarse knit brown maxi skirt', 25.99, 'Handknit brown maxi skirt with adjustable waist', 'images/images (4).jfif'],
  ['Beige suit jacket with adjustable belt', 30.99, 'Beige suit jacket with an adjustable belt along the waist and buttons going up the front', 'images/images (5).jfif'],
  ['Thick beige long overcoat', 65.99, '100% thick beige wool mens winter overcoat ', 'images/images (13).jfif'],
  ['Brown linen button up shirt', 15.99, 'Brown button up shirt made of 100% linen', 'images/images (14).jfif'],
  ['Tan suit set', 75.99, 'Tan button up mens blazer with large pockets on the sides and long tan shorts', 'images/images (15).jfif'],
  ['Sleeveless knit sage green top', 15.99, 'Sleeveless vneck knit top with jagged cut on the shoulder', 'images/images (16).jfif'],
  ['Long sleeve muted green tee', 15.99, 'Long sleeve muted green shirt with buttons going up the top half of the shirt', 'images/images (17).jfif'],
  ['Basic grey long sleeve tshirt', 10.99, 'Basic knit grey long sleeve fitted tshirt', 'images/images (18).jfif'],
  ['Grey wool jacket', 35.99, 'Grey wool varsity button up jacket', 'images/images (19).jfif'],
  ['Fitted tan long sleeve button up tshirt', 25.99, 'Fitted button up mens shirt in a dark tan with no front pockets', 'images/images (20).jfif'],
  ['Beige fitted slacks', 25.99, 'Beige fitted mens slacks with front pleats', 'images/images (21).jfif'],
  ['Muted pink field jacket', 45.99, 'Muted pink field jacket made out of cotton and canvas blends with two pockets on the front', 'images/images (22).jfif'],
  ['Flower dangling earrings', 5.99, 'White and plated gold tulip dangling hook earrings', 'images/accs1.PNG'],
  ['Green and gold dangle resin earrings', 15.99, 'Resin set dangle earrings with gold flake', 'images/accs2.PNG'],
  ['Gold rose bracelet and ring set', 25.99, 'Plated gold rose and ring set', 'images/accs3.PNG'],
  ['Faux leather belt with metal embellishment', 25.99, 'Fauz leather 1 inch belt with flowery metal embellishment', 'images/accs4.PNG'],
  ['Tiered cubic zarconia silver necklace', 20.99, 'Thin tiered chain silver necklace with cubic zarconic pendants', 'images/accs5.PNG'],
  ['Teardrop silver necklace', 15.99, 'Teardrop silver necklace with cubic zarconic pendant and smaller cubix zarconic stones around the stop and sides', 'images/accs6.PNG'],
  ['Silver plated 16pc ring set', 25.99, '16 silver plated rings with various designs', 'images/accs7.PNG'],
  ['Silver plated ring with heart emerald stone', 35.99, 'Silver plated ring with a heart shaped emerald center stone and heart cutout designs along the sides of the center stones', 'images/accs8.PNG'],
  ['Canvas 2pc belt set', 20.99, '2 canvas belts in dark tan and beige with round center loop', 'images/accs9.PNG'],
  ['Weaved belt', 10.99, 'Hand weaved belt with square center belt', 'images/accs10.PNG'],
  ['Weaved and canvas cream flats', 35.99, 'Weaved canvas flat shoes with open heel', 'images/shoes1.PNG'],
  ['White gladiator sandals', 35.99, 'White gladiator style sandals with a cross strap going up the ankle', 'images/shoes2.PNG'],
  ['Brown colorblock sneakers', 55.99, 'Brown colorblock sneakers', 'images/shoes3.PNG'],
  ['Nude pink open toed heels', 45.99, 'Nude pink open toed block heels with a 3 inch heel', 'images/shoes4.PNG'],
  ['Flower mesh flat sandals', 35.99, 'Embroidered flowers on mesh with a cross on the top of the foot and around the ankle', 'images/shoes5.PNG'],
  ['White lace cross flat sandals', 35.99, 'Lace front flat sandals with baby pink cross straps across the top of the foot and ankle', 'images/shoes6.PNG'],
  ['Beige sneakers', 65.99, 'Beige casual staple sneakers', 'images/shoes7.PNG'],
  ['Brown colorblock mens sneakers with toothed bottom', 55.99, 'Brown colorblock sneakers with toothed bottom', 'images/shoes8.PNG'],
  ['Cream white mens sneakers', 65.99, 'Cream white mens sneakers', 'images/shoes9.PNG'],
  ['Faux leather shoes', 35.99, 'Faux leather shoes with rubber bottom', 'images/shoes10.PNG'],
];


let stock = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]





//These two deal with the opening and closing of the sidebar
function Open(){
  document.getElementById("sidebar").style.width = "350px";
}

function Close(){
  document.getElementById("sidebar").style.width = "0px"
}

function notifOpen(){
  document.getElementById("cartNotif").style.width = '600px'
}

function notifClose(){
  document.getElementById("cartNotif").style.width = "0px"
}

function closeFaster(){
  document.getElementById("cartNotif").style.width = "0px";
}


//This one is the onclick function for the cards in womens, mens, etc
function newTab(){
  window.open("https://ataraxia.menag.repl.co/example.html");
}


//These two deal with the opening and closing of the cart sidescreen
function cartOpen(){
  document.getElementById("CartCard").style.width = "400px";
}

function cartClose(){
  document.getElementById("CartCard").style.width = "0px"
}


//This is to take in the value of the size buttons and color the buttons when it is clicked on
let sizeButton = false;
let Size;
let color;

function validateButton(size, ID){
  document.getElementById("sizesXS").style.backgroundColor = "white";
  document.getElementById("sizesS").style.backgroundColor = "white";
  document.getElementById("sizesM").style.backgroundColor = "white";
  document.getElementById("sizesL").style.backgroundColor = "white";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

//This is to take in the value of the size buttons and color the buttons when it is clicked on

function validateButton2(size, ID){
  
  document.getElementById("sizesCardXS1").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS1").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM1").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL1").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton3(size, ID){
  
  document.getElementById("sizesCardXS2").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS2").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM2").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL2").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton4(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS3").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS3").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM3").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL3").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton5(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS4").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS4").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM4").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL4").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton6(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS5").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS5").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM5").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL5").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton7(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS6").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS6").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM6").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL6").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton8(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS7").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS7").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM7").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL7").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton9(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS8").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS8").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM8").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL8").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton10(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS9").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS9").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM9").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL9").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}

function validateButton11(size, ID){
  document.getElementById(ID).style.backgroundColor = "green";
  
  document.getElementById("sizesCardXS10").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardS10").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardM10").style.backgroundColor = "#eceaea";
  document.getElementById("sizesCardL10").style.backgroundColor = "#eceaea";

  document.getElementById(ID).style.backgroundColor = "green";
  
  sizeButton = true;

  Size = size;

  color = ID;
}


//This code is for the cart, this initializes the cart to say it is empty for useability purposes

let cart = [1, 2, 3];
cart = ["Cart is empty"];
let total = 0;


function addItems(itemID){

  //This creates a multidimensional array so that extra information is stored with each item added to the cart
  let item = [];
  item.push(itemID);
  item.push("Qty: 3");

  //This is to validate whether the size button was clicked before the add to cart button. Users must choose a size before clicking on the add to cart button. If not clicked, an alert will appear to let them know that it has to be clicked. It will also delete the information added to items to make sure no unnecessary infromation is added.
   if(sizeButton == true){
    item.push(Size);
      //This changes the cart is empty statement to show the item array if it is the first thing in the cart array, if not it just adds the item array to the end of the cart array. 

     sizeButton = false;
     Size = "";
     document.getElementById(color).style.backgroundColor = "#eceaea";
     
    if (cart[0] === "Cart is empty"){
      cart = [item];
    } else {
      cart.push(item);
    }

     document.getElementById('notifText').innerHTML = products[itemID][0] + " has been added to cart!";

     notifOpen();

     setTimeout(() => {
       notifClose();
     }, 3500)

     
  //This adds the information to the cart page
    document.getElementById('items').innerHTML = "";
    
     for(var i = 0; i < cart.length; i++){

       if(i == 0){
         total = products[cart[i][0]][1];
       } else {
         total = total + products[cart[i][0]][1];
       }

       document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);

       document.getElementById('CartText').innerHTML = "Your Cart (" + cart.length + ")";
      //itemdiv
       var topdivv = document.createElement("div");

       topdivv.className = 'itemDiv';


       var img_div = document.createElement("div");

       img_div.className = 'IMGDIV';

       topdivv.appendChild(img_div);

       var prod_img = document.createElement("img");

       prod_img.className = "prod_img";

       prod_img.src = products[cart[i][0]][3];

       img_div.appendChild(prod_img);



       
      //name
       var divv = document.createElement("div");

       divv.className = 'NAMEDIV';

       //name-->itemDiv
       topdivv.appendChild(divv);
       
       //name paragraph
       var para = document.createElement("p");
      
       para.className = 'cartText';

       //name paragraph-->name
       divv.appendChild(para);
       
      //name paragraph text
       var node = document.createTextNode(products[cart[i][0]][0]);

      //name paragraph text--> name paragraph
       para.appendChild(node);


       
      //size
       var divv2 = document.createElement("div");

       divv2.className = "SIZEDIV"

       //size-->itemDiv
       topdivv.appendChild(divv2);

       //size paragraph
       var para2 = document.createElement("p");
      
       para2.className = 'cartText';

       //size paragraph-->size
       divv2.appendChild(para2);

       //size paragraph text
       var node2 = document.createTextNode(cart[i][2]);

       //size paragraph text-->size paragraph
       para2.appendChild(node2);

       

       //price
       var divv3 = document.createElement("div");

       divv3.className = "PRICEDIV"

       //price-->itemDiv
       topdivv.appendChild(divv3);

       //price paragraph
       var para3 = document.createElement("p");
      
       para3.className = 'cartText';

       //price paragraph-->price
       divv3.appendChild(para3);

       //price paragraph text
       var node3 = document.createTextNode(products[cart[i][0]][1]);

       //price paragraph text-->price paragraph
       para3.appendChild(node3);


       
       var divv4 = document.createElement("div");
       
       divv4.className = "BUTTONDIV";
       
       topdivv.appendChild(divv4);

       var para4 = document.createElement("a");

       para4.className = "closeButton";

       divv4.appendChild(para4);

       var node4 = document.createTextNode("XXX");

       para4.appendChild(node4);

       para4.addEventListener('click', removeItem);
       
       //getting the div
       var element = document.getElementById("items");

       //itemDiv-->items
       element.appendChild(topdivv);
    }


     

  //This lets the user know they have x number of items in their cart. 
    //window.alert("Added to cart");
     
  } else {
    window.alert("You need to choose a size");
     item = [];
  }


  
}

//This is to check whether the cart is being updated. 
function View(){
  window.alert(cart);
}

function removeItem(){
  window.alert("Removed");
}

//This makes sure that the cart page displays 'Cart is empty' at the start
window.onload = function(){
  document.getElementById('items').innerHTML = cart;
}
