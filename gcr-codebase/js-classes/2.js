"use strict";

// Create registration form
document.body.innerHTML = `
<h2>Student Registration Form</h2>
<form id="studentForm">
    <input id="name" placeholder="Name"><br><br>
    <input id="email" placeholder="Email"><br><br>
    <input id="phone" placeholder="Phone"><br><br>
    <input id="password" type="password" placeholder="Password"><br><br>
    <button type="submit">Register</button>
</form>
<div id="message"></div>
`;

const form = document.getElementById("studentForm");
const message = document.getElementById("message");

// Validate each field using regular expressions
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        { id: "name", regex: /^[A-Za-z]+$/, error: "Name must contain only alphabets" },
        { id: "email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: "Enter a valid email" },
        { id: "phone", regex: /^\d{10}$/, error: "Phone must contain exactly 10 digits" },
        { id: "password", regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, error: "Password needs uppercase, number and special character" }
    ];

    let valid = true;
    message.innerHTML = "";

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const isValid = field.regex.test(input.value);

        input.style.border = isValid ? "2px solid green" : "2px solid red";

        if (!isValid) {
            valid = false;
            message.innerHTML += `<p style="color:red">${field.error}</p>`;
        }
    });

    if (valid) {
        message.innerHTML = '<p style="color:green">Registration Successful!</p>';
    }
});
