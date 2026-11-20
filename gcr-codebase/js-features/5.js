"use strict";

let score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const announceArrow = () => console.log("Game started using arrow function");

announceArrow();
