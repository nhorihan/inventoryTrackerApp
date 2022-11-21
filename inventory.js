window.saveDataAcrossSessions = true

const LOOK_DELAY = 250;

let startLookTime = Number.POSITIVE_INFINITY;

webgazer.setGazeListener((data, timestamp) => {
    // restart loop if no tracking data
    if(data == null) return
    // create an array of all the sub-elements in the inventory game-board
    var childDivs = document.getElementById('inv').getElementsByTagName('div');
    var lookDiv
    for( i=0; i < childDivs.length; i++ ) {
        var curDivRect = childDivs[i].getBoundingClientRect()
        // if gaze is within bounds of the current element, color should be lighter gray
        // and make a log to console
        if (data.x > curDivRect.x && data.x < curDivRect.x + curDivRect.width
            && data.y > curDivRect.y && data.y < curDivRect.y + curDivRect.height) {
            startLookTime = timestamp;
            lookDiv = i
            childDivs[i].style.background="#555";
            console.log("deez" + i);
        }
        // if not looking at element, color should be darker gray
        else {
            childDivs[i].style.background="#444";
            startLookTime = Number.POSITIVE_INFINITY
        }
    }

    if (startLookTime + LOOK_DELAY < timestamp) {
        overlayOn();
        document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object ' 
        + lookDiv + ' 1 lives here!';
    }
    //else overlayOff();
}).begin()

function overlayOn() {
    console.log("on()");
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}