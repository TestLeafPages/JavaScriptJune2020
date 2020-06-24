class Kitchen {
    constructor(name) {
        console.log("The restaurant is open " + name);
    }

    chefName = "kuppusamy";
    employeeCount = 40;
    isVeg = true;

    getChefName() {
        return this.chefName;
    }

    foodItems = {
        "1001": "Idly",
        "1002": "Dosai",
        "1003": "Vada"
    }

}

let hotel = new Kitchen("A2B");
// console.log(hotel.foodItems["1001"]);

// console.log(hotel.chefName);
// console.log(hotel.getChefName());
