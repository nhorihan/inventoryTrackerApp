// retain webgazer training data
window.saveDataAcrossSessions = true

// How long does someone need to look at an element before it's considered selected
const LOOK_DELAY = 1000;
// How long should the overlay remain on the screen
const OVERLAY_DELAY = 2000;

let startLookTime = Number.POSITIVE_INFINITY;
let startOverlayTime = Number.POSITIVE_INFINITY;
let lookDiv = null;
let isLookingAtSomething = false;
var childDivs = document.getElementById('board').getElementsByTagName('div');
console.log(childDivs)

webgazer.setGazeListener((data, timestamp) => {
    // restart loop if no tracking data
    if(data == null) return
    isLookingAtSomething = false;
    for( i=0; i < childDivs.length ; i++ ) {
        // get dimensions for current div in loop
        var curDivRect = childDivs[i].getBoundingClientRect()
        // if looking at an element, change color, mark it as looked at, and mark looking at something
        if (isLookingAt(data, curDivRect)) {
            // if it's the first "frame" looking at an element, restart the selection timer
            if (lookDiv != i) {
                startLookTime = timestamp;
            }
            isLookingAtSomething = true;
            lookDiv = i;
            childDivs[i].style.background="#555";
        }
        // if this element isn't being looked at, make sure it's the correct color
        else childDivs[i].style.background="#444";
    }

    // if user is looking at something and the selection timer is up, bring up the overlay
    if (isLookingAtSomething && startLookTime + LOOK_DELAY < timestamp) {
        if (lookDiv === 0){
            window.location.replace('settings.html');
        } else if (lookDiv === 1){
            window.location.replace('map.html');
        } else if (lookDiv === 2){
            window.location.replace('help.html');
        }else {
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object ' 
            + lookDiv + ' lives here!';
            overlayOn();
            // begin the overlay timer
            startOverlayTime = timestamp;
        }
    }

    // if the overlay timer is up, turn off the overlay
    if (startOverlayTime + OVERLAY_DELAY < timestamp) {
        overlayOff();
        startOverlayTime = Number.POSITIVE_INFINITY;
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