/*
THIS SCRIPT IS DEPRECATED, SEE INVENTORY.JS
*/

window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000;

let lookBox = null;
let startLookTime = Number.POSITIVE_INFINITY;

webgazer.setGazeListener((data, timestamp) => {
    if(data == null) return
    var box1_top = document.getElementById("box1").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box1").ownerDocument.documentElement.clientTop;
    var box1_bot = document.getElementById("box1").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box1").ownerDocument.documentElement.clientTop);
    var box1_left = document.getElementById("box1").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box1").ownerDocument.documentElement.clientLeft;
    var box1_right = document.getElementById("box1").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box1").ownerDocument.documentElement.clientLeft;

    var box2_top = document.getElementById("box2").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box2").ownerDocument.documentElement.clientTop;
    var box2_bot = document.getElementById("box2").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box2").ownerDocument.documentElement.clientTop);
    var box2_left = document.getElementById("box2").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box2").ownerDocument.documentElement.clientLeft;
    var box2_right = document.getElementById("box2").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box2").ownerDocument.documentElement.clientLeft;

    var box3_top = document.getElementById("box3").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box3").ownerDocument.documentElement.clientTop;
    var box3_bot = document.getElementById("box3").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box3").ownerDocument.documentElement.clientTop);
    var box3_left = document.getElementById("box3").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box3").ownerDocument.documentElement.clientLeft;
    var box3_right = document.getElementById("box3").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box3").ownerDocument.documentElement.clientLeft;

    var box4_top = document.getElementById("box4").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box4").ownerDocument.documentElement.clientTop;
    var box4_bot = document.getElementById("box4").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box4").ownerDocument.documentElement.clientTop);
    var box4_left = document.getElementById("box4").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box4").ownerDocument.documentElement.clientLeft;
    var box4_right = document.getElementById("box4").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box4").ownerDocument.documentElement.clientLeft;

    var box5_top = document.getElementById("box5").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box5").ownerDocument.documentElement.clientTop;
    var box5_bot = document.getElementById("box5").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box5").ownerDocument.documentElement.clientTop);
    var box5_left = document.getElementById("box5").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box5").ownerDocument.documentElement.clientLeft;
    var box5_right = document.getElementById("box5").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box5").ownerDocument.documentElement.clientLeft;

    var box6_top = document.getElementById("box6").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box6").ownerDocument.documentElement.clientTop;
    var box6_bot = document.getElementById("box6").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box6").ownerDocument.documentElement.clientTop);
    var box6_left = document.getElementById("box6").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box6").ownerDocument.documentElement.clientLeft;
    var box6_right = document.getElementById("box6").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box6").ownerDocument.documentElement.clientLeft;

    var box7_top = document.getElementById("box7").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box7").ownerDocument.documentElement.clientTop;
    var box7_bot = document.getElementById("box7").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box7").ownerDocument.documentElement.clientTop);
    var box7_left = document.getElementById("box7").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box7").ownerDocument.documentElement.clientLeft;
    var box7_right = document.getElementById("box7").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box7").ownerDocument.documentElement.clientLeft;

    var box8_top = document.getElementById("box8").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box8").ownerDocument.documentElement.clientTop;
    var box8_bot = document.getElementById("box8").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box8").ownerDocument.documentElement.clientTop);
    var box8_left = document.getElementById("box8").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box8").ownerDocument.documentElement.clientLeft;
    var box8_right = document.getElementById("box8").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box8").ownerDocument.documentElement.clientLeft;

    var box9_top = document.getElementById("box9").getBoundingClientRect().top + window.pageYOffset - document.getElementById("box9").ownerDocument.documentElement.clientTop;
    var box9_bot = document.getElementById("box9").getBoundingClientRect().bottom + window.pageYOffset - (document.getElementById("box9").ownerDocument.documentElement.clientTop);
    var box9_left = document.getElementById("box9").getBoundingClientRect().left + window.pageXOffset - document.getElementById("box9").ownerDocument.documentElement.clientLeft;
    var box9_right = document.getElementById("box9").getBoundingClientRect().right + window.pageXOffset - document.getElementById("box9").ownerDocument.documentElement.clientLeft;


    //console.log(data);
    if((data.y > box1_top && data.y < box1_bot) && (data.x > box1_left && data.x < box1_right) && lookBox !== "box1") {
        startLookTime = timestamp;
        lookBox = "box1";

    } else if((data.y > box2_top && data.y < box2_bot) && (data.x > box2_left && data.x < box2_right) && lookBox !== "box2") {
        startLookTime = timestamp;
        lookBox = "box2";
    } else if((data.y > box3_top && data.y < box3_bot) && (data.x > box3_left && data.x < box3_right) && lookBox !== "box3") {
        startLookTime = timestamp;
        lookBox = "box3";
    } else if((data.y > box4_top && data.y < box4_bot) && (data.x > box4_left && data.x < box4_right) && lookBox !== "box4") {
        startLookTime = timestamp;
        lookBox = "box4";
    } else if((data.y > box5_top && data.y < box5_bot) && (data.x > box5_left && data.x < box5_right) && lookBox !== "box5") {
        startLookTime = timestamp;
        lookBox = "box5";
    } else if((data.y > box6_top && data.y < box6_bot) && (data.x > box6_left && data.x < box6_right) && lookBox !== "box6") {
        startLookTime = timestamp;
        lookBox = "box6";
    } else if((data.y > box7_top && data.y < box7_bot) && (data.x > box7_left && data.x < box7_right) && lookBox !== "box7") {
        startLookTime = timestamp;
        lookBox = "box7";
    } else if((data.y > box8_top && data.y < box8_bot) && (data.x > box8_left && data.x < box8_right) && lookBox !== "box8") {
        startLookTime = timestamp;
        lookBox = "box8";
    } else if((data.y > box9_top && data.y < box9_bot) && (data.x > box9_left && data.x < box9_right) && lookBox !== "box9") {
        startLookTime = timestamp;
        lookBox = "box9";
    }
    else if(data.x <= box1_bot.left || data.x >= box3_right){
        startLookTime = Number.POSITIVE_INFINITY;
        lookBox = null;
    }

    if(startLookTime + LOOK_DELAY < timestamp) {
        console.log("Look long enough: ");
        if(lookBox === "box1") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 1 lives here!';
        } else if(lookBox === "box2") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 2 lives here!';
        } else if(lookBox === "box3") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 3 lives here!';
        } else if(lookBox === "box4") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 4 lives here!';
    
        } else if(lookBox === "box5") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 5 lives here!';
        } else if(lookBox === "box6") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 6 lives here!';
        } else if(lookBox === "box7") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 7 lives here!';
        } else if(lookBox === "box8") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 8 lives here!';
        } else if(lookBox === "box9") {
            overlayOn();
            document.getElementById("text").innerHTML = '<b>Inventory Details:</b> <br>Inventory Object 9 lives here!';
        }
        
    }
    

}).begin()

function overlayOn() {
    console.log("on()");
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}
