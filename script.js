let button = document.getElementById("button");
let timerSeconds = document.getElementById("seconds"); //get timer object
let timerMinutes = document.getElementById("minutes"); //get timer object
let valueSec = parseInt(timerSeconds.innerHTML); //get text value
let valueMin = parseInt(timerMinutes.innerHTML);
let mess = document.getElementById("message");


/**
 * Bugs that need fixing
 * 1. pressing start button while timer is running
 * 2. when value is less than 10 still display the leading 0
 * 
 * New features
 * 1. add functionality for break time
 * 2. add customizability (edit work and break times)
 */

button.onclick = function () {
    mess.innerHTML = "Focus Time"
    let intrvl = setInterval(updateTimer, 1000);
    console.log("hi")

    let msElapsed = ((valueMin * 60) + valueSec) * 1000;
    console.log(msElapsed);
    setTimeout(function () {
        clearInterval(intrvl)
        let audio = new Audio('alarm.mp3');
        audio.play();
        mess.innerHTML = "Break Time"
    }, msElapsed);
}

function updateTimer() {
    console.log("!");
    if (valueSec == 0) {
        valueSec = 59;
        if (valueMin > 0) {
            valueMin = valueMin - 1;
        }
    } else {
        valueSec = valueSec - 1;
    }
    timerSeconds.innerHTML = valueSec; //decrement by 1
    timerMinutes.innerHTML = valueMin;
    console.log(timerSeconds.innerHTML)
}