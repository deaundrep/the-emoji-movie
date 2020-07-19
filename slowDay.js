const day = require('./day');

// make i variable that checks i starting at 0.
let check = 0
const badDay = function(){
    check += 1
    console.clear()
    console.log(day[check])
}
//Pass the function to setInterval.

const timeID = setInterval(badDay, 1000)

const calmDown = function(){
    clearInterval(timeID);
}

setTimeout(calmDown, 10000)
