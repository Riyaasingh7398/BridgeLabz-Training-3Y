"use strict";

// Create Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    }

    applyCoupon(coupon) {
        if (!/^(SAVE|DISC)\d+$/.test(coupon)) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        const discount = Number(coupon.match(/\d+/)[0]);

        if (discount <= 0 || discount > 100) {
            console.log("Invalid Discount Percentage");
            return this.getTotal();
        }

        return this.getTotal() - (this.getTotal() * discount / 100);
    }
}

// Create cart and add products
const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

const coupon = "SAVE20";

console.log("Cart Items:", cart.items);
console.log("Original Total:", cart.getTotal());
console.log("Coupon:", coupon);
console.log("Final Total:", cart.applyCoupon(coupon));
