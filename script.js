window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000

let beginLookTime = Number.POSITIVE_INFINITY

webgazer.setGazeListener((data, timestamp) => {
    // TO DO: for each rectangle on this page, check rectangle
}).begin()