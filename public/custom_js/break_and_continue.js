"use strict"
var userNum = prompt("I would like an odd number between 1 and 50 please");

while (userNum % 2 == 0 || isNaN(userNum) || (userNum > 50 || userNum < 1)) {
  userNum = prompt("I would like an odd number between 1 and 50 please");
}

for (var i = 1; i < 50; i++) {
  if (i == userNum) {
    console.log("Yikes! Skipping number: " + i);
    continue;
  }
  if (i % 2 !== 0) {
    console.log("Here is an odd number: " + i);
  }
}
