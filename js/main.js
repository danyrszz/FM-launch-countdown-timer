import Time from './time.js';

const secondsLbl = document.querySelector("#seconds");
const minutesLbl = document.querySelector("#minutes");
const hoursLbl = document.querySelector("#hours");
const daysLbl = document.querySelector("#days");

const timer = new Time(secondsLbl, minutesLbl, hoursLbl, daysLbl);
timer.start();