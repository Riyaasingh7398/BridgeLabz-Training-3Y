"use strict";

// Create Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create five employee objects
const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "IT", 40000),
    new Employee(3, "Kiran", "Finance", 35000),
    new Employee(4, "Rahul", "Sales", 28000),
    new Employee(5, "Priya", "IT", 45000)
];

// Apply bonus and calculate annual salaries
employees[0].applyBonus(10);

employees.forEach(employee => {
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Annual Salary: ${employee.getAnnualSalary()}`);
});

// Calculate total annual company payout
const totalPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(), 0
);

console.log("Total Annual Payout:", totalPayout);
