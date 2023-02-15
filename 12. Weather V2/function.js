const load_api = async (local) => {
  const api_response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?unitGroup=metric&key=S7FCBWVSXDJVDYZ4D8MQV2EYT&contentType=json`);
  if (api_response.status === 200) {
    const data = await api_response.json();
    return data;
  }
}

const city = document.querySelector(".city-name");
const precipitation = document.getElementById("changeOfRain");
const temperature = document.querySelector(".real-temperature");
const icon_temperature = document.querySelector(".icon-temperature");
const forecast_day_hour = document.querySelectorAll(".forecast .forecast-day .forecast-day-temperature");
const forecast_day_icon = document.querySelectorAll(".forecast .forecast-day .forecast-day-icon");
const wind_value = document.querySelector(".wind-value");
const uv_index_value = document.querySelector(".uv-index-value");
const extra_day_name = document.querySelectorAll(".extra-days .days .day .day-name");
const extra_day_icon = document.querySelectorAll(".extra-days .days .day .icon-description .icon-description-icon");
const extra_day_description = document.querySelectorAll(".extra-days .days .day .icon-description .icon-description-description");
const extra_day_tempMinMax = document.querySelectorAll(".extra-days .days .day .temp-minmax");



const show_data = async (local) => {
  const data = await load_api(local)
  city.textContent = data.address;
  precipitation.textContent = data.currentConditions.precipprob;
  temperature.textContent = data.currentConditions.temp + "º";
  weather_icon(icon_temperature, data.currentConditions.icon);


  let tempNumber = 6;
  for (let i = 0; i < forecast_day_hour.length; i++) {
    forecast_day_hour[i].textContent = data.days[0].hours[tempNumber].temp;
    weather_icon(forecast_day_icon[i], data.days[0].hours[tempNumber].icon);
    tempNumber += 3;
  }
  wind_value.textContent = data.currentConditions.windspeed + " km/h";
  uv_index_value.textContent = data.currentConditions.uvindex;

  for (let i = 1; i < 7; i++) {
    let date = new Date(data.days[i].datetime);
    let day = date.toLocaleString('en-us', { weekday: 'long' });
    extra_day_name[i].textContent = day;
  }

  for (let i = 0; i < extra_day_icon.length; i++) {
    weather_icon(extra_day_icon[i], data.days[i + 1].hours[i].icon);
  }

  for (let i = 0; i < extra_day_description.length; i++) {
    extra_day_description[i].textContent = data.days[i].conditions;
  }
  for (let i = 0; i < extra_day_tempMinMax.length; i++) {
    extra_day_tempMinMax[i].textContent = data.days[i].tempmin + "º / " + data.days[i].tempmax + "º";
  }


  console.log(data);
}

show_data("vila nova famalicão");


function weather_icon(destination, data) {
  destination.style.backgroundImage = "url(./assets/" + data + ".svg)";
}
