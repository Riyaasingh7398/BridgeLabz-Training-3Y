const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function(event) {
    // Display the mouse position on the browser window.
    coordinates.textContent =
        "clientX: " + event.clientX + " | clientY: " + event.clientY;
});

mouseBox.addEventListener("dblclick", function(event) {
    const boxPosition = mouseBox.getBoundingClientRect();

    // Calculate the click position relative to the box.
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    const dot = document.createElement("div");
    dot.className = "red-dot";
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    mouseBox.appendChild(dot);
});
