let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    let isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    if (isSecure && !isUnsafe) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

isDoorLocked = false;
checkSecurity();

isDoorLocked = true;
isAlarmOn = false;
checkSecurity();
