let restaurant = new Map();
//size
console.log(restaurant.size);

//Add items to Map
restaurant.set(1001, "Saraswathi Hotel");
restaurant.set(1002, "Abirami restaurant");
restaurant.set(1003, "vasant bhavan");
restaurant.set(1004, "vasant bhavan");

//iterate using For..of
for (let kitchen of restaurant.keys()) {
    console.log(kitchen);
}

//delete
restaurant.delete(1002)

//has
restaurant.has(1001)

//clear entire Map
restaurant.clear()

//get a single value using key
restaurant.get(1001)

//Iterate over forEach
restaurant.forEach((value, key, map) => {
    if (value == "vasant bhavan") {
        console.log(value + " " + key);
    }
});



