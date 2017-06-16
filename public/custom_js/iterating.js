(function(){
    "use strict";
    var numbers = []
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = new Array('Daniel','Jimmy','Billy','Nancy');
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
    names.forEach(function (element, index, array){
      console.log("The name at index " + index + " is " + element);
    });
    for (var j = 0; j < 10; j++) {
      numbers[j] = j+1;
      console.log(numbers[j]);
    }
    console.log(numbers);
})();
