"use strict";
(function (){
  function favoriteRestaurant(results,status){
    if (status == google.maps.GeocoderStatus.OK) {
      console.log('Geocoding finished!');
      var result = results[0];
      console.log(result);
      var position = result.geometry.location;
      console.log(position.lat(),position.lng());
      var marker = new google.maps.Marker({
        position : position,
        map: map,
        title: 'Giordanos'
      });
      var restaurantInfo = "<h1> Giordanos </h1> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

      var infowindow = new google.maps.InfoWindow({
          content: restaurantInfo
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

    }
  }
  var mapElement = document.getElementById('map');
  var mapOptions = {
    // Set the zoom level
    zoom: 16,

    // This sets the center of the map at our location
    center: {
      lat:  41.89143199999999,
      lng:  -87.60908010000003
    }
  };
  var map = new google.maps.Map(mapElement, mapOptions);
  var geocoder = new google.maps.Geocoder();
  var geocoderOptions = {
    address: "700 E Grand Ave, Chicago, IL 60611"
  }
  geocoder.geocode(geocoderOptions,favoriteRestaurant);
})();
