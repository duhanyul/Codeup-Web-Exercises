"use strict";
(function (){
  var mapElement = document.getElementById('map');
  var mapOptions = {
    // Set the zoom level
    zoom: 3,

    // This sets the center of the map at our location
    center: {
      lat:  41.89143199999999,
      lng:  -87.60908010000003
    }
  };
  var addresses = [
     "700 E Grand Ave, Chicago, IL 60611",
     "9102 TX-1604 Loop, San Antonio, TX 78254",
     "5706 W Loop 1604 N, San Antonio, TX 78251"

  ];
  var map = new google.maps.Map(mapElement, mapOptions);
  var geocoder = new google.maps.Geocoder();
  var geocoderOptions;
  mapFiller();
  /***************************** FUNCTIONS *************************/

  /* Runs all other function for each address */
  function mapFiller(){
    for (var i = 0; i < 4; i++) {
      geocoderOptions = {
        address: addresses[i]
      }
      geocoder.geocode(geocoderOptions,favoriteRestaurant);
    }
  }
  /* function that returns restaurant description based on adress */
  function restaurantDescript(address){
    var info;
    // if (address == "700 E Grand Ave, Chicago, IL 60611, USA") {
    //   info = "<div class = 'red'><h1> Giordano's</h1> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>";
    //   return info;
    // }else if (address == "9102 TX-1604 Loop, San Antonio, TX 78254, USA") {
    //   info = "<div class = 'red'><h1>Popeyes</h1> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>"
    //   return info;
    // }else if (address == "5706 W Loop 1604 N, San Antonio, TX 78251, USA") {
    //   info = "<div class = 'red'><h1>Longhorn's</h1> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>"
    //   return info;
    // }
    info = "<div> <object type='text/html' data = 'http://codeup.dev/calculator.html' width = '800px' height ='600px'></object></div> "
    return info;
  }
  /* fills map with markers and info windows on those markers*/

  function favoriteRestaurant(results,status){
    if (status == google.maps.GeocoderStatus.OK) {
      // console.log('Geocoding finished!');
      console.log(results);
      results.forEach(function(result){

        var position = result.geometry.location;
        // console.log(position.lat(),position.lng());
        var marker = new google.maps.Marker({
          position : position,
          map: map,
        });console.log(result.formatted_address);
        var restaurantInfo = restaurantDescript(result.formatted_address)

        var infowindow = new google.maps.InfoWindow({
          content: restaurantInfo
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      })
    }
  }
})();
