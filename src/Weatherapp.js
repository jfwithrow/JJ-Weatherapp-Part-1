//Current Date
let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let nowDay = days[date.getDay()];
let nowHour = date.getHours();
let nowMinutes = date.getMinutes();

let moment = document.getElementById("moment");
moment.innerHTML = `${nowDay} ${nowHour}: ${nowMinutes}`;

//City
function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#right-now").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#feel-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "ded3e7c16686147e3f17fde35f693c3f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Celcius and Farenheight Change
function seeFarenheight(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 86;
}

let farenheightLink = document.querySelector("#changef");
farenheightLink.addEventListener("click", seeFarenheight);

function seeCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 30;
}

let celciusLink = document.querySelector("#changec");
celciusLink.addEventListener("click", seeCelcius);
