const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 10 },
    { id: 3, name: "Chair", category: "Furniture", price: 3000, stock: 4 },
    { id: 4, name: "Table", category: "Furniture", price: 7000, stock: 8 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + product.price * product.stock;
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low Stock Products:", getLowStockProducts());
console.log("Products Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Products Grouped by Category:", groupByCategory());
