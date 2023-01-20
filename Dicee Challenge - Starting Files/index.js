var randomeNumber=Math.floor((Math.random() * 6)+1);
var randomeNumber1=Math.floor((Math.random() * 6)+1);
console.log(randomeNumber);
console.log(randomeNumber1);
var str="images/dice"+randomeNumber+".png";
var str1="images/dice"+randomeNumber1+".png";
document.querySelector(".img1").setAttribute("src",str);
document.querySelectorAll("img")[1].setAttribute("src",str1);
if(randomeNumber>randomeNumber1)
    document.querySelector("h1").textContent="Player1 is the winner";
else if(randomeNumber<randomeNumber1)
    document.querySelectorAll("h1")[0].textContent="Player2 is the winner";
else if(randomeNumber==randomeNumber1)
    document.querySelector("h1").textContent="Draw!";
