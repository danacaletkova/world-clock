//Initially displayed cities

function updateData() {
  //Brno
  let brnoElement = document.querySelector("#brno");
  let brnoDateElement = brnoElement.querySelector(".date");
  let brnoTimeElement = brnoElement.querySelector(".time");

  let brnoDate = moment().tz("Europe/Prague").format("Do MMMM yyyy");
  let brnoTime = moment()
    .tz("Europe/Prague")
    .format("h:mm:ss [<small>] A [</small>]");

  brnoDateElement.innerHTML = brnoDate;
  brnoTimeElement.innerHTML = brnoTime;

  //Perth
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");

  let perthDate = moment().tz("Australia/Perth").format("Do MMMM yyyy");
  let perthTime = moment()
    .tz("Australia/Perth")
    .format("h:mm:ss [<small>] A [</small>]");

  perthDateElement.innerHTML = perthDate;
  perthTimeElement.innerHTML = perthTime;
}

updateData();
setInterval(updateData, 1000);

//Added cities

function addCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let displayedCitiesElement = document.querySelector("#displayed-cities");
  displayedCitiesElement.innerHTML += `          
    <div class="city">
      <div class="left">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM yyyy")}</div>
      </div>
        <div class="time">${cityTime.format("h:mm")} 
        <small>${cityTime.format(" A ")}</small></div>
    </div>`;
}

let citySelectElement = document.querySelector("#select-cities");
citySelectElement.addEventListener("change", addCity);
