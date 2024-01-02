let apiKey = "f0c81e2787ad630b98c470df61165ef3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy_info");
let windInfo = document.getElementById("wind_info");
let weatherImage = document.querySelector(".weather_img");

// async function getweatherData(){
//     city = userCity.value;
//     console.log(city);
//     let response = await fetch(
//       `https://https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     );
//     let data = await response.json();
//     console.log(data);
//     ct.innerHTML = data.name;
//     temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
//     humidity.innerHTML = data.main.humidity + "%";
//     windInfo.innerHTML = data.wind.speed+"km/h";
// }



async function getweatherData() {
    if (userCity.value == ""); {
        alert("ENETR A CITY NAME");
    } 
     else {
        city = userCity.value;
        let response = await fetch(
            `https://https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        let data = await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";s
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value = "";
        // if (data.weather[0].main == "Clear") {
        //     weatherImage.src = "Clear.png";
        // } else if (data.weather[0].main == "Snow") {
        //     weatherImage.src = "Snow.png";
        // } else if (data.weather[0].main == "Clouds") {
        //     weatherImage.src = "Clouds.png";
        // } else if (data.weather[0].main == "Drizzle") {
        //     weatherImage.src = "Drizzle.png";
        // } else if (data.weather[0].main == "Mist") {
        //     weatherImage.src = "Mist.png";
        // } else if (data.weather[0].main == "Rain") {
        //     weatherImage.src = "Rain.png";
        // }
        console.log(data);
    }

}

