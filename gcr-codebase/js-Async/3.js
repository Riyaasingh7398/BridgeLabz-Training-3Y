"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.3;

        setTimeout(() => {
            if (shouldFail) {
                reject("Failed to fetch bugs");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug Report");
        console.table(bugs.map((bug, index) => ({
            ID: index + 1,
            Bug: bug
        })));
    })
    .catch(error => console.log("Error:", error));
