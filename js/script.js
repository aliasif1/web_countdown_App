const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
var newYearDate = new Date("1 January, 2023");

function update(){
    let currentDate = new Date();
    let days = (parseInt((newYearDate - currentDate) / (1000 * 60 * 60 * 24))).toString();
    let hours = (parseInt(Math.abs(newYearDate - currentDate) / (1000 * 60 * 60) % 24)).toString();
    let minutes = (parseInt(Math.abs(newYearDate.getTime() - currentDate.getTime()) / (1000 * 60) % 60)).toString();
    let seconds = (parseInt(Math.abs(newYearDate.getTime() - currentDate.getTime()) / (1000) % 60)).toString(); 
    daysElement.innerHTML = days
    hoursElement.innerHTML = hours.length == 2 ? hours: `0${hours}`;
    minutesElement.innerHTML = minutes.length == 2 ? minutes: `0${minutes}`;;
    secondsElement.innerHTML = seconds.length == 2 ? seconds: `0${seconds}`;;
}

update();
setInterval(update, 1000);
