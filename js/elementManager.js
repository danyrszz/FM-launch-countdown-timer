export default class ElementManager{
    constructor(element){
        this.element = element;
    }
    printCurrentNumber(number){
        this.getBottomBack().textContent = (number).toLocaleString('en-US', {minimumIntegerDigits: 2});
        this.getTopBack().textContent = (number).toLocaleString('en-US', {minimumIntegerDigits: 2});
    }
    printTopNumber(number){
        this.getTop().textContent = number;
        this.getBottom().textContent = number;
    }
    getTop(){
        return this.element.querySelector(".top")
    }
    getBottom(){
        return this.element.querySelector(".bottom")
    }
    getTopBack(){
        return this.element.querySelector(".top-back")
    }
    getBottomBack(){
        return this.element.querySelector(".bottom-back")
    }
}