window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000;

let startLookTime = Number.POSITIVE_INFINITY;
// 0 is div that is looked at, 1 is whether or not gaze is on any box
let lookDiv = null;
let isLookingAtSomething = false;
var childDivs = document.getElementById('inv').getElementsByTagName('div');

webgazer.setGazeListener((data, timestamp) => {
    // restart loop if no tracking data
    isLookingAtSomething = false;
    if(data == null) return
    // create an array of all the sub-elements in the inventory game-board
    isLookingAtSomething = false;
    for( i=0; i < childDivs.length; i++ ) {
        // get dimensions for current div in loop
        var curDivRect = childDivs[i].getBoundingClientRect()
        if (isLookingAt(data, curDivRect)) {
            if (lookDiv != i) {

                startLookTime = timestamp;
            }
            isLookingAtSomething = true;
            lookDiv = i;
            childDivs[i].style.background="#555";
            console.log("deez" + i);
        }
        else childDivs[i].style.background="#444";
    }

    // if user isn't looking at any div elements, start look clock for "nothing"
    if (!isLookingAtSomething) {
        startLookTime = timestamp;
    }

    if (startLookTime + LOOK_DELAY < timestamp) {
        // if looking at an element, display info
        if (isLookingAtSomething) {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object ' 
            + lookDiv + ' lives here!';
        }
        // if looking at "nothing", turn off the overlay
        else if (!isLookingAtSomething) {
            overlayOff();
        }

        //startLookTime = Number.POSITIVE_INFINITY;
        lookDiv = null;
    }
}).begin()

function overlayOn() {
    console.log("on()");
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

function isLookingAt(data, divRect) {
    if (data.x > divRect.x && data.x < divRect.x + divRect.width && data.y > divRect.y && data.y < divRect.y + divRect.height) return true;
    return false;
}