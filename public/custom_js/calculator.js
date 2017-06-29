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
      result.push("*");
      console.log(input);
      continue;
    }else if (input[i] == "/") {
      input[i] = " ";
      result.push("/");
      continue;
    }else if (input[i] == "+") {
      input[i] = " ";
      result.push("+");
      continue;
    }else if (input[i] == "-") {
      input[i] = " ";
      result.push("-");
      continue;
    }
   }
   for (var i = 0; i < result.length; i++) {
     if (result[i] == "+" || result[i] == "-") {
       result.push(result[i]);
     }
   }
   var x = input.join("");
   console.log(x);
   x = x.split(" ")
   console.log(x);
  //  x.reverse();
   console.log(x);
   for (var i = 0; i < result.length; i++) {
     x.push(result[i])
   }
   result = x.join(" ");
   console.log(result);
return evaluate(result);
 }

}());
