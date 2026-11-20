"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let data = JSON.parse(rawData[i]);

        if (!data.user || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        data.age = Number(data.age);

        if (!Number.isFinite(data.age)) {
            throw new Error("Invalid age");
        }

        cleanData.push(data);

        if (data.age < 18) {
            under18Users.push(data);
        }
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Under 18 Users:", under18Users);
