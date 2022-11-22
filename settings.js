window.saveDataAcrossSessions = true

const LOOK_DELAY = 10000;

let lookBox = null;
let startLookTime = Number.POSITIVE_INFINITY;

webgazer.setGazeListener((data, timestamp) => {
    if (data === null) return;
    var game_top = document.getElementById("game").getBoundingClientRect().top + window.pageYOffset - document.getElementById("game").ownerDocument.documentElement.clientTop;
    var game_bot = document.getElementById("game").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("game").ownerDocument.documentElement.clientTop);
    var game_left = document.getElementById("game").getBoundingClientRect().left + window.pageXOffset - document.getElementById("game").ownerDocument.documentElement.clientLeft;
    var game_right = document.getElementById("game").getBoundingClientRect().right + window.pageXOffset - document.getElementById("game").ownerDocument.documentElement.clientLeft;

    if((data.y > game_top && data.y < game_bot) && (data.x > game_left && data.x < game_right) && lookBox !== "game") {
        startLookTime = timestamp;
        lookBox = "game";

    }

    if(startLookTime + LOOK_DELAY < timestamp) {
        console.log("Look long enough: ");
        if(lookBox === "game") {
            // overlayOn();
            clickGame();
        } 
        
    }



}).begin()

var selectedSetting = 'game';

function clickGame() {
    this.selectedSetting = 'game'
    window.location.replace("inventory.html");
    console.log(selectedSetting);
}

function clickAudio() {
    selectedSetting = 'audio';
    console.log(selectedSetting);
}

function clickGraphics() {
    selectedSetting = 'graphics';
    console.log(selectedSetting);
}