
let selection = '';

function placeOrder(){
    let firstName = document.getElementById("first").value;
    let lastname = document.getElementById("last").value;
    let name = document.getElementById("name");
    
    
    if(firstName == "" && lastname == "") {
        document.getElementById("firstError").style.display = "flex";
        document.getElementById("lastError").style.display = "flex";    
        document.getElementById("firstError").style.opacity = "1";
        document.getElementById("lastError").style.opacity = "1";
        document.getElementById("button")
    } else if(firstName == "" && lastname !== ""){
        document.getElementById("firstError").style.display = "flex";
        document.getElementById("lastError").style.display = "none";
        document.getElementById("firstError").style.opacity = "1";
        document.getElementById("lastError").style.opacity = "0";
    
    } else if(firstName !== "" && lastname == ""){
        document.getElementById("firstError").style.display = "none";
        document.getElementById("lastError").style.display = "flex";
        document.getElementById("firstError").style.opacity = "0";
        document.getElementById("lastError").style.opacity = "1";
    
    } else {
        document.getElementById("firstError").style.display = "none";
        document.getElementById("lastError").style.display = "none";
        document.getElementById("firstError").style.opacity = "0";
        document.getElementById("lastError").style.opacity = "0";
        
        name.innerHTML = firstName + " " + lastname;
    }
    
    let address = document.getElementById("address").value;
    let location = document.getElementById("pickup");

    if(address !== ""){
        location.innerHTML = address;
        location.style.display = "flex"
        document.getElementById("phoneError").style.display = "none";
        document.getElementById("phoneError").style.opacity = "0";
    } else if(address == ""){
        location.style.display = "none"
        document.getElementById("addError").style.display = "flex";
        document.getElementById("addError").style.opacity = "1";
    
    }
    
    let tel = document.getElementById("tel").value
    let phone = document.getElementById("phone");
    
    if(tel !== ""){
        phone.innerHTML = tel;
        phone.style.display = "flex"
        document.getElementById("phoneError").style.display = "none";
        document.getElementById("phoneError").style.opacity = "0";
    } else if(tel == ""){
        phone.style.display = "none"
        document.getElementById("phoneError").style.display = "flex";
        document.getElementById("phoneError").style.opacity = "1";    
    }
    
    let postal = document.getElementById("postal").value;
    let postaladd = document.getElementById("postalcode");
    
    if(postal !== ""){
        postaladd.innerHTML = postal;
        postaladd.style.display = "flex"
        document.getElementById("postalError").style.display = "none";
        document.getElementById("postalError").style.opacity = "0";
    } else if(postal == ""){
        postaladd.style.display = "none"
        document.getElementById("postalError").style.display = "flex";
        document.getElementById("postalError").style.opacity = "1";
    
    }

    let email = document.getElementById("email").value;
    let emailadd = document.getElementById("emailadd");
    
    if(email !== ""){
        emailadd.innerHTML = email;
        emailadd.style.display = "flex"

    } else if(email == ""){
        emailadd.style.display = "none"
    
    }

    console.log(this.selection)
    if(this.selection === 'square'){
        createSquare();
    }

    if(this.selection === 'round'){
        createRound();
    }



}


function createSquare() {
    const baseSquarePrice = 18.00;
    let width = document.getElementById("width").value;
    let length =  document.getElementById("length").value;
    let sqrarea = width * length;
    let sqrareaCost = Math.round(baseSquarePrice);
    let overallTotal = 0.00;
    let layer = document.getElementById("layer").value;
    let addLayer = sqrareaCost * 0.50;


    if(parseFloat(sqrarea) >= 900){
        diff = sqrarea - 900;
        sqrareaCost += diff * 0.02;
        document.getElementById("cakedetail").innerHTML = "Sheet cake " + length + "cm" + " x " + width+ "cm" + " with " + layer + " layer";
        document.getElementById("cakecost").innerHTML = "$ "  + sqrareaCost.toFixed(2)

    }

    overallTotal += parseFloat(sqrareaCost);

    if(layer > 1){
        document.getElementById("cakecost").innerHTML = "$ "  + (sqrareaCost + addLayer).toFixed(2)

        overallTotal += parseFloat((sqrareaCost * 0.50) * parseInt(layer - 1));
    }

    console.log("layer" +layer)
    let total = document.getElementById("total");
    
    let cream = document.getElementById("cheese");
    let fruit = document.getElementById("fruit");
    let jam = document.getElementById("filling");
    const creamPrice = 5;
    const fruitPrice = 7;
    const jamPrice = 4;
    
    if(cream.checked == true){
        document.getElementById("cream").style.display = "flex";
        document.getElementById("creamprice").style.display = "flex";
        document.getElementById("cream").innerHTML = "Cream Cheese icing";
        document.getElementById("creamprice").innerHTML = "$" +creamPrice.toFixed(2);
        overallTotal += parseFloat(creamPrice.toFixed(2));
    } else {
        document.getElementById("cream").style.display = "none";
        document.getElementById("creamprice").style.display = "none";
    }
    
    if(fruit.checked == true){
        document.getElementById("almond").style.display = "flex";
        document.getElementById("almondprice").style.display = "flex";
        document.getElementById("almond").innerHTML = "Fruit and Almonds topping";
        document.getElementById("almondprice").innerHTML = "$" +fruitPrice.toFixed(2);
        overallTotal += parseFloat(fruitPrice.toFixed(2));
    } else {
        document.getElementById("almond").style.display = "none";
        document.getElementById("almondprice").style.display = "none";
    }
    
    if(jam.checked == true){
        document.getElementById("jam").style.display = "flex";
        document.getElementById("jamprice").style.display = "flex";
        document.getElementById("jam").innerHTML = "Fruit jam filling between layers";
        document.getElementById("jamprice").innerHTML = "$" +jamPrice.toFixed(2);
        overallTotal += parseFloat(jamPrice.toFixed(2));
    } else {
        document.getElementById("jam").style.display = "none";
        document.getElementById("jamprice").style.display = "none";
    }

    total.innerHTML = '$ ' + parseFloat(overallTotal).toFixed(2);
}


function createRound(){
    const roundBasePrice = 15.00;
    let cakeRadius = document.getElementById("radius").value;
    console.log( "cake radius" + cakeRadius)
    let area = Math.round((cakeRadius*cakeRadius)*3.14) ;
    console.log("the area is" + area)
    let overallTotal = 0.00;
    let layer = document.getElementById("layer").value;

    console.log("circle area" + area)


    let areaCost = Math.round(roundBasePrice);

    if(parseFloat(area) >= 707){
        diff = area - 707;
        console.log("subtract minimum = " + diff)
        areaCost += diff * 0.02;
        console.log("areacost = " + areaCost)
        document.getElementById("cakedetail").innerHTML = "Round cake " + cakeRadius + "cm" + " with " + layer + " layer";
        document.getElementById("cakecost").innerHTML = "$ "  + areaCost.toFixed(2)
    }

    overallTotal += parseFloat(areaCost);

    if(layer > 1){
        document.getElementById("cakecost").innerHTML = "$ "  + (areaCost/2).toFixed(2)

        overallTotal += parseFloat((areaCost * 0.50) * parseInt(layer - 1) );
    }    
    
    console.log("layer" +layer)
    let total = document.getElementById("total");
    
    let cream = document.getElementById("cheese");
    let fruit = document.getElementById("fruit");
    let jam = document.getElementById("filling");
    const creamPrice = 5;
    const fruitPrice = 7;
    const jamPrice = 4;
    
    if(cream.checked == true){
        document.getElementById("cream").style.display = "flex";
        document.getElementById("creamprice").style.display = "flex";
        document.getElementById("cream").innerHTML = "Cream Cheese icing";
        document.getElementById("creamprice").innerHTML = "$" +creamPrice.toFixed(2);
        overallTotal += parseFloat(creamPrice.toFixed(2));
    } else {
        document.getElementById("cream").style.display = "none";
        document.getElementById("creamprice").style.display = "none";
    }
    
    if(fruit.checked == true){
        document.getElementById("almond").style.display = "flex";
        document.getElementById("almondprice").style.display = "flex";
        document.getElementById("almond").innerHTML = "Fruit and Almonds topping";
        document.getElementById("almondprice").innerHTML = "$" +fruitPrice.toFixed(2);
        overallTotal += parseFloat(fruitPrice.toFixed(2));
    } else {
        document.getElementById("almond").style.display = "none";
        document.getElementById("almondprice").style.display = "none";
    }
    
    if(jam.checked == true){
        document.getElementById("jam").style.display = "flex";
        document.getElementById("jamprice").style.display = "flex";
        document.getElementById("jam").innerHTML = "Fruit jam filling between layers";
        document.getElementById("jamprice").innerHTML = "$" +jamPrice.toFixed(2);
        overallTotal += parseFloat(jamPrice.toFixed(2));
    } else {
        document.getElementById("jam").style.display = "none";
        document.getElementById("jamprice").style.display = "none";
    }

    total.innerHTML = '$ ' + parseFloat(overallTotal).toFixed(2);
}



// AJAX call for html page

function getSquare() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("cakeconfig").innerHTML = xhr.responseText;
            vm.selection = 'square';
        }
    };
    xhr.open("GET", "./square.html", true);
    xhr.send();
    
}

function getRound() {
    var xhr = new XMLHttpRequest();
    let vm = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("cakeconfig").innerHTML = xhr.responseText;
            vm.selection = 'round';
        }
    };
    xhr.open("GET", "round.html", true);
    xhr.send();
}


function clearContent() {
    
    document.getElementById("menu_content").innerHTML="";
    
    
}