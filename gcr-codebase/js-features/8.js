"use strict";

try {
    new Function('"use strict"; function demo(a, a) {}');
} catch (error) {
    console.log("Strict Mode Error:", error.message);
}

const normalDemo = new Function(
    "function demo(a, a) { total = 10; return total; } return demo(5, 10);"
);

console.log("Without Strict Mode:", normalDemo());
console.log("Implicit global deleted:", delete globalThis.total);

function correctDemo(a, b) {
    let total = a + b;
    return total;
}

console.log("Correct ES6 Result:", correctDemo(5, 10));
