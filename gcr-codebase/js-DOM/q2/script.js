const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - message.value.length;
    counter.textContent = remaining;

    counter.style.color = "green";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    }

    if (remaining === 0) {
        counter.style.color = "red";
    }
}

// Prevent typing more characters when the limit is reached.
// Allow Backspace, Delete, arrow keys and keyboard shortcuts.
message.addEventListener("keydown", function(event) {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight",
        "ArrowUp", "ArrowDown", "Tab", "Home", "End"
    ];

    const isShortcut = event.ctrlKey || event.metaKey;

    if (
        message.value.length >= maximumCharacters &&
        !allowedKeys.includes(event.key) &&
        !isShortcut
    ) {
        event.preventDefault();
    }
});

// Also handle pasted text and other input changes.
message.addEventListener("input", function() {
    if (message.value.length > maximumCharacters) {
        message.value = message.value.slice(0, maximumCharacters);
    }
    updateCounter();
});

resetButton.addEventListener("click", function() {
    message.value = "";
    updateCounter();
});

updateCounter();
