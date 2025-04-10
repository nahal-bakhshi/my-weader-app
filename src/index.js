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
  let tempratureelement = Math.round(response.data.temperature.current);
  let currenttemperature = document.querySelector("#teperature");
  currenttemperature.innerHTML = tempratureelement;
  let conditionelement = response.data.condition.description;
  let currentcondition = document.querySelector("#condition");
  currentcondition.innerHTML = conditionelement;
  let nowdate = new Date();
  let currentdate = document.querySelector("#date");
  currentdate.innerHTML = formatdate(nowdate);
  let countryelement = response.data.country;
  let currentcountry = document.querySelector("#country");
  currentcountry.innerHTML = countryelement;
  let humidityelement = response.data.temperature.humidity;
  let currenthiumidity = document.querySelector("#humidity");
  currenthiumidity.innerHTML = `Humidity ${humidityelement}%`;
  let windelement = Math.round(response.data.wind.speed);
  let currentwind = document.querySelector("#wind");
  currentwind.innerHTML = ` Wind speed ${windelement}`;
  let iconelement = response.data.condition.icon_url;
  let currenticon = document.querySelector("#icon");

  console.log(iconelement);
}

function search(event) {
  event.preventDefault();
  let cityelement = document.querySelector("#search-city");
  let currentcity = document.querySelector("#city-name");
  currentcity.innerHTML = cityelement.value;
  let city = cityelement.value;
  let apikey = "51dca49dt4a130a3a0145dff90d8o3ba";
  let apiurl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiurl).then(detaildata);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", search);
