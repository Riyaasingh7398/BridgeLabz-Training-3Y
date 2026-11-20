class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / this.marks.length;

        let grade;
        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 50) {
            grade = "C";
        } else {
            grade = "F";
        }

        return { average, grade };
    }
}

const students = [
    new Student("Riya", [90, 85, 95]),
    new Student("Aman", [78, 80, 72]),
    new Student("Priya", [40, 45, 50])
];

students.forEach(student => {
    const result = student.calculateAverage();
    console.log(student.name, "Average:", result.average, "Grade:", result.grade);
});
