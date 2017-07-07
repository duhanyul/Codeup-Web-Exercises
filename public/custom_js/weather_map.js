// $(document).ready(function(){
  "use script"
    /************ Initialize the first Map ***********/
    makeMap("start");
    /*************** Handle the User clicks on nav bar ************/
    $('#search').click(searchBar);
    $('#forecast').click(function(){
      for (var i = 0; i < 7; i++) {
        $('#day' + i).show();
      }
    });
    $('#today').click(function(){
      for (var i = 1; i < 7; i++) {
        $('#day' + i).hide();
      }
    });
    $('#3day').click(function(){
      for (var i = 0; i < 3; i++) {
        $('#day' + i).show();
      }
      for (var i = 3; i < 7; i++) {
        $('#day' + i).hide();
      }
    });
    $('#5day').click(function(){
      for (var i = 0; i < 5; i++) {
        $('#day' + i).show();
      }
      for (var i = 5; i < 7; i++) {
        $('#day' + i).hide();
      }
    });
    console.log($('#day0').html());

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
      var infowindow
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
          marker.addListener('click',function(){
            var contentString = document.getElementById('day0').innerHTML
            infowindow = new google.maps.InfoWindow({
                content: contentString
              });
            infowindow.open(map,marker);
            
          });

      google.maps.event.addListener(marker, 'dragend', function (event) {
        infowindow.close();
        latLng.lat = this.getPosition().lat();
        latLng.lng = this.getPosition().lng();
        makeRequest(latLng)
      });
    }else {
      var infowindow
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
          marker.addListener('click',function(){
            var contentString = document.getElementById('day0').innerHTML
            infowindow = new google.maps.InfoWindow({
                content: contentString
              });
            infowindow.open(map,marker);

          });

      google.maps.event.addListener(marker, 'dragend', function (event) {
        infowindow.close();
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

    for (var i = 0; i < 7; i++) {
      $('#temps' + i).html(parseInt(weatherData.list[i].temp.max)+ "°/"+ parseInt(weatherData.list[i].temp.min)+ "°");
    };
    for (var i = 0; i < 7; i++) {
      $('#w' + i).html(weatherData.list[i].weather[0].main + ": " + weatherData.list[i].weather[0].description);
    };
    for (var i = 0; i < 7; i++) {
      $('#humidity' + i).html("Humidity: " + weatherData.list[i].humidity)
    };
    for (var i = 0; i < 7; i++) {
      $('#wind' + i).html("Wind: " + parseInt(weatherData.list[i].speed))
    };
    for (var i = 0; i < 7; i++) {
      $('#pressure' + i).html("Pressure: " + parseInt(weatherData.list[i].pressure))
    };
    for (var i = 0; i < 7; i++) {
      $('#icon' + i).html("<img src=http://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon +".png>" )
    }

  }
// });
