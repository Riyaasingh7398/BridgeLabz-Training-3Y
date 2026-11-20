"use strict";

function outer() {
    console.log("Outer count:", count);

    var count = 5;

    const inner = () => {
        console.log("Inner count:", innerCount);
        var innerCount = 10;
        console.log("Updated Inner Count:", innerCount);
    };

    inner();

    console.log("Updated Outer Count:", count);
}

outer();
