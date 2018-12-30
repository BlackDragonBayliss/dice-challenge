// alert("working")

var randomDiceImage1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

var randomDiceImage2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"; //dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)
