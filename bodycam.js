// CONFIG START
const player = "PLACE HOLDER";
const agency = "EMERGENCY CITY EXAMPLE DEPARTMENT";
const callsign = "[XXX]";

// SOUND SETTINGS
const beeperVolume = 0.2; // Set to 0 to disable beeps.
const beeperRepeatSeconds = 120; // How many seconds between beeps.

// TIMEZONE OVERRIDE
const overrideTimezone = false; // Set to true to enable this feature.
const hourOffset = 0;
const minuteOffset = 0;
const overrideTimezoneName = '';

// CONFIG ENDS

const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const localTimezoneName = Date().toLocaleString('en', {timeZoneName: 'short'}).split(' ')[5];

/** Initialize the bodycam overlay with the static information, and start the clock. */
function init() {
    beeper = document.getElementById("beep");
    beeper.volume = beeperVolume;

    writeToPage('player', player);
    writeToPage('agency', agency);
    writeToPage('callsign', callsign);
    clock();

    playSound();
    setInterval(() => {
        playSound();
    }, beeperRepeatSeconds * 1000);
}

/** Beep Beep. */
function playSound() {
    beeper.play();
}


/** Write the current time/day to the overlay every 100ms. */
function clock(){
    let datetime = getDateTimeString();

    // Write these to the document.
    writeToPage('dateTime', datetime);

    // Call this function again in 100ms.
    setTimeout(clock, 100);
}

function getDateTimeString(){
    // Get the current time and date.
    let d = new Date();

    // If we plan to override the timezone,
    // change the time so we can use the UTC values directly.
    if(overrideTimezone){
        d.setUTCHours(d.getUTCHours() + hourOffset);
        d.setUTCMinutes(d.getUTCMinutes() + minuteOffset);
    }

    // Get the individual bits of information,
    // based on whether we're overriding or not.
    let day = overrideTimezone ? d.getUTCDate() : d.getDate();
    let month = overrideTimezone ? d.getUTCMonth() : d.getMonth();
    let year = overrideTimezone ? d.getUTCFullYear() : d.getFullYear();
    let hours = overrideTimezone ? d.getUTCHours() : d.getHours();
    let minutes = overrideTimezone ? d.getUTCMinutes() : d.getMinutes();
    let seconds = overrideTimezone ? d.getUTCSeconds() : d.getSeconds();
    let timezone = overrideTimezone ? overrideTimezoneName : localTimezoneName;

    let datetime = // Date
        String(day).padStart(2, '0') + ' ' +
        monthNames[month] + ' ' +
        String(year) + ' ' +
        // Time
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ' ' +
        timezone;
    return datetime;
}

/** Write a value to the document, padding with extra characters if required.
 * @param {String} id the ID of the element to inject into.
 * @param {String} val The value to print
*/
function writeToPage(id, val){
    document.getElementById(id).innerHTML = val;
}

