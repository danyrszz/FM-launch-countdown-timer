
function animate(element){
    let flag = false;
    element.getTop().style.transform = "perspective(500px) rotatex(-90deg)";
    element.getBottom().style.transform = "perspective(500px) rotatex(-90deg)";
    element.getBottom().style.transition = "transform .2s linear 0.2s"
    element.getTop().style.transition = "transform .2s linear"
    let s = setInterval(() => {
        flag=true;
        //fix the number comeback in the animation making top and bottom its value -1
        element.getTop().textContent = element.getTopBack().textContent;
        element.getBottom().textContent = element.getBottomBack().textContent;

        //then bring back top and bottom without the animation to start over again
        element.getTop().style.transform = "perspective(500px) rotatex(0deg)";
        element.getTop().style.transition = "transform 0s "
        element.getBottom().style.transform = "perspective(500px) rotatex(0deg)";
        element.getBottom().style.transition = "transform 0s "
        if(flag){ clearInterval(s); }
    }, 900);
}

export default animate;