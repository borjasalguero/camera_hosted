# Camera app
Hosted Camera App for FirefoxOS based on WebRTC
In order to use this app, follow the following instructions:

- Bring config file from our Firefox OS device to a FOLDER
adb pull /data/local/user.js FOLDER
- Go to FOLDER, open user.js and add the following line
user_pref('dom.imagecapture.enabled', true);
- Push this file again to the device
adb push user.js /data/local/user.js
- Reboot the device
adb reboot
- Open a browser, go to [1] in your Firefox OS browser
[1] http://borjasalguero.github.io/camera_hosted/

Feel free to modify this code and contribute!
