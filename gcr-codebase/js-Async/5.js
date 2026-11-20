"use strict";

// Callback-based pipeline
function runStage(stage, callback) {
    setTimeout(() => {
        console.log(stage);
        callback();
    }, 1000);
}

function callbackPipeline() {
    runStage("Design", () => {
        runStage("Build", () => {
            runStage("Test", () => {
                runStage("Deploy", () => {
                    runStage("Celebrate", () => {
                        console.log("Callback pipeline completed");
                    });
                });
            });
        });
    });
}

// Async function for cleaner pipeline
function asyncStage(stage) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stage);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    await asyncStage("Design");
    await asyncStage("Build");
    await asyncStage("Test");
    await asyncStage("Deploy");
    await asyncStage("Celebrate");

    console.log("Async pipeline completed");
}

callbackPipeline();
runAsyncPipeline();

// Async/await makes asynchronous code easier to read and maintain.
