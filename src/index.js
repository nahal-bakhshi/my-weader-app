function formatdate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayelement = days[date.getDay()];
  let currentday = document.querySelector("#day");
  currentday.innerHTML = dayelement;
  let month = [
    "January",
    "Februry",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];
  let monthelement = month[date.getMonth()];
  let dateelement = date.getDate();
  let yearelement = date.getFullYear();
  return `${monthelement} ${dateelement},  ${yearelement}`;
}

function detaildata(response) {
  let currenttemperature = document.querySelector("#teperature");
  let currentcondition = document.querySelector("#condition");
  let nowdate = new Date();
  let currentdate = document.querySelector("#date");
  let currentcountry = document.querySelector("#country");
  let currenthiumidity = document.querySelector("#humidity");
  let currentwind = document.querySelector("#wind");

  currenttemperature.innerHTML = Math.round(response.data.temperature.current);
  currentcondition.innerHTML = response.data.condition.description;
  currentdate.innerHTML = formatdate(nowdate);
  currentcountry.innerHTML = response.data.country;
  currenthiumidity.innerHTML = `Humidity ${response.data.temperature.humidity}%`;
  currentwind.innerHTML = `Wind speed ${Math.round(
    response.data.wind.speed
  )} Km/h`;
  console.log(response);
}

function searchcity(city) {
  let apikey = "51dca49dt4a130a3a0145dff90d8o3ba";
  let apiurl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiurl).then(detaildata);
}

function searchsubmit(event) {
  event.preventDefault();
  let cityelement = document.querySelector("#search-city");
  let currentcity = document.querySelector("#city-name");
  currentcity.innerHTML = cityelement.value;
  searchcity(cityelement.value);
}
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", searchsubmit);
searchcity("Paris");
