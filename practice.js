let products = [
    [0, 'Brown silk maxi dress', 25.99, 'A brown silk maxi dress with an adjustable black belt and cut out in the lower center of the chest', 'images/images (1).jfif', 'w'],
    [1, 'Corduroy jacket', 35.99, 'A short corduroy tan jacket with pockets on either side of the chest', 'images/images (2).jfif', 'w'],
    [2, 'White cottagecore maxi dress', 20.99, 'A white maxi dress made out of satin with ruffles along the bottom of the dress', 'images/images (3).jfif', 'w'],
    [3, 'Button up cardigan', 15.99, 'Mint womens cardigan with white shoulder details and embroidery on the collarbone.', 'images/images (10).jfif', 'w'],
    [4, 'Green knit skater dress', 15.99, 'A green knit skater dress with buttons going up the chest', 'images/images (11).jfif', 'w'],
  [5, 'Beige business casual set', 55.99, 'An oversized Beige button up shirt with beige joggers', 'images/images (7).jfif', 'w'],
  [6, 'Womans knit romper', 20.99, 'Teal knit womans romper with an adjustable waist and pockets', 'images/images (8).jfif', 'w'],
  [7, 'Button up oversized tshirt dress', 25.99, 'Oversized beige womens button up long sleeve shirt dress', 'images/images (6).jfif', 'w'],
  [8, 'Coarse knit brown maxi skirt', 25.99, 'Handknit brown maxi skirt with adjustable waist', 'images/images (4).jfif', 'w'],
  [9, 'Beige suit jacket with adjustable belt', 30.99, 'Beige suit jacket with an adjustable belt along the waist and buttons going up the front', 'images/images (5).jfif', 'w'],
  [10,'Thick beige long overcoat', 65.99, '100% thick beige wool mens winter overcoat ', 'images/images (13).jfif', 'm'],
  [11, 'Brown linen button up shirt', 15.99, 'Brown button up shirt made of 100% linen', 'images/images (14).jfif', 'm'],
  [12, 'Tan suit set', 75.99, 'Tan button up mens blazer with large pockets on the sides and long tan shorts', 'images/images (15).jfif', 'm'],
  [13, 'Sleeveless knit sage green top', 15.99, 'Sleeveless vneck knit top with jagged cut on the shoulder', 'images/images (16).jfif', 'm'],
  [14, 'Long sleeve muted green tee', 15.99, 'Long sleeve muted green shirt with buttons going up the top half of the shirt', 'images/images (17).jfif', 'm'],
  [15,'Basic grey long sleeve tshirt', 10.99, 'Basic knit grey long sleeve fitted tshirt', 'images/images (18).jfif', 'm'],
  [16,'Grey wool jacket', 35.99, 'Grey wool varsity button up jacket', 'images/images (19).jfif', 'm'],
  [17,'Fitted tan long sleeve button up tshirt', 25.99, 'Fitted button up mens shirt in a dark tan with no front pockets', 'images/images (20).jfif', 'm'],
  [18,'Beige fitted slacks', 25.99, 'Beige fitted mens slacks with front pleats', 'images/images (21).jfif', 'm'],
  [19,'Muted pink field jacket', 45.99, 'Muted pink field jacket made out of cotton and canvas blends with two pockets on the front', 'images/images (22).jfif', 'm'],
  [20,'Flower dangling earrings', 5.99, 'White and plated gold tulip dangling hook earrings', 'images/accs1.PNG', 'a'],
  [21,'Green and gold dangle resin earrings', 15.99, 'Resin set dangle earrings with gold flake', 'images/accs2.PNG', 'a'],
  [22,'Gold rose bracelet and ring set', 25.99, 'Plated gold rose and ring set', 'images/accs3.PNG', 'a'],
  [23,'Faux leather belt with metal embellishment', 25.99, 'Fauz leather 1 inch belt with flowery metal embellishment', 'images/accs4.PNG', 'a'],
  [24,'Tiered cubic zarconia silver necklace', 20.99, 'Thin tiered chain silver necklace with cubic zarconic pendants', 'images/accs5.PNG', 'a'],
  [25,'Teardrop silver necklace', 15.99, 'Teardrop silver necklace with cubic zarconic pendant and smaller cubix zarconic stones around the stop and sides', 'images/accs6.PNG', 'a'],
  [26,'Silver plated 16pc ring set', 25.99, '16 silver plated rings with various designs', 'images/accs7.PNG', 'a'],
  [27,'Silver plated ring with heart emerald stone', 35.99, 'Silver plated ring with a heart shaped emerald center stone and heart cutout designs along the sides of the center stones', 'images/accs8.PNG', 'a'],
  [28,'Canvas 2pc belt set', 20.99, '2 canvas belts in dark tan and beige with round center loop', 'images/accs9.PNG', 'a'],
  [29,'Weaved belt', 10.99, 'Hand weaved belt with square center belt', 'images/accs10.PNG', 'a'],
  [30,'Weaved and canvas cream flats', 35.99, 'Weaved canvas flat shoes with open heel', 'images/shoes1.PNG', 's'],
  [31,'White gladiator sandals', 35.99, 'White gladiator style sandals with a cross strap going up the ankle', 'images/shoes2.PNG', 's'],
  [32,'Brown colorblock sneakers', 55.99, 'Brown colorblock sneakers', 'images/shoes3.PNG', 's'],
  [33,'Nude pink open toed heels', 45.99, 'Nude pink open toed block heels with a 3 inch heel', 'images/shoes4.PNG', 's'],
  [34,'Flower mesh flat sandals', 35.99, 'Embroidered flowers on mesh with a cross on the top of the foot and around the ankle', 'images/shoes5.PNG', 's'],
  [35,'White lace cross flat sandals', 35.99, 'Lace front flat sandals with baby pink cross straps across the top of the foot and ankle', 'images/shoes6.PNG', 's'],
  [36,'Beige sneakers', 65.99, 'Beige casual staple sneakers', 'images/shoes7.PNG', 's'],
  [37,'Brown colorblock mens sneakers with toothed bottom', 55.99, 'Brown colorblock sneakers with toothed bottom', 'images/shoes8.PNG', 's'],
  [38,'Cream white mens sneakers', 65.99, 'Cream white mens sneakers', 'images/shoes9.PNG', 's'],
  [39,'Faux leather shoes', 35.99, 'Faux leather shoes with rubber bottom', 'images/shoes10.PNG', 's']
];

let sizeButton = false;
let size;
let color;
let check = false;
//let prodID;
var l = "producID";
var j = "xs";
var m = "m";
var x = "l";
var s = "s";
let cart = ["Cart is empty"];
//Click size button
//Store the size and the fact that a size has been chosen
//color that button
//click add to cart
//store them in item[]
//size is null and sizeButton is now false
//colored button turn back to normal color

window.onload = function(){
  //NEED TO FIX VALIDATING BUTTON AND ALL THAT JAZZ AND NEED TO FIGURE OUT HOW TO MAKE EVERY BUTTON TAKE A UNIQUE ID FOR THAT SPECIFIC ADD TO CART BUTTON. NEED TO FIGURE OUT HOW TO MAKE SPACING CONSISTENT WITHIN THE INDICIDUAL CARDS (COULD MAKE THE CARDS TALLER AND THEN PUT THE BUTTONS AT THE BOTTOM OF THE CARDS SO THAT THEY'RE ALL IN THE SAME PLACE AND THE SPACING IS JUST DIFFERENT FOR EACH CARD. )
  
  for(var i = 0; i < products.length; i++){
    //Decides where things should be loaded dependent on the key at the end of the product
    //var k = i;
    eval('var ' + l + i + '= ' + i +';');
    eval('var ' + j + i + '= ' + "xs" + i +';');
    eval('var ' + s + i + '= ' + "s" + i +';');
    eval('var ' + x + i + '= ' + "l" + i +';');
    eval('var ' + m + i + '= ' + "m" + i +';');
    
    if(products[i][5] == "w"){
      var element = document.getElementById("thingieW");
    } else if(products[i][5] == "m"){
      var element = document.getElementById("thingieM");
    } else if(products[i][5] == "a"){
      var element = document.getElementById("thingieA");
    } else if(products[i][5] == "s"){
      var element = document.getElementById("thingieS");
    }
    
    //makes sure that the cards go to a new line after a certain number in this case, 5
    if(i % 5 == 0){
      var para = document.createElement("p");
      element.appendChild(para);
    }

    //Entire card div
    var prodCont = document.createElement("div");
    prodCont.className = "card";

    //product image
    var prodimgDiv = document.createElement("div");
    prodimgDiv.className = "imgHolder"
    var prodImg = document.createElement("img");
    prodImg.addEventListener('click', newTab);
    prodimgDiv.appendChild(prodImg);
    prodImg.className = "cardimage";
    prodImg.src = products[i][4];
    prodCont.appendChild(prodimgDiv);

    //product name
    var prodNameDiv = document.createElement("div");
    var prodName = document.createElement("p");
    prodNameDiv.appendChild(prodName);
    prodNameDiv.className = "nametxt";
    var prodNametxt = document.createTextNode(products[i][1]);
    prodName.appendChild(prodNametxt);
    prodCont.appendChild(prodNameDiv);

    //product price
    var prodPriceDiv = document.createElement("div");
    var prodPrice = document.createElement("p");
    prodPriceDiv.appendChild(prodPrice);
    prodPriceDiv.className = "pricetxt";
    var prodPricetxt = document.createTextNode(products[i][2]);
    prodPrice.appendChild(prodPricetxt);
    prodCont.appendChild(prodPriceDiv);

    
    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsCont"
    
    var addCart = document.createElement("button");
    addCart.className = "addToCart1";
    addCart.setAttribute("id", eval(l+i));
    addCart.addEventListener('click', addtoCart);
    buttonsDiv.appendChild(addCart);
    var addCartTxt = document.createTextNode("Add to Cart");
    addCart.appendChild(addCartTxt);

    var sizeButtons = document.createElement("div");
    sizeButtons.className = "sizeCont";
    
    var xsButton = document.createElement("button");
    
    xsButton.className = "xsmall";
    sizeButtons.appendChild(xsButton);
    var xsTxt = document.createTextNode("XS");
    xsButton.appendChild(xsTxt);
    //xsButton.setAttribute("id", "xs");
    xsButton.setAttribute("id", j+i);
    xsButton.addEventListener("click", sizeChecker);

    var sButton = document.createElement("button");

    sButton.className = "small";
    sizeButtons.appendChild(sButton);
    var sTxt = document.createTextNode("S");
    sButton.appendChild(sTxt);
    //sButton.setAttribute("id", "s");
    sButton.setAttribute("id", s+i);
    sButton.addEventListener("click", sizeChecker);
    

    var mButton = document.createElement("button");
    mButton.className = "med";
    sizeButtons.appendChild(mButton);
    var mTxt = document.createTextNode("M");
    mButton.appendChild(mTxt);
    //mButton.setAttribute("id", "m");
    mButton.setAttribute("id", m+i);
    mButton.addEventListener("click", sizeChecker);

    var lButton = document.createElement("button");
    lButton.className = "large";
    sizeButtons.appendChild(lButton);
    var lTxt = document.createTextNode("L");
    lButton.appendChild(lTxt);
    //lButton.setAttribute("id", "l");
    lButton.setAttribute("id", x+i);
    lButton.addEventListener("click", sizeChecker);
    
    buttonsDiv.appendChild(sizeButtons);
    prodCont.appendChild(buttonsDiv);

    
    

    //actually adds the entire card to the page
    element.appendChild(prodCont);
  }
}

/*for(var x = 0; x < document.getElementsByClassName('small').length; x++){
  document.getElementsByClassName('small')[x].setAttribute('id', 'small' + x);
}*/

function sizeChecker(){
  //alert(this.id);
  check = true;
  size = document.getElementById(this.id).className;
  var ID = this.id;
  //alert(size);
  let num = ID.replace(/[^0-9]/g, '');
  //let elements = document.querySelectorAll('button.med, button.xsmall, button.large, button.small');
  let buttons = document.getElementsByClassName("xsmall");
  let buttonss = document.getElementsByClassName("small");
  let buttonsss = document.getElementsByClassName("med");
  let buttonssss = document.getElementsByClassName("large");
  //alert(num + buttons[0]);
  //buttons[0].style.backgroundColor = "black";
  for(let v = 0; v < buttons.length; v++){
    if(buttons[v].id.includes(num)){
      buttons[v].style.backgroundColor = "#eceaea";
    }
  }
  for(let v = 0; v < buttonss.length; v++){
    if(buttonss[v].id.includes(num)){
      buttonss[v].style.backgroundColor = "#eceaea";
    }
  }
  for(let v = 0; v < buttonsss.length; v++){
    if(buttonsss[v].id.includes(num)){
      buttonsss[v].style.backgroundColor = "#eceaea";
    }
  }
  for(let v = 0; v < buttonssss.length; v++){
    if(buttonssss[v].id.includes(num)){
      buttonssss[v].style.backgroundColor = "#eceaea";
    }
  }
  
  //let num = ID.match(/\d/g);
  //num = num.join("");
  //let elements = document.querySelectorAll('btn');
  document.getElementById(this.id).style.backgroundColor = "green";

}

function addtoCart(){

  let item = [];
  
  if(check == false){
    alert("You must select a size first!");
  } else {
    item.push(this.id);
    item.push(size);

    if(cart[0] == "Cart is empty"){
      cart = [item];
    } else {
      cart.push(item);
      //window.alert(cart);
    }
  }
  
  
  
  //window.alert(this.id);
}

function showID(){
  window.alert(this.id);
}


function newTab(){
  window.open("https://ataraxia.menag.repl.co/example.html");
}