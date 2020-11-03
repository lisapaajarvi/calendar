window.addEventListener("load", main)

const date = new Date ();
let month = "";

function main () {
    startClock();
    //showDay();
    //showDate();
}
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    const timeHolder = document.getElementById("time");
    timeHolder.innerText = hours + ":" + minutes + ":" + seconds;

    const weekdayHolder = document.getElementById("day");
    weekdayHolder.innerText = getWeekday(date);

    const monthHolder = document.getElementById("date");
    monthHolder.innerText = getMonthString(date);
}

function formatTime (counter) {
    if(counter < 10) {
        return "0" + counter;
    }
    return counter;
}

function getWeekday(date) {
    const weekdayIndex = date.getDay();
    switch(weekdayIndex) {
        case 0: return "Sönday";
        case 1: return "Måndag";
        case 2: return "Tisdag";
        case 3: return "Onsdag";
        case 4: return "Torsdag";
        case 5: return "Fredag";
        case 6: return "Lördag";
    }
}


function showDate () {
    const dateNumber = date.getDate();
    showMonth();
    let dateContainer = document.getElementsByClassName("date-container");
    console.log(dateContainer);
    dateContainer.innerText = getMonthString();

}

function getMonthString (date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + " ";

    switch(monthIndex) {
        case 0: return prefix + "januari";
        case 1: return prefix + "februari";
        case 2: return prefix + "mars";
        case 3: return prefix + "april";
        case 4: return prefix + "maj";
        case 5: return prefix + "juni";    
        case 6: return prefix + "juli";
        case 7: return prefix + "augusti";
        case 8: return prefix + "september";
        case 9: return prefix + "oktober";
        case 10: return prefix + "november";
        case 11: return prefix + "december";
    }
}