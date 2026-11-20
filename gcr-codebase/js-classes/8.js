"use strict";

// Create user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Create editing form
document.body.innerHTML = `
<h2>Edit User Details</h2>
<form id="userForm">
    <input id="name" placeholder="Name"><br><br>
    <input id="email" type="email" placeholder="Email"><br><br>
    <input id="age" type="number" placeholder="Age"><br><br>
    <button type="submit">Update</button>
</form>
<h3>Updated User Details</h3>
<pre id="output"></pre>
`;

// Display existing values
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
});
