const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.getElementById("currentTheme");

themeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedTheme = button.getAttribute("data-theme-choice");

        // Save the theme using a custom data attribute.
        document.body.setAttribute("data-theme", selectedTheme);

        // Apply the selected theme class using setAttribute().
        document.body.setAttribute("class", selectedTheme + "-theme");

        currentTheme.textContent =
            "Current theme: " + selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1);
    });
});
