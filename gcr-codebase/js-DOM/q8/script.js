const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

// Capturing phase: close the dropdown when clicking outside it.
document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.add("hidden");
    }
}, true);

dropdownButton.addEventListener("click", function() {
    dropdownOptions.classList.toggle("hidden");
});

dropdownOptions.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownButton.textContent = event.target.textContent;
        dropdownOptions.classList.add("hidden");
    }
});
