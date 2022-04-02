import ElementManager from './elementManager.js';
import animate from './animate.js';

export default class Time{
    constructor(secondsLbl, minutesLbl, hoursLbl, daysLbl){
        this.days = 8;
        this.hours = 23;
        this.minutes = 59;
        this.seconds = 6;
        this.currentElement;
        this.secondsLbl = secondsLbl;
        this.minutesLbl = minutesLbl;
        this.hoursLbl = hoursLbl;
        this.daysLbl = daysLbl;

        this.s = new ElementManager(this.secondsLbl)
        this.m = new ElementManager(this.minutesLbl)
        this.h = new ElementManager(this.hoursLbl)
        this.d = new ElementManager(this.daysLbl)
    }
    run(){
        this.seconds--;
        this.currentElement = this.s;

        if(this.seconds<0){
            this.seconds=59;
            this.minutes--;
            this.currentElement = this.m;
        }
        if(this.minutes===0 && this.seconds===0&&this.hours>0){
            this.hours--;
            this.currentElement = this.h;
            this.minutes=59;
            this.seconds=59;
        }
        if(this.hours===0 && this.minutes===0 && this.seconds===0 && this.days>0){
            this.days--;
            this.currentElement = this.d;
            this.hours=23;
            this.minutes=59;
            this.seconds=59;
        }
    }
    start(){
        let timer = setInterval(()=>{
            this.run();
            animate(this.currentElement);
            this.s.printCurrentNumber(this.printSeconds());
            this.m.printCurrentNumber(this.printMinutes());
            this.h.printCurrentNumber(this.printHours());
            this.d.printCurrentNumber(this.printDays());
            console.log(this.currentElement)
            //animation
            if(this.days===0 && this.hours===0 && this.minutes ===0 && this.seconds===0){
                clearInterval(timer);
            }
        },1000);
    }
    printDays(){return this.days.toLocaleString('en-US', {minimumIntegerDigits: 2});}
    printHours(){return this.hours.toLocaleString('en-US', {minimumIntegerDigits: 2});}
    printMinutes(){return this.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2});}
    printSeconds(){return this.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2});}
}