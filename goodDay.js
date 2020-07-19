const day = require('./day');
const badDay = require('./badDay');

let check = day.length - 1
const goodDay = function(){
    check  -= 1
    console.clear()
    console.log(day[check])
}
//Pass the function to setInterval.

const timeID = setInterval(goodDay, 1000)

const calmDown = function(){
    clearInterval(timeID);
}

setTimeout(calmDown, 10000)
