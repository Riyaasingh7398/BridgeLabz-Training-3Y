"use strict";

// Outer function creates a closure
function makeMultiplier(multiplier) {

    // Inner function remembers multiplier
    return function(number) {
        return number * multiplier;
    };
}

// Create multiplier functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log("Double:", double(5));
console.log("Triple:", triple(5));
console.log("Quadruple:", quadruple(5));
