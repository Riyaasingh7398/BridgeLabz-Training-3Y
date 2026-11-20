"use strict";

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.2
                ? reject("Profile Failed")
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.2
                ? reject("Posts Failed")
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.2
                ? reject("Messages Failed")
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(modules[index] + ":", result.value);
        } else {
            console.log(modules[index] + ":", result.reason);
        }
    });

    console.log("Total Time:", Date.now() - startTime, "ms");
}

loadDashboard();
