"use strict";

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Synchronous code runs first.
// Promise callbacks are microtasks.
// setTimeout callbacks are macrotasks.
// Microtasks run before macrotasks.
