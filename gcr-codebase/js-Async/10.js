"use strict";

function deliveryStep(message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(message + " failed"));
            } else {
                resolve(message);
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("Step 1: Order taken")
            .then(message => console.log(message));

        await deliveryStep("Step 2: Food prepared")
            .then(message => console.log(message));

        await deliveryStep("Step 3: Package ready")
            .then(message => console.log(message));

        await deliveryStep("Step 4: Out for delivery")
            .then(message => console.log(message));

        await deliveryStep("Delivery completed!")
            .then(message => console.log(message));

    } catch (error) {
        console.log("Pipeline failed!");
        console.log(error.message);
    }
}

runPipeline();
