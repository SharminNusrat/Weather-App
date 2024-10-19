const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        //console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector("#temp").innerText = Math.round(data.main.temp);
        document.querySelector("#humidity").innerText = data.main.humidity;
        document.querySelector("#wind").innerText = data.wind.speed;

        const weatherIcon = document.querySelector(".weather-icon");

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}