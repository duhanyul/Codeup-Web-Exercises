"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {

  case 'red':
    console.log("Red is the color of blood.");
    break;
  case 'orange':
    console.log("Orange is the color of an orange ");
    break;
  case 'yellow':
    console.log("Yellow is the color of the sun");
    break;
  case 'green':
    console.log("Green is the color of grass");
    break;
  case 'blue':
    console.log("Blue is the color of the sky");
    break;
  default:
    console.log("I do not know anything about that color");
    break;
}

var totalCameron = 180;
var totalRyan = 250;
var totalGeorge = 320;
var total = 0;

if (totalCameron > 200) {
  console.log("Cameron's total is " + totalCameron);
  total = totalCameron - (totalCameron * 0.1)
  console.log("New total after 10% discount is " + total);
}else {
  console.log("Cameron's total is " + totalCameron);
  console.log("No discount applied, did not spend more than $200");
}
if (totalRyan > 200) {
  console.log("Ryan's total is " + totalRyan);
  total = totalRyan - (totalRyan * 0.1);
  console.log("New total after 10% discount is " + total);
}else {
  total = totalRyan;
  console.log("Ryan's total is " + total);
}
if (totalGeorge > 200) {
  console.log("George's total is " + totalGeorge);
  total = totalGeorge - (totalGeorge * 0.1);
  console.log("New total after 10% discount is " + total);
}else {
  total = totalGeorge;
  console.log("George's total is " + total);
}

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin == 0) {
  console.log("Buy a car!");
}else {
  console.log("Buy a house!");
}

var luckyNumber = Math.floor(Math.random()* 6)
var walTotal = 60;
var newTotal = 0;

switch (luckyNumber) {
  case (1):
    newTotal = walTotal - (walTotal * 0.1);
    console.log("Your total is " + newTotal);
    break;
  case (2):
    newTotal = walTotal - (walTotal * 0.25);
    console.log("Your total is " + newTotal);
    break;
  case (4):
    newTotal = walTotal - (walTotal * 0.5);
    console.log("Your total is " + newTotal);
    break;
  case (5):
    newTotal = 0;
    console.log("Your total is " + newTotal + " Lucky number 5");
    break;
  default:
    newTotal = walTotal;
    console.log("Your total is " + newTotal + " Better luck next time");
    break;
  }

  var yourNumber = prompt('Please Enter a Number')
  var numPlus = parseInt(yourNumber) + 100;

  if (isNaN(yourNumber)) {
    alert("THAT IS NOT A NUMBER")
  }else if (yourNumber == 0) {
    console.log("The number " + yourNumber + " is neither positive nor negative");
    console.log("The number 0 is even");
    console.log("0 plus 100 is 100");
  }else if ((yourNumber % 2) == 0) {
    console.log("The number " + yourNumber + " is even");
    if (yourNumber>0) {
      console.log("The number " + yourNumber + " is positive");
    }else {
      console.log("The number " + yourNumber + " is negative");
    }

    console.log("The number " + yourNumber + " plus 100 is " + numPlus);
  }else if ((yourNumber % 2) !== 0) {
    console.log("The number " + yourNumber + " is odd");
    if (yourNumber>0) {
      console.log("The number " + yourNumber + " is positive");
    }else {
      console.log("The number " + yourNumber + " is negative");
    }
      console.log("The number " + yourNumber + " plus 100 is " + numPlus);
  }
