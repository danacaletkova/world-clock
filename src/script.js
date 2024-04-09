function updateTime() {
  let localTimeZone = moment.tz.guess();
  let localCityName = localTimeZone.replace("_", " ").split("/")[1];
  let localDate = moment().tz(localTimeZone).format("Do MMMM yyyy");
  let localTime = moment()
    .tz(localTimeZone)
    .format("h:mm:ss [<small>] A [</small>]");

  let cityElement = document.querySelector("#city-name");
  let dateElement = document.querySelector("#city-date");
  let timeElement = document.querySelector("#city-time");

  cityElement.innerHTML = localCityName;
  dateElement.innerHTML = localDate;
  timeElement.innerHTML = localTime;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let displayedCitiesElement = document.querySelector("#displayed-cities");
  displayedCitiesElement.innerHTML += `          
    <div class="city">
      <div class="left">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM yyyy")}</div>
      </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format(" A ")}</small></div>
    </div>`;
}

let citySelectElement = document.querySelector("#select-cities");
citySelectElement.addEventListener("change", updateCity);
