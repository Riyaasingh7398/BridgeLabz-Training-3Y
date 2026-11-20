"use strict";

// Create login form
document.body.innerHTML = `
<h2>Login Form</h2>
<form id="loginForm">
    <input id="username" placeholder="Username"><br><br>
    <input id="password" type="password" placeholder="Password"><br><br>
    <button type="submit">Login</button>
</form>
<div id="message"></div>
`;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    let errors = [];

    if (!/^.{5,}$/.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (!/^.{8,}$/.test(password)) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/\d/.test(password)) {
        errors.push("Password must contain a number.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    if (errors.length === 0) {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    }
});
