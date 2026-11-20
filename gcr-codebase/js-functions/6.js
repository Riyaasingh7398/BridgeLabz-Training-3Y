"use strict";

// First level: Person
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Person Name:", this.name);
};

// Second level: Faculty
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Department:", this.department);
};

// Third level: Professor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Subject:", this.subject);
};

// Create professor object
const professor = new Professor("Amit", "Computer Science", "JavaScript");

professor.showPerson();
professor.showFaculty();
professor.showProfessor();

console.log("Person Chain:", professor instanceof Person);
console.log("Faculty Chain:", professor instanceof Faculty);
console.log("Professor Chain:", professor instanceof Professor);
