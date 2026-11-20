"use strict";

// Create movie booking form
document.body.innerHTML = `
<h2>Movie Ticket Booking</h2>
<form id="bookingForm">
    <input id="name" placeholder="Name"><br><br>
    <input id="email" placeholder="Email"><br><br>
    <input id="seats" type="number" placeholder="Seats"><br><br>
    <button type="submit">Book Ticket</button>
</form>
<div id="output"></div>
`;

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = Number(document.getElementById("seats").value);

    const nameValid = /^[A-Za-z ]+$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    if (nameValid && emailValid && seatsValid) {
        const booking = { name, email, seats };

        document.getElementById("output").innerHTML = `
            <h3>Booking Successful!</h3>
            <p>Name: ${booking.name}</p>
            <p>Email: ${booking.email}</p>
            <p>Seats: ${booking.seats}</p>
        `;
    } else {
        document.getElementById("output").textContent =
            "Please enter a valid name, email and seats between 1 and 10.";
    }
});
