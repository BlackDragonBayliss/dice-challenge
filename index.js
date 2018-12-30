// alert("working")
var randomDiceNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomDiceImage1 = "images/dice" + randomDiceNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

var randomDiceNumber2 = (Math.floor(Math.random() * 6) + 1);
var randomDiceImage2 = "images/dice" + randomDiceNumber2 + ".png"; //dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


//If player 1 wins
if (randomDiceNumber1 > randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}
//if player 2 wins
else if (randomDiceNumber2 > randomDiceNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}
//else draw
else{
  document.querySelector("h1").innerHTML = "Draw!"
}