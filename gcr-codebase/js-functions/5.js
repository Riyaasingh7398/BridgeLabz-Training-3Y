"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student prototype method
Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

// Create student object
const student = new Student("Riya", "Computer Science");

student.showName();
student.showBranch();

console.log("Prototype Chain:", student instanceof Person);
console.log("Student Object:", student instanceof Student);
