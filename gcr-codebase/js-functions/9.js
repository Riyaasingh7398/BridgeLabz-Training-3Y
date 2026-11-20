"use strict";

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Child class inherits Person
class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Create student using ES6 classes
const student = new Student("Riya", "Computer Science");

student.showName();
student.showBranch();

console.log("Is Student:", student instanceof Student);
console.log("Is Person:", student instanceof Person);
