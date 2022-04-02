import Time from './time.js';

const secondsLbl = document.querySelector("#seconds");
const minutesLbl = document.querySelector("#minutes");
const hoursLbl = document.querySelector("#hours");
const daysLbl = document.querySelector("#days");

const timer = new Time(secondsLbl, minutesLbl, hoursLbl, daysLbl);
timer.start();






// const top = document.querySelector(".top");
// const bottom = document.querySelector(".bottom");

// const topBack = document.querySelector(".top-back");
// const bottomBack = document.querySelector(".bottom-back");

// setInterval(() => {

//     let flag = false;
//     top.style.transform = "perspective(500px) rotatex(-90deg)";
//     bottom.style.transform = "perspective(500px) rotatex(-90deg)";
//     bottom.style.transition = "transform .2s linear 0.2s"
//     top.style.transition = "transform .2s linear"
//     let s = setInterval(() => {
//         flag=true;
//         top.style.transform = "perspective(500px) rotatex(0deg)";
//         top.style.transition = "transform 0s "
//         bottom.style.transform = "perspective(500px) rotatex(0deg)";
//         bottom.style.transition = "transform 0s "
//         if(flag){ clearInterval(s); }
//     }, 800);

// }, 1000);