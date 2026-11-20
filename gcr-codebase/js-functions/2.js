"use strict";

// Function that accepts an array and callback operation
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(numbers, number => number * 2);

// Square each number
const squaredNumbers = applyOperation(numbers, number => number * number);

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Squared Numbers:", squaredNumbers);
