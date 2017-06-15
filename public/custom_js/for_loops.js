"use strict";
// Exercise 1

var userNum = prompt("I'd like a number between 1 and 10 please")
var total = 1;
for (var i = 1; i <= 10; i++) {
  total= userNum * i;
  console.log(userNum + "x" + i + "=" + total);
}
//  Exercise 2

var rand = 0;
for (var i = 1; i <=10; i++) {
  rand = Math.floor(Math.random() * 180) + 20;
  if (rand % 2 ==0) {
    console.log(rand + " is even");
  }else {
    console.log(rand + " is odd");
  }
}
//  Exercise 3
// var str;
// for (var i = 1; i <=10; i++) {
//   str = i.toString();
//   for (var j = 0; j < i; j++) {
//     str += i;
//   }
//   if (i == 10) {
//     str = "0000000000"
//     console.log(str);
//   }else{
//    str = str.substring(0, str.length - 1);
//   console.log(str);
//        }
// }
var str_2;
for (var i = 1; i <= 10; i++) {
  str_2 = i % 10;
  str_2 = str_2.toString();
  console.log(str_2.repeat(i));
}

//  Exercise 4
var total = 100;
console.log(total);
for (var i = 1; total > 5; i++) {
  total = total - 5;
  console.log(total);
}
