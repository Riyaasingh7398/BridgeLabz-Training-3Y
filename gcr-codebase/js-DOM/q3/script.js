const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summary = document.getElementById("summary");

function showStep(stepToShow) {
    [step1, step2, step3, summary].forEach(function(step) {
        step.classList.add("hidden");
    });

    stepToShow.classList.remove("hidden");
}

document.getElementById("next1").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();

    if (name.length < 2) {
        alert("Please enter a valid name.");
        return;
    }

    showStep(step2);
});

document.getElementById("next2").addEventListener("click", function() {
    const email = document.getElementById("email").value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    showStep(step3);
});

document.getElementById("back2").addEventListener("click", function() {
    showStep(step1);
});

document.getElementById("back3").addEventListener("click", function() {
    showStep(step2);
});

document.getElementById("finish").addEventListener("click", function() {
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    document.getElementById("summaryName").textContent =
        "Name: " + document.getElementById("name").value;

    document.getElementById("summaryEmail").textContent =
        "Email: " + document.getElementById("email").value;

    showStep(summary);
});
