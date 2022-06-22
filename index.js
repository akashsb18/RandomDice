var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);


var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage);