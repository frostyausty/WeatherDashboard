var key = "2ad6786df1447b809884ecabeea4490a";
var cityFormEl = document.querySelector("#searchBar");
var cityInputEl = document.querySelector("#city");
var searchButtonEl = document.querySelector("#button");

var cityNameEl = document.querySelector("#searchedCity");
var weatherDateEl = document.querySelector("#searchedDate");
var weatherIconEl = document.querySelector("#searchedIcon");
var currentTempEl = document.querySelector("#p1");
var currentHumidtyEl = document.querySelector("#p2");
var currentWindEl = document.querySelector("#p3");


var getCityWeather = function(city) {
    var apiUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {

               var cityName = data.name;
               cityNameEl.textContent= cityName;
               console.log(cityName);

               var currentDate = data.dt;
               weatherDateEl.textContent=currentDate;
               console.log(currentDate);

            //    var weatherIcon = data.weather.icon;
            //    weatherIconEl.appendChild(weatherIcon);

               var currentTemp = data.main.temp;
               currentTempEl.textContent=currentTemp;
               console.log(currentTemp);

               var humidity = data.main.humidity;
               currentHumidtyEl.textContent=humidity;
               console.log(humidity);

               var windSpeed = data.wind.speed;
               currentWindEl.textContent=windSpeed;
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
    
