window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000;

let lookBox = null;
let startLookTime = Number.POSITIVE_INFINITY;

webgazer.setGazeListener((data, timestamp) => {
    if (data === null) return;
    var game_top = document.getElementById("game").getBoundingClientRect().top + window.pageYOffset - document.getElementById("game").ownerDocument.documentElement.clientTop;
    var game_bot = document.getElementById("game").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("game").ownerDocument.documentElement.clientTop);
    var game_left = document.getElementById("game").getBoundingClientRect().left + window.pageXOffset - document.getElementById("game").ownerDocument.documentElement.clientLeft;
    var game_right = document.getElementById("game").getBoundingClientRect().right + window.pageXOffset - document.getElementById("game").ownerDocument.documentElement.clientLeft;

    var exit_top = document.getElementById("exit").getBoundingClientRect().top + window.pageYOffset - document.getElementById("exit").ownerDocument.documentElement.clientTop;
    var exit_bot = document.getElementById("exit").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("exit").ownerDocument.documentElement.clientTop);
    var exit_left = document.getElementById("exit").getBoundingClientRect().left + window.pageXOffset - document.getElementById("exit").ownerDocument.documentElement.clientLeft;
    var exit_right = document.getElementById("exit").getBoundingClientRect().right + window.pageXOffset - document.getElementById("exit").ownerDocument.documentElement.clientLeft;

    if((data.y > game_top && data.y < game_bot) && (data.x > game_left && data.x < game_right) && lookBox !== "game") {
        startLookTime = timestamp;
        lookBox = "game";
    } else if ((data.y > exit_top && data.y < exit_bot) && (data.x > exit_left && data.x < exit_right) && lookBox != "exit"){
        startLookTime = timestamp;
        lookBox = "exit";
    }
    else if(data.x <= game_bot.left || data.x >= game_right){
        startLookTime = Number.POSITIVE_INFINITY;
        lookBox = null;
    }

    if(startLookTime + LOOK_DELAY < timestamp) {
        console.log("Look long enough: ");
        if(lookBox === "game") {
            // overlayOn();
            clickGame();
        } else if (lookBox === "exit") {
            clickExit();
        }
        
    }



}).begin()

var selectedSetting = 'game';

function clickGame() {
    this.selectedSetting = 'game'
    window.location.replace("inventory.html");
}

function clickExit() {
    this.selectedSetting = 'exit';
    window.location.replace("exit.html");
}