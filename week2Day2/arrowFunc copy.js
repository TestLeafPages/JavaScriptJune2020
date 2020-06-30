let foodItems = [
    { name: "Idly", type: "Veg", price: 20, when: "BreakFast" },
    { name: "Dosa", type: "Veg", price: 50, when: "Dinner" },
    { name: "chicken Soup", type: "NonVeg", price: 100, when: "Lunch" },
    { name: "Parotta", type: "Veg", price: 40, when: "Dinner" },
    { name: "Mutton fry", type: "NonVeg", price: 120, when: "Dinner" },
];

let vegDinner = foodItems.filter(function (food) {
    return food.when == "Dinner";
}).filter(function (food) {
    return food.type == "Veg";
}).map(function (food) {
    return food.price;
}).reduce(function (previous,price) {
    return previous + price;
})
    

console.log(vegDinner);
