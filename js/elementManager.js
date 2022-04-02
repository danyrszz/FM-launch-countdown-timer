export default class ElementManager{
    constructor(element){
        this.element = element;
    }
    printCurrentNumber(number){
        this.getTop().textContent = number;
        this.getBottom().textContent = number;
        //check if number is less than 0
        this.getBottomBack().textContent = (number-1).toLocaleString('en-US', {minimumIntegerDigits: 2});
        this.getTopBack().textContent = (number-1).toLocaleString('en-US', {minimumIntegerDigits: 2});
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