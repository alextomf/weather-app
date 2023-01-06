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
function searchCityButton(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchCity");
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${searchCity.value}`;
}

// let newCity = document.querySelector("#search-city-form");
// newCity.addEventListener("submit", searchCityButton);
let newCity = document.querySelector("#search-city-btn");
newCity.addEventListener("click", searchCityButton);

//unit bonus

function convertToCels(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 22;
  // temperature.innerHTML = Math.round((temperature -32) * (5 / 9));
}

function convertToFahr(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 72;
  // temperature.innerHTML = Math.round(temperature * 1.8 + 32);
}

let celsTemp = document.querySelector("#temp-Celsius");
celsTemp.addEventListener("click", convertToCels);

let fahrTemp = document.querySelector("#temp-Fahrenheit");
fahrTemp.addEventListener("click", convertToFahr);
