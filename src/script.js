// function updateTime() {
//   //Perth
//   let perth = document.querySelector("#perth");
//   let perthDate = perth.querySelector(".date");
//   let perthTime = perth.querySelector(".time");

//   perthDate.innerHTML = moment().tz("Australia/Perth").format("Do MMMM yyyy");
//   perthTime.innerHTML = moment()
//     .tz("Australia/Perth")
//     .format("h:mm:ss [<small>] A [</small>]");

//   //Brno
//   let brno = document.querySelector("#brno");
//   let brnoDate = brno.querySelector(".date");
//   let brnoTime = brno.querySelector(".time");

//   brnoDate.innerHTML = moment().tz("Europe/Prague").format("Do MMMM yyyy");
//   brnoTime.innerHTML = moment()
//     .tz("Europe/Prague")
//     .format("h:mm:ss [<small>] A [</small>]");
// }

// updateTime();
// setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let displayedCitiesElement = document.querySelector("#displayed-cities");
  displayedCitiesElement.innerHTML = `          
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
