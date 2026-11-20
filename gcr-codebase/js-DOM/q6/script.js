const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentTable tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    studentRows.forEach(function(row) {
        const rowText = row.textContent.toLowerCase();
        const matches = rowText.includes(searchText);

        row.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    noResults.classList.toggle("hidden", visibleCount !== 0);
});
