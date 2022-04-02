import ElementManager from './elementManager.js';
import animate from './animate.js';

export default class Time{
    constructor(secondsLbl, minutesLbl, hoursLbl, daysLbl){
        this.days = 13;
        this.hours = 23;
        this.minutes = 59;
        this.seconds = 59;
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
        this.currentElement = [this.s];

        if(this.seconds<0){            
            this.seconds=59;
            this.minutes--;
            this.currentElement = [this.m, this.s];
        }
        if(this.minutes===0 && this.seconds===0&&this.hours>0){
            this.hours--;
            this.minutes=59;
            this.seconds=59;
            this.currentElement = [this.h,this.m, this.s];
        }
        if(this.hours===0 && this.minutes===0 && this.seconds===0 && this.days>0){
            this.days--;
            this.hours=23;
            this.minutes=59;
            this.seconds=59;
            this.currentElement = [this.d,this.h,this.m, this.s];
        }else{
        }
    }
    start(){
        //init labels
        this.s.printTopNumber(this.printSeconds());
        this.m.printTopNumber(this.printMinutes());
        this.h.printTopNumber(this.printHours());
        this.d.printTopNumber(this.printDays());

        let timer = setInterval(()=>{
            this.run();
            //animate
            this.currentElement.forEach(element => animate(element))

            this.s.printCurrentNumber(this.printSeconds());
            this.m.printCurrentNumber(this.printMinutes());
            this.h.printCurrentNumber(this.printHours());
            this.d.printCurrentNumber(this.printDays());
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