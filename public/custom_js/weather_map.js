$(document).ready(function(){
  "use script"
    /************ Initialize the first Map ***********/
    makeMap("start");
    $('#search').click(searchBar);
    /************ FUNCTIONS ****************/

    // Handles the Search bar to generate a map based on search value

    function searchBar(){
      var cityName = $('#city').val()
      console.log(cityName);
      var geocoder = new google.maps.Geocoder();
      var geocoderOptions = {
        address: cityName
      }
      geocoder.geocode(geocoderOptions,function(results,status){
        if (status === "OK") {
        var coords = {
          lat : results[0].geometry.location.lat(),
          lng : results[0].geometry.location.lng()
        }
        makeMap(coords);
        }else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      })
    }
  // Makes map depending on coordinates unless the parameter passed is "start"

  function makeMap(input){
    if (input == "start") {
      var mapElement = document.getElementById('map');
      var latLng = {
        lat: 29.447285,
        lng: -98.49166
      };
      var mapOptions = {
        zoom: 10,
        center: latLng
      };
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable:true
      });
      makeRequest(latLng)
      google.maps.event.addListener(marker, 'dragend', function (event) {
        latLng.lat = this.getPosition().lat();
        latLng.lng = this.getPosition().lng();
        makeRequest(latLng)
      });
    }else {
      var mapElement = document.getElementById('map');

      var mapOptions = {
        zoom: 10,
        center: input
      };
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: input,
        map: map,
        draggable:true
      });
      makeRequest(input)
      google.maps.event.addListener(marker, 'dragend', function (event) {
        input.lat = this.getPosition().lat();
        input.lng = this.getPosition().lng();
        makeRequest(input)
      });
    }
  }
  // Makes Request to Weather API then fires Weather Box function

  function makeRequest(latlng){
    console.log(latlng);
    var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {

      APPID: "8e5666d8c0efd6106c3db5998632d798",
      lat: latlng.lat,
      lon: latlng.lng,
      units: "imperial"
    });
    request.done(function(data){
      console.log(data);
      weatherBoxes(data);
    });
    request.fail(function(jqXhr, status, error){
      console.log(status);
      console.log(error);
    });
  }
  // Takes the data from the MakeRequest Function to generate boxes in html with weathter Data

  function weatherBoxes(weatherData){
    $('.zone').html(weatherData.city.name)

    for (var i = 0; i < 3; i++) {
      $('#day' + i).html(parseInt(weatherData.list[i].temp.max)+ "°/"+ parseInt(weatherData.list[i].temp.min)+ "°");
    };
    for (var i = 0; i < 3; i++) {
      $('#w' + i).html(weatherData.list[i].weather[0].main + ": " + weatherData.list[i].weather[0].description);
    };
    for (var i = 0; i < 3; i++) {
      $('#humidity' + i).html("Humidity: " + weatherData.list[i].humidity)
    };
    for (var i = 0; i < 3; i++) {
      $('#wind' + i).html("Wind: " + parseInt(weatherData.list[i].speed))
    };
    for (var i = 0; i < 3; i++) {
      $('#pressure' + i).html("Pressure: " + parseInt(weatherData.list[i].pressure))
    };
    for (var i = 0; i < 3; i++) {
      $('#icon' + i).html("<img src=http://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon +".png>" )
    }

  }
});
