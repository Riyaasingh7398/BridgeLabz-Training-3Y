"use strict";

// Add custom myMap method to Array prototype
Array.prototype.myMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Test custom myMap method
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.myMap(number => number * 2);
const squaredNumbers = numbers.myMap(number => number * number);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
