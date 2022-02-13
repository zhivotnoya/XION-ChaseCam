// CONFIG START
const player = "M. HIGHTOWER";
const agency = "LOS SANTOS POLICE DEPARTMENT";
const callsign = "[272]";
const enableBeepSounds = true; // Change to false to disable the beeps.
// CONFIG ENDS

const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const timezone = Date().toLocaleString('en', {timeZoneName: 'short'}).split(' ')[5];

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
    // Get the current time and day.
    let d = new Date();

    // Merge the date bits together.
    let datetime = String(d.getDate()).padStart(2, '0');
    datetime += ' ' + monthNames[d.getMonth()];
    datetime += ' ' + String(d.getFullYear());
    // Add the time bits.
    datetime += ' ' + String(d.getHours()).padStart(2, '0');
    datetime += ':' + String(d.getMinutes()).padStart(2, '0');
    datetime += ':' + String(d.getSeconds()).padStart(2, '0');

    // Add the timezone
    datetime += ' '+timezone;

    // Write these to the document.
    writeToPage('dateTime', datetime);

    // Call this function again in 100ms.
    setTimeout(clock, 100);
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

