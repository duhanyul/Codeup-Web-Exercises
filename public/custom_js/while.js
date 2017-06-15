"use strict";
//  Exercise 1
var ex_1 = 2;
while (ex_1 <= 65536) {
  console.log(ex_1);
  ex_1 = ex_1*2;
}
//  Exercise 2
var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;

do {

  if (cones > allCones) {
    console.log("Sorry i dont have " + cones + " cones");
    console.log("Cones remaining " + allCones);
    cones = Math.floor(Math.random() * 5) + 1;
    continue;
  }
  allCones = allCones - cones;
  console.log(cones+" sold");
  console.log("number of cones remaining " + allCones);
  cones = Math.floor(Math.random() * 5) + 1;
} while (allCones > 0);
  console.log("HOORAY! THEY ARE ALL SOLD!");
