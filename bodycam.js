// CONFIG START
const player = "M. HIGHTOWER";
const agency = "LOS SANTOS POLICE DEPARTMENT";
const callsign = "[272]";
const enableBeepSounds = true; // Change to false to disable the beeps.

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
    if(enableBeepSounds){
        injectAudio();
    }

    writeToPage('player', player);
    writeToPage('agency', agency);
    writeToPage('callsign', callsign);
    clock();
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

/** Inject the audio player into the HTML page. */
function injectAudio(){
    const audio = document.createElement('audio');
    audio.setAttribute('id', 'beep');
    audio.setAttribute('autoplay','');
    audio.setAttribute('loop','');

    const source = document.createElement('source');
    source.setAttribute('src', 'double-beep.wav');
    source.setAttribute('type', 'audio/wav');

    audio.appendChild(source);
    document.body.appendChild(audio);
}

/** Write a value to the document, padding with extra characters if required.
 * @param {String} id the ID of the element to inject into.
 * @param {String} val The value to print
*/
function writeToPage(id, val){
    document.getElementById(id).innerHTML = val;
}

