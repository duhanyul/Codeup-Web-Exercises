(function(){
  "use strict";
  var testArray = [1,2,3,4,5];

  /************** Problem 1 ************/

  function isNegative(userNumber){
    if (userNumber < 0 ) {
      return true;
    }else {
      return false;
    }
  }
  // console.log(isNegative(100));

  /************** Problem 2 ************/

  function average(userNumberArray){
    var sum = 0;
    var average;
    for (var i = 0; i < userNumberArray.length; i++) {
      sum += userNumberArray[i]
    }
    average = sum / userNumberArray.length;
    return average;
  }
  // console.log(testArray);
  // console.log(average(testArray));

  /************** Problem 3 ************/

  function countOdds(userNumberArray){
    var totalOdds = 0;
    for (var i = 0; i < userNumberArray.length; i++) {
      if (userNumberArray[i] % 2 !== 0) {
        totalOdds++;
      }
    }
    return totalOdds;
  }
  // console.log(countOdds(testArray));

  /************** Problem 4 ************/

  function convertNameToObject(userName){
    var nameArray = userName.split(' ');
    // console.log(nameArray);
    var objectName = {
      firstName: nameArray[0],
      lastName: nameArray[1]
    };
    return objectName;
  }
  console.log(convertNameToObject("Jimmy Shoes"));

  /************** Problem 5 ************/

  function fiveTo(userNumber){
    var fiveArray = [5];
    for (var i = 1; (5+i < userNumber) ; i++) {
      fiveArray[i] = 5+i;
    }
    return fiveArray;
  }
  console.log(fiveTo(90));

  /************** Problem 6 ************/

  var names = [
       {firstName: 'Harry', lastName: 'potter'},
       {firstName: 'Ron', lastName: 'weasley'},
       {firstName: 'Hermione', lastName: 'granger'}
   ];
  function upperCaseLastNames(userNames){
    var upperCase = userNames
    for (var i = 0; i < upperCase.length; i++) {
    upperCase[i].lastName = upperCase[i].lastName.charAt(0).toUpperCase() + upperCase[i].lastName.slice(1);
    }
    return upperCase;
  }
  console.log(upperCaseLastNames(names));
})();
