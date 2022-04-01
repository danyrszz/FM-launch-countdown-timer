export default class Time{
    constructor(daysLbl, hoursLbl, minutesLbl, secondsLbl){
        this.days = 8;
        this.hours = 23;
        this.minutes = 59;
        this.seconds = 59;
        this.daysLbl = daysLbl;
        this.hoursLbl = hoursLbl;
        this.minutesLbl = minutesLbl;
        this.secondsLbl = secondsLbl;
        this.currentElement;
    }
    run(){
        this.seconds--;
        this.currentElement = this.secondsLbl;

        if(this.seconds<0){
            this.seconds=59;
            this.minutes--;
            this.currentElement = this.minutesLbl;
        }
        if(this.minutes===0 && this.seconds===0&&this.hours>0){
            this.hours--;
            this.currentElement = this.hoursLbl;
            this.minutes=59;
            this.seconds=59;
        }
        if(this.hours===0 && this.minutes===0 && this.seconds===0 && this.days>0){
            this.days--;
            this.currentElement = this.daysLbl;
            this.hours=23;
            this.minutes=59;
            this.seconds=59;
        }
    }
    start(){
        let timer = setInterval(()=>{
            this.run();
            console.log(this.currentElement)
            this.secondsLbl.textContent = this.printSeconds();
            this.minutesLbl.textContent = this.printMinutes();
            this.hoursLbl.textContent = this.printHours();
            this.daysLbl.textContent = this.printDays();
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