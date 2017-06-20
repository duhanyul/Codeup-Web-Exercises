(function(){
    "use strict";
  //   var numbers = []
  //   var names = new Array('Daniel','Jimmy','Billy','Nancy');
  //   console.log(names.length);
  //   for (var i = 0; i < names.length; i++) {
  //     console.log(names[i]);
  //   }
    names.forEach(function (element, index, array){
      console.log("The name at index " + index + " is " + element);
    });
  //   for (var j = 0; j < 10; j++) {
  //     numbers[j] = j+1;
  //     console.log(numbers[j]);
  //   }
  //   console.log(numbers);
  //   var madLibs = ["There are many ",null,"to choose a/an ",null,"to read.First you could ask for recommendations from your friends and ",null];
  //   console.log(madLibs);
  //   function madGame(){
  //   do {
  //       console.log(madLibs[0][1]);
  //       madLibs[1] = prompt("Please enter a word to contine the sentence")
  //
  //       console.log(madLibs[0,1,2,3]);
  //       madLibs[3] = prompt("Please enter a word to contine the sentence")
  //
  //       console.log(madLibs[0,1,2,3,4,5]);
  //       madLibs[5] = prompt("Please enter a word to contine the sentence")
  //       console.log(madLibs);
  //
  //
  //   } while ((madLibs[1] || madLibs[3] || madLibs[5])==null);
  //   if (confirm("Would you like to play again?")) {
  //     madGame();
  //   }
  // }
  // madGame();
  var temps = [];
  var keepGoing = true;
  for (var i = 0; i < 1000; i++) {
    temps[i] = prompt("PLease enter a temperature to convert")
    keepGoing = confirm("Would you like to add another temperature?")
    if (keepGoing == false) {
      break;
    }
  }
  console.log(temps);
  function tempConvert(temperature){
    var convertType = prompt("Are you converting from farenheit to celsius?");
    if (convertType == "yes") {
      for (var i = 0; i < temps.length; i++) {
        temps[i] = (temps[i] - 32) * (5/9)
      }
      console.log(temps);
    }else if (convertType == "no") {
      convertType = prompt("Would you like to convert from celsius to farenheit?");
      if (convertType == "yes") {
        for (var i = 0; i < temps.length; i++) {
          temps[i] = (temps[i] * (9/5)) + 32
        }
        console.log(temps);
      }
    }
  }
        tempConvert(temps);

})();
