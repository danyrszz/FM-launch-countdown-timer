import Time from './time.js'
const secondsLbl = document.querySelector("#seconds");
const minutesLbl = document.querySelector("#minutes");
const hoursLbl = document.querySelector("#hours");
const daysLbl = document.querySelector("#days");
const timer = new Time(daysLbl,hoursLbl,minutesLbl, secondsLbl);

timer.start()

setInterval(()=>{
    timer.currentElement.classList.toggle("animate")
},500)