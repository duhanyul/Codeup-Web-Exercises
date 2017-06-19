(function(){

 function idenity(input){
   return input;
 }
 console.log(idenity(getRandomNumber(1,100)));
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
 console.log(add(getRandomNumber(1,100),getRandomNumber(1,100)));
 function subtract(a,b){
   var result = a-b;
   return result;
 }
 console.log(subtract(getRandomNumber(1,100),getRandomNumber(1,100)));
 function multiply(a,b){
   var result = a*b;
   return result;
 }
 console.log(multiply(getRandomNumber(1,100),getRandomNumber(1,100)));
 function divide(numerator,denominator){
   var result = numerator / denominator;
   return result;
 }
 console.log(divide(getRandomNumber(1,100),getRandomNumber(1,100)));
 function remainder(number,divisor){
   var remain = number % divisor;
   return remain;
 }
 console.log(remainder(getRandomNumber(1,100),getRandomNumber(1,100)));
 function square(a){
   var result = a*a;
   return result;
 }
 console.log(square(4));
 function sumOfSquare(a,b){
   var result = (square(a) + square(b))
   return result;
 }
 console.log(sumOfSquare(getRandomNumber(1,100),getRandomNumber(1,100)));
 function doMath(operator,a,b){
  //  var result = 0;

  //  if (operator == add) {
  //    result = add(a,b);
  //  }else if (operator == subtract) {
  //    result = subtract(a,b);
  //  }else if (operator == multiply) {
  //    result = multiply(a,b);
  //  }else if (operator == divide) {
  //    result = divide(a,b);
  //  }else if (operator == remainder) {
  //    result = remainder(a,b);
  //  }else if (operator == square) {
  //    result = square(a);
  //  }else if (operator == sumOfSquare) {
  //    result = sumOfSquare(a,b);
  //  }
  //  return result;
  return operator(a,b);
 }
 console.log(doMath(sumOfSquare,getRandomNumber(1,100),getRandomNumber(1,100)));
})();
