function updateTime() {
  //Perth
  let perth = document.querySelector("#perth");
  let perthDate = perth.querySelector(".date");
  let perthTime = perth.querySelector(".time");

  perthDate.innerHTML = moment().tz("Australia/Perth").format("Do MMMM yyyy");
  perthTime.innerHTML = moment()
    .tz("Australia/Perth")
    .format("h:mm:ss [<small>] A [</small>]");

  //Brno
  let brno = document.querySelector("#brno");
  let brnoDate = brno.querySelector(".date");
  let brnoTime = brno.querySelector(".time");

  brnoDate.innerHTML = moment().tz("Europe/Prague").format("Do MMMM yyyy");
  brnoTime.innerHTML = moment()
    .tz("Europe/Prague")
    .format("h:mm:ss [<small>] A [</small>]");
}

setInterval(updateTime, 1000);
