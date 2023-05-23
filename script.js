let button = document.getElementById("button");
let timerSeconds = document.getElementById("seconds"); //get timer object
let timerMinutes = document.getElementById("minutes"); //get timer object
let valueSec = parseInt(timerSeconds.innerHTML); //get text value
let valueMin = parseInt(timerMinutes.innerHTML);
let mess = document.getElementById("message");

let timerRunning = 0;

/**
 * Bugs that need fixing
 * 1. when value is less than 10 still display the leading 0
 * 
 * New features
 * 1. add functionality for break time
 * 2. add customizability (edit work and break times)
 */

button.onclick = function () {
    button.disabled = true;
    timerRunning = 1;
    let intrvl = setInterval(updateTimer, 1000);
    console.log("hi")

    let msElapsed = ((valueMin * 60) + valueSec) * 1000;
    console.log(msElapsed);
    setTimeout(function () {
        button.disabled = false;
        timerRunning = 0;
        clearInterval(intrvl)
        let audio = new Audio('alarm.mp3');
        audio.play();
        if (mess.innerHTML == "Focus Time") {
            mess.innerHTML = "Break Time"
            timerMinutes.innerHTML = "5";
            timerSeconds.innerHTML = "00";
            valueMin = 5;
            valueSec = 0;
        } else if (mess.innerHTML == "Break Time") {
            mess.innerHTML = "Focus Time"
            timerMinutes.innerHTML = "25";
            timerSeconds.innerHTML = "00";
            valueMin = 25;
            valueSec = 0;
        }
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