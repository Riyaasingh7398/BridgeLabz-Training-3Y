"use strict";

// Arrow functions do not have their own this
const user = {
    name: "Riya",
    showName: () => {
        console.log("Arrow Function Name:", this.name);
    }
};

user.showName();

// Normal functions get this from the calling object
const correctUser = {
    name: "Riya",
    showName: function() {
        console.log("Normal Function Name:", this.name);
    }
};

correctUser.showName();
