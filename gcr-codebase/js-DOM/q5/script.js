const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        // Open the larger image in the modal.
        modalImage.src = event.target.src.replace("/300/200", "/900/600");
        modal.style.display = "flex";
    }
});

// Clicking inside the modal should not close it.
modalImage.addEventListener("click", function(event) {
    event.stopPropagation();
});

document.querySelector("#modal > img").addEventListener("click", function(event) {
    event.stopPropagation();
});

// Clicking the modal background closes it.
modal.addEventListener("click", function() {
    modal.style.display = "none";
});

closeModal.addEventListener("click", function(event) {
    event.stopPropagation();
    modal.style.display = "none";
});
