let userName = "Riya";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "Cloud"];
let user = { name: "Riya", age: 20 };
let address = null;
let phoneNumber;

console.table([
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: String(address), Type: address === null ? "null" : typeof address },
    { Label: "Phone Number", Value: String(phoneNumber), Type: typeof phoneNumber }
]);
