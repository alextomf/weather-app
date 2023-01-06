//homework week4
//Current Date

let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
// let minute = String(currentTime.getMinutes()).padStart(2, 0);
// let month = months[currentTime.getMonth()];
// let date = currentTime.getDate();
let day = days[currentTime.getDay()];

if (hour < 10) {
  hour = `0${hour}`;
}

if (minute < 10) {
  minute = `0${minute}`;
}

let actualDate = document.querySelector("#currentDate");
actualDate.innerHTML = `${day} ${hour}:${minute}`;

//search and change a city
function searchCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchCity.value;
  findCity(searchCity.value);
}

let newCity = document.querySelector("#search-city-form");
newCity.addEventListener("submit", searchCity);
// let newCity = document.querySelector("#search-city-btn");
// newCity.addEventListener("click", searchCity);

//homework week5

function findCity(city) {
  let apiKey = "41f9f6ba4afb61d172bc15ed2c8d65a6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  console.log(apiUrl);
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureCity = document.querySelector("#temperature");
  temperatureCity.innerHTML = `${temperature}`;
  document.querySelector("#current-city").innerHTML = response.data.name;
  let feelsLike = document.querySelector("#feels-like");
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = Math.round(response.data.main.pressure);
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

//location

function getCoordinates(location) {
  let apiKey = "41f9f6ba4afb61d172bc15ed2c8d65a6";
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
}

let currentButton = document.querySelector("#current-location-btn");
currentButton.addEventListener("click", getCurrentLocation);

findCity("Vigo");