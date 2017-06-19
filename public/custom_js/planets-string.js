(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');


    // TODO: Convert planetsString to an array, save it to planetsArray.

    // console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsString_2 = planetsArray
    // console.log(planetsString_2);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    console.log(planetsString_2);
    planetsString_2.unshift("<ul>");
    console.log(planetsString_2);
    planetsString_2.push("</ul>");
    console.log(planetsString_2);
    // console.log(planetsString_2.length);
    for (var i = 1; i < planetsString_2.length-1; i++) {
      planetsString_2[i] = "<li>" + planetsString_2[i] + "</li>"
    }
    console.log(planetsString_2);
    planetsString_2 = planetsString_2.join("");
    console.log(planetsString_2);
    document.write (planetsString_2);


})();
