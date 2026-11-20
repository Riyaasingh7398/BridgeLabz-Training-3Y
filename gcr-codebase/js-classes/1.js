"use strict";

// Create Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `${this.name} | Price: ${this.price} | Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Phone", 25000, "Electronics")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

// Display products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products Above 1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
