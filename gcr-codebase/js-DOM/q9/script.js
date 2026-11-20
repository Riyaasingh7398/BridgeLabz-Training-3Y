const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        return false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @.";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must contain at least 6 characters.";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

// Remove errors automatically as the user corrects each input.
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function(event) {
    // Prevent the browser from submitting or refreshing the page.
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        successMessage.textContent = "Form Submitted Successfully!";
        form.reset();

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
    } else {
        successMessage.textContent = "";
    }
});
