$(document).ready(function(){
  "use script"
  makeMap();
  makeRequest();




  function makeMap(){
    var mapElement = document.getElementById('map');
    var latLng = {
      lat: 29.447285,
      lng: -98.49166
    };
    var mapOptions = {
      zoom: 15,
      center: latLng
    }
    var map = new google.maps.Map(mapElement, mapOptions);
    makeMarker(map,latLng);
  }
  function makeMarker(map,latLng){
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable:true
    });
  }




function makeRequest(){
  var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {

    APPID: "8e5666d8c0efd6106c3db5998632d798",
    q:     "San Antonio, TX",
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
function weatherBoxes(weatherData){

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
