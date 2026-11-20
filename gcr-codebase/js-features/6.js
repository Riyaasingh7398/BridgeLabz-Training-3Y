"use strict";

let input = typeof prompt === "function" ? prompt("Enter pyramid height (default 5):") : null;
let limit = Number(input) || 5;

for (let i = 1; i <= limit; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

for (var i = 1; i <= 4; i++) {
    let pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
