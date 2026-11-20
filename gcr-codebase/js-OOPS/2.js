const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        const food = menu.find(menuItem => menuItem.name === item);

        if (!food) {
            throw new Error(item + " is not available in the menu.");
        }

        return food.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    console.log("Total Bill:", calculateBill(["Pizza", "Burger"]));
    console.log("Total Bill:", calculateBill(["Pizza", "Sandwich"]));
} catch (error) {
    console.log("Order Error:", error.message);
}
