const load_api = async (local) => {
  const api_response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?unitGroup=metric&key=S7FCBWVSXDJVDYZ4D8MQV2EYT&contentType=json`);
  if (api_response.status === 200) {
    const data = await api_response.json();
    return data;
  }
}
const main_container = document.querySelector(".main-container");
const temperature_min = document.getElementById("temperature-min");
const temperature = document.getElementById("temperature");
const temperature_max = document.getElementById("temperature-max");
const place = document.getElementById("place");
const description = document.getElementById("description");
const week_day = document.querySelectorAll("#week .week-content .day");
const week_temperature = document.querySelectorAll("#week .week-content .center .day-temperature");
const week_condition = document.querySelectorAll("#week .week-content .center .day-condition");

const show_data = async (local) => {
  const data = await load_api(local)

  temperature_min.textContent = "Min " + data.days[0].tempmin + "º";
  temperature.textContent = data.currentConditions.temp + "º";
  temperature_max.textContent = "Max " + data.days[0].tempmax + "º";
  place.textContent = data.address.toUpperCase();
  description.textContent = data.description;

  if (data.currentConditions.datetime > data.currentConditions.sunrise && data.currentConditions.datetime < data.currentConditions.sunset) {
    main_container.style.backgroundImage = "url(./assets/background-day.jpeg)";
  } else {
    main_container.style.backgroundImage = "url(./assets/background-endDay.jpeg)";
  }


  for (let i = 1; i < 8; i++) {
    let date = new Date(data.days[i].datetime);
    let day = date.toLocaleString('en-us', { weekday: 'long' });
    week_day[i - 1].textContent = day;
    week_temperature[i - 1].textContent = data.days[i].temp + "º";
    week_condition[i - 1].textContent = data.days[i].conditions;

  }
}

show_data("vila nova famalicão");
