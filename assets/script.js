var key = "2ad6786df1447b809884ecabeea4490a";
var city="Madison";


fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Madison&units=imperial&appid=2ad6786df1447b809884ecabeea4490a'
    )
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // var userInput = document.querySelector("#");
                 //console.log(userInput);

                var currentTemp = data.main.temp;
                console.log(currentTemp);

                var humidity = data.main.humidity;
                console.log(humidity + "%");

                var windSpeed = data.wind.speed;
                console.log(windSpeed);

               // var uvIndex = ;


            });
        };

    })
