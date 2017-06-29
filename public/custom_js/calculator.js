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
      }else{
        if (input[i] === "+") {
          console.log(resultStack);
          resultStack.push(parseFloat(a) + parseFloat(b));
          console.log(resultStack);
        }else if (input[i] === "-") {
          console.log(resultStack);
          resultStack.push(parseFloat(b) - parseFloat(a));
          console.log(resultStack);
        }
      }

  }
}
    return window.innerHTML = resultStack.pop();
 }


/*  Takes in the string from the window of the calculator and formats it into RPN */
 function rpn(input){
   var result = [];
   input = Array.from(input);
   for (var i = 0; i < input.length + 1; i++) {
    if (input[i] == "x") {
      input[i] = " ";
      input.push(" *");
      console.log(input);
      continue;
    }else if (input[i] == "/") {
      input[i] = " ";
      input.push(" /");
      continue;
    }else if (input[i] == "+") {
      input[i] = " ";
      input.push(" +");
      continue;
    }else if (input[i] == "-") {
      input[i] = " ";
      input.push(" -");
      continue;
    }else if (!isNaN(input[i])) {
      input.unshift(input[i]);
      input[i+1] = " "
      console.log(input);
    }
   }
   result = input.join("");
   console.log(result);
   return evaluate(result);
 }

}());
