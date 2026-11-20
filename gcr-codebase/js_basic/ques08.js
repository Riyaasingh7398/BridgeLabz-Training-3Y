
 // Starting salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

let yearlySalary = [];

// Calculate salary for five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    yearlySalary.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display salary projection
console.table(yearlySalary);
