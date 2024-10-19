import './style.css'
import { checkWeather } from './checkWeather.js'

document.querySelector('#app').innerHTML = `
  <div class="card">
      <div class="search">
          <input type="text" placeholder="Enter city name" spellcheck="false">
          <button><img src="assets/search.png" alt=""></button>
      </div>
      <div class="error">
          <p>Invalid City Name</p>
      </div>
      <div class="weather">
          <img src="assets/mist.png" class="weather-icon">
          <h1><span id="temp">22</span>°C</h1>
          <h2 class="city">New York</h2>
          <div class="details">
              <div class="col">
                  <img src="assets/humidity.png">
                  <div>
                      <p><span id="humidity">50</span>%</p>
                      <p>Humidity</p>
                  </div>
              </div>
              <div class="col">
                  <img src="assets/wind.png">
                  <div>
                      <p><span id="wind">18</span> Km/h</p>
                      <p>Wind Speed</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});