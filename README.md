[![trophy](https://github-profile-trophy.vercel.app/?username=zhivotnoya&no-bg=true&no-frame=true&theme=matrix&row=1&column=5&rank=-SECRET,-SSS,-SS,-S)](https://github.com/ryo-ma/github-profile-trophy)

# XION-ChaseCam
This is a free-to-use HTML/javascript based overlay for roleplay streamers.  Basically it mimics the overlay of the AXON bodycam, but since most folks play in 3rd person, it's a ChaseCam.  I've included a logo, and the html file.  The html file has the css, html, and javascript all in one file for ease of editing.  Goto line 81 of the html file to change your information, and be sure to read the readme.txt file for further information.

# Screenshot(s)

![Ofc Hightower](https://i.imgur.com/Bzzyxpw.png)

![Deputy Barnes](https://i.imgur.com/WyYo6jt.png)



# How to use:

1) create a directory for the script to reside

2) put files (including this one) into that directory

3) open top-right.html, goto line 81, and change the info for "player", "agency", "callsign" making sure to preserve the

   formatting and any quotes.  If you need a quote or other punctuation mark in your name/agency/callsign please refer to

   this: https://www.toptal.com/designers/htmlarrows/punctuation/   and utilize the code labelled as "HTML ENTITY".

4) load into OBS (or other software) as a "BROWSER SOURCE" the file with the .html extension

5) activate the layer and profit!

# Change Image

1) make sure your image is saved as a png to preserve transparency (if any) other wise shouldn't matter.

2) Navigate to: https://www.base64-image.de/  and drag/drop your image to have it converted to base64

3) Copy the base64 code by clicking </> show code, and copy the code for img to your clipboard.

4) using a text editor, replace the long string of code in the body of the html file with your string of code.  Be sure to
   not remove the quotes.
   
5) Save the file and enjoy!

# People/Communities I've found that use it religiously!

These fine folks use it all the time and I thank you from the bottom of my heart!
(As I find them, I'll add them here)

SonoranCAD (https://info.sonorancad.com/integration-plugins/twitch-overlay-and-bot#bodycam-overlay ) offers a modified version that puts in your location information.

DirtRoadDeputy (https://www.twitch.tv/dirtroaddeputy)

SheriffStrafe (https://www.tiktok.com/@sheriffstrafe) <3

GarrettGaming19 (https://kick.com/garrettgaming19) 

Rob1154 (https://www.twitch.tv/rob1154)

Billesh55 (https://www.twtich.tv/billesh55)

Quasar Dispatch and MDT Script (https://buy.quasar-store.com/package/5695149)

(more to come, I promise.  If you use it, and would like to be mentioned, drop me a message (please no spam). At the very least, your usage will be immortalized here. :) )

# Version History:
v3.2: Fix submited by @tyrope . Now when the local clock hits midnight, it will update the date as well.  Thanks for the fix!

v3.1: double beep added by user @spaz926 .  Thanks for the addition!

v2: this one

v1: initially was 3 separate files.
