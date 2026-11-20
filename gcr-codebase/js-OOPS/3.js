function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Phone", 20000);
const product3 = new Product("Headphones", 3000);

console.log(product1.name, "Final Price:", product1.applyDiscount(10));
console.log(product2.name, "Final Price:", product2.applyDiscount(15));
console.log(product3.name, "Final Price:", product3.applyDiscount(20));

console.log("Abstraction: applyDiscount() hides the discount calculation. We only provide the discount percentage and get the final price.");
