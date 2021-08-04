const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const fecha = document.querySelector('.fecha');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h3');

let futureDate = new Date(2021,7,14,8,0,0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();

fecha.textContent = `Our newest store opens in Spain on ${month} ${year}, ${day}, at ${hour}:00 am.`;

/* GET MILISECONDS */
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;
    let remainingDays = t/oneDay;
    remainingDays = Math.floor(remainingDays);
    let remainingHours = Math.floor((t % oneDay)/oneHour);
    let remainingMinutes = Math.floor((t % oneHour)/oneMinute);
    let remainingSeconds = Math.floor((t % oneMinute)/oneSecond);

    const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];

    items.forEach(function(item,index){
        item.innerHTML = values[index];
    })   
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();



// VARIABLES
const mainButton = document.querySelector(".mainButton");
const success = document.querySelector(".success");

mainButton.addEventListener("click", function() { // AGREGA EVENT LISTENER A CADA BOTON
  console.log("click")
    success.classList.remove("hidden"); 
});

let closingWindow = function () { // See cheatsheets: DRY Function 1
    success.classList.add("hidden"); 
  }

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    // IF e.key = "ESCAPE" AND (NOT) MODAL CONTAINS CLASS "HIDDEN" { THEN
    if (e.key === "Escape" && !success.classList.contains("hidden")) {
      closingWindow();
    } 
});