window.saveDataAcrossSessions = true

webgazer.setGazeListener((data, timestamp) => {
    // create an array of all the sub-elements in the inventory game-board
    var childDivs = document.getElementById('inv').getElementsByTagName('div');
    for( i=0; i< childDivs.length; i++ ) {
        var curDivRect = childDivs[i].getBoundingClientRect()
        // if gaze is within bounds of the current element, color should be lighter gray
        // and make a log to console
        if (data.x > curDivRect.x && data.x < curDivRect.x + curDivRect.width
            && data.y > curDivRect.y && data.y < curDivRect.y + curDivRect.height) {
            childDivs[i].style.background="#555"
            console.log("deez" + i);
        }
        // if not looking at element, color should be darker gray
        else {
            childDivs[i].style.background="#444"
        }
    }
}).begin()