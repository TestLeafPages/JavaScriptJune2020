let foodItems = [
    { name: "Idly", type: "Veg", price: 20, when: "BreakFast" },
    { name: "Dosa", type: "Veg", price: 150, when: "Dinner" },
    { name: "chicken Soup", type: "NonVeg", price: 100, when: "Lunch" },
    { name: "Parotta", type: "Veg", price: 40, when: "Dinner" },
    { name: "Mutton fry", type: "NonVeg", price: 120, when: "Dinner" },
];

let vegDinner = foodItems.filter(food => food.when == "Dinner")
    .filter(food => food.type == "Veg")
    .map(food => food.price)
    .reduce((previous, price) => previous + price)


console.log(vegDinner);
