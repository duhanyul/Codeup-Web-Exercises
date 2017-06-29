$(document).ready(function(){
  "use strict";
  var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  konamiGame();
  function konamiGame(){
    var i = 0;
    var inputArray = [];
    $(document).keydown(function(event){
      if (i<10) {
        inputArray[i]=event.keyCode;
        i++;
        console.log(inputArray);
      }else if (event.keyCode == 13) {
        compare(inputArray,konamiCode)
      }
    });
  }
  function compare(array1,array2){
    if (array1.toString()===array2.toString()) {
      $('#message').text("AWESOME");
      $('div').html("<div> <object type='text/html' data = 'http://codeup.dev/calculator.html' width = '800px' height ='600px'></object></div> ")
      return console.log("AWEsomE");
    }else {
      return konamiGame();
    }
  }
});
