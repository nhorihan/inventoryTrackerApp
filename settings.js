window.saveDataAcrossSessions = true

webgazer.setGazeListener((data, timestamp) => {
    // console.log(data, timestamp)
}).begin()

var selectedSetting = 'game';

function clickGame() {
    this.selectedSetting = 'game'
    window.location.replace("/inventory.html");
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