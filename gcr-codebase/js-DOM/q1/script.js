const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="product-name"></span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;
    listItem.querySelector(".product-name").textContent = productName;
    productList.appendChild(listItem);
    productInput.value = "";
}

addButton.addEventListener("click", addProduct);

let editingItem = null;
let editingInput = null;

function saveEdit() {
    if (!editingItem) return;

    const nameSpan = editingItem.querySelector(".product-name");
    const newName = editingInput.value.trim();

    if (newName !== "") {
        nameSpan.textContent = newName;
    }

    editingItem.classList.remove("editing");
    editingItem = null;
    editingInput = null;
}

// Event delegation: handle Edit and Delete from the parent UL
productList.addEventListener("click", function(event) {
    const listItem = event.target.closest("li");
    if (!listItem) return;

    if (event.target.classList.contains("delete-button")) {
        if (editingItem === listItem) {
            editingItem = null;
            editingInput = null;
        }
        listItem.remove();
    }

    if (event.target.classList.contains("edit-button")) {
        if (editingItem) saveEdit();

        const nameSpan = listItem.querySelector(".product-name");
        editingItem = listItem;
        editingInput = document.createElement("input");
        editingInput.value = nameSpan.textContent;
        nameSpan.replaceWith(editingInput);
        listItem.classList.add("editing");
        editingInput.focus();
    }
});

document.addEventListener("click", function(event) {
    if (editingItem && !editingItem.contains(event.target)) {
        const nameSpan = document.createElement("span");
        nameSpan.className = "product-name";
        nameSpan.textContent = editingInput.value.trim() || "Unnamed product";
        editingInput.replaceWith(nameSpan);
        editingItem.classList.remove("editing");
        editingItem = null;
        editingInput = null;
    }
});
