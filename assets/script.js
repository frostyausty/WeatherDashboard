var key = "2ad6786df1447b809884ecabeea4490a";
var cityFormEl = document.querySelector("#searchBar");
var cityInputEl = document.querySelector("#city");
var searchButtonEl = document.querySelector("#button");


var getCityWeather = function(city) {
    var apiUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {

               var cityName = data.name;
               console.log(cityName);

               var currentDate = data.dt;
               console.log(currentDate);

               var weatherIcon = data.weather.icon;
               console.log(weatherIcon);

               var currentTemp = data.main.temp;
               console.log(currentTemp);

               var humidity = data.main.humidity;
               console.log(humidity + "%");

               var windSpeed = data.wind.speed;
               console.log(windSpeed);

            });
        };

    });
};
 

var cityWeather = function(event) {
    event.preventDefault();
    var userInput = cityInputEl.value.trim(); 
    
    if(userInput) {
        getCityWeather(userInput);
        cityInputEl.value="";
    } else {
        alert("No weather data available for that city!")
    }
};
searchButtonEl.addEventListener("click", cityWeather);
    
