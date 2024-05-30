// https://cs.sggs.hc.edu.tw/csnskj/choice.asp
// https://cs.sggs.hc.edu.tw/csnskj/func/Super.js

var msg = "密碼通過的訊息.";
var scr_width = screen.width - 10;
var scr_height = screen.height - 70;
var newwinsty1 = "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=" + scr_width + ",height=" + scr_height;
var password = new initArray(67, 83, 50, 51, 52, 53, 51, 48, 51, 49);

function initArray() {
	this.length = initArray.arguments.length;
	for (var i = 0; i < this.length; i++) {
		this[i] = initArray.arguments[i];
	}
}
var pass_count = 0;
var cancel_key = 27;
if (document.layers) document.captureEvents(Event.KEYPRESS)
function backhome(e) {
	if (document.layers) {
		if (e.which == password[pass_count]) {
			checkpassword();
		}
		else {
			pass_count = 0;
		}
	}
	else if (document.all) {
		if (event.keyCode == password[pass_count]) {
			checkpassword();
		}
		else {
			pass_count = 0;
		}
	}
}
document.onkeypress = backhome
function checkpassword() {
	pass_count++;
	if (pass_count >= password.length) {
		if (confirm(msg)) window.open("superlog.asp", "newWin", newwinsty1);
	}
}
// GPT4o
// This JavaScript code is designed to open a new window with specific properties if a predefined sequence of keypresses matches a password sequence. Here's a detailed breakdown of what each part of the code does:

// 1. **Variables Initialization:**
//    ```javascript
//    var msg = "密碼通過的訊息.";
//    var scr_width = screen.width - 10;
//    var scr_height = screen.height - 70;
//    var newwinsty1 = "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=" + scr_width + ",height=" + scr_height;
//    var password = new initArray(67, 83, 50, 51, 52, 53, 51, 48, 51, 49);
//    ```

//    - `msg` holds a message in Chinese, which translates to "Password accepted message."
//    - `scr_width` and `scr_height` calculate the dimensions for a new window, slightly smaller than the full screen size.
//    - `newwinsty1` is a string defining the properties of the new window (no toolbar, no location bar, etc.).
//    - `password` is an array of keycodes representing the password sequence. The keycodes correspond to the characters "CS23453031".

// 2. **Array Initialization Function:**
//    ```javascript
//    function initArray() {
//        this.length = initArray.arguments.length;
//        for (var i = 0; i < this.length; i++) {
//            this[i] = initArray.arguments[i];
//        }
//    }
//    ```

//    This function initializes an array with the provided arguments, simulating the behavior of an array constructor.

// 3. **Password and Event Handling:**
//    ```javascript
//    var pass_count = 0;
//    var cancel_key = 27;
//    if (document.layers) document.captureEvents(Event.KEYPRESS);
//    ```

//    - `pass_count` keeps track of how many correct keypresses have been detected in sequence.
//    - `cancel_key` is set to the keycode for the Escape key (27).
//    - If the `document.layers` property exists (related to older browsers like Netscape), it captures keypress events.

// 4. **Event Listener for Keypress:**
//    ```javascript
//    function backhome(e) {
//        if (document.layers) {
//            if (e.which == password[pass_count]) {
//                checkpassword();
//            } else {
//                pass_count = 0;
//            }
//        } else if (document.all) {
//            if (event.keyCode == password[pass_count]) {
//                checkpassword();
//            } else {
//                pass_count = 0;
//            }
//        }
//    }
//    document.onkeypress = backhome;
//    ```

//    - `backhome` function handles keypress events.
//    - If the pressed key matches the current password character (`password[pass_count]`), it calls `checkpassword()` to proceed.
//    - If the pressed key doesn't match, it resets `pass_count` to 0.

// 5. **Password Checking:**
//    ```javascript
//    function checkpassword() {
//        pass_count++;
//        if (pass_count >= password.length) {
//            if (confirm(msg)) window.open("superlog.asp", "newWin", newwinsty1);
//        }
//    }
//    ```

//    - `checkpassword` increments the `pass_count`.
//    - If the entire password sequence has been correctly entered (`pass_count` equals `password.length`), it shows a confirmation dialog with the message `msg`.
//    - If the user confirms, it opens a new window with the properties defined in `newwinsty1`, loading the "superlog.asp" page.

// ### Summary

// This code listens for a specific sequence of keypresses (matching the password "CS23453031"). If this sequence is correctly entered, it displays a confirmation message. Upon confirmation, it opens a new window with specified dimensions and properties, loading the "superlog.asp" page.
