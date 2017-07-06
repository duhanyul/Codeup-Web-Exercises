$(document).ready(function(){
  "use script"

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
