(function(){
  " use strict";
  var calculatorButtons = document.querySelectorAll(".calcButtons");
  // console.log(calculatorButtons);
  var window = document.getElementById('window');
  var middleOperand = document.getElementById('midOper');
  var rightOperand = document.getElementById('rightOper');
  // console.log(window,middleOperand,rightOperand);

  // Cycles through each button click
  calculatorButtons.forEach(function(pressedButton){
   pressedButton.addEventListener("click", function(i){
    //  console.log(i.target.innerHTML);
    console.log(parseInt(i.target.innerHTML));
    if (i.target.innerHTML == "C") {
      clearOperands();
      // console.log(window);
    }else if (i.target.innerHTML == "=") {
      rpn(window.innerHTML);
    }
    else {
      window.innerHTML += i.target.innerHTML;

    }



   });

 });
 /******************* FUNCTIONS ********************/
// Clears the field
 function clearOperands(){
   window.innerHTML = "";
 }

 /* Takes in a string that has been changed in to Reverse polish notation
 Evaluates the string and returns the value back to the window on the calculator*/
 function evaluate(expression){
    var input = expression;
    input = input.split(" ");
    console.log(input);
    var resultStack = [];
    for (var i = 0; i < input.length; i++) {
      if (!isNaN(parseFloat(input[i]) && isFinite(input[i]))) {
        resultStack.push(input[i]);
      }else {
        var a = resultStack.pop();
        var b = resultStack.pop();
        console.log(resultStack);
      if (input[i] === "*") {
        console.log(resultStack);
        resultStack.push(parseFloat(a) * parseFloat(b));
        console.log(resultStack);

      } else if (input[i] === "/") {
        console.log(resultStack);
        resultStack.push(parseFloat(b) / parseFloat(a));
        console.log(resultStack);
      }
        else if (input[i] === "+") {
          console.log(resultStack);
          resultStack.push(parseFloat(a) + parseFloat(b));
          console.log(resultStack);
      } else if (input[i] === "-") {
        console.log(resultStack);
        resultStack.push(parseFloat(b) - parseFloat(a));
        console.log(resultStack);
    }
  }
}


    return window.innerHTML = resultStack.pop();

 }



 function rpn(input){
   var result = [];
   input = Array.from(input);
  //  console.log(input);
   for (var i = 0; i < input.length; i++) {
    if (input[i] == "x") {
      if (input[i-2] == "x"||input[i-2] == "/") {
        input[i] = " "
        input.push(" *")
      }else {
        input[i] = " "
        input.splice(input.length-1,0," *")
      }
      console.log(input);
      continue;
    }else if (input[i] == "/") {
      if (input[i-2] == "x"||input[i-2] == "/") {
        input[i] = " "
        input.push(" /")
      }else {
        input[i] = " "
        input.splice(input.length-1,0," /")
      }
      continue;
    }else if (input[i] == "+") {
      input[i] = " ";
      input.push(" +");
      continue;
    }else if (input[i] == "-") {
      input[i] = " ";
      input.push(" -");
      continue;
    }
   }
   result = input.join("");
   console.log(result);
   return evaluate(result);
 }
function oneDecimal(expression){
    var a;
    a = expression.search(".");
    if (a == -1) {
      return false;
    }else {
      return true;
    }
  }



}());
