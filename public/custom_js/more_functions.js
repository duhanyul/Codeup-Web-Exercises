(function(){

 function idenity(input){
   return input;
 }
 console.log(idenity(25));
 function getRandomNumber(min,max){
   var randNum = Math.floor((Math.random() * max - min) + min);
   return randNum;
 }
 console.log(getRandomNumber(1,5));
 function first(input){
    input = input.charAt(0);
   return input;
 }
 console.log(first("Hello"));
 function last(input){
   input = input.charAt(input.length-1)
   return input;
 }
 console.log(last("If"));
 function rest(input){
   input = input.slice(1);
   return input;
 }
 console.log(rest("Hello"));
 function reverse(input){
   var reverseInput ="";
   for (var i = input.length - 1; i >= 0; i--) {
        reverseInput += input[i];
      }
      return reverseInput;
 }
 console.log(reverse("Daniel"));
 function isNumeric(input){
   if (input * 1 == input) {
     return input;
   }else {
     return input + " is not a number"
   }
 }
 console.log(isNumeric("hello"));
 function count(input){
   input = input.length;
   return input;
 }
 console.log(count("Hello"));
 function add(a,b){
   var result = a+b
   return result;
 }
 console.log(add(5,4));
 function subtract(a,b){
   var result = a-b;
   return result;
 }
 console.log(subtract(5,4));
 function multiply(a,b){
   var result = a*b;
   return result;
 }
 console.log(multiply(5,4));
 function divide(numerator,denominator){
   var result = numerator / denominator;
   return result;
 }
 console.log(divide(4,2));
 function remainder(number,divisor){
   var remain = number % divisor;
   return remain;
 }
 console.log(remainder(3,2));
 function square(a){
   var result = a*a;
   return result;
 }
 console.log(square(4));
 function sumOfSquare(a,b){
   var result = (square(a) + square(b))
   return result;
 }
 console.log(sumOfSquare(2,4));
 function doMath(operator,a,b){
   var result = 0;
   
   if (operator == add) {
     result = add(a,b);
   }else if (operator == subtract) {
     result = subtract(a,b);
   }else if (operator == multiply) {
     result = multiply(a,b);
   }else if (operator == divide) {
     result = divide(a,b);
   }else if (operator == remainder) {
     result = remainder(a,b);
   }else if (operator == square) {
     result = square(a);
   }else if (operator == sumOfSquare) {
     result = sumOfSquare(a,b);
   }
   return result;
 }
 console.log(doMath(add,5,4));
})();
