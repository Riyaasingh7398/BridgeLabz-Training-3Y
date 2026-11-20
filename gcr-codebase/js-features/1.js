"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);

    console.log("Original:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", Boolean(value));
    console.log("String:", String(value));

    if (typeof value === "string" && value.trim() === "" || !Number.isFinite(numberValue)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
