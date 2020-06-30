function cookFood(menuItem) {
    console.log(`Menu Item : ${menuItem} cooked and delivered...`);
    return menuItem;
}
function findFood(func) {
    let cookOnce = new Map();
    return menuItem => {
        if (cookOnce.has(menuItem)) {
            console.log("Just Delivered...");
            return cookOnce.get(menuItem);
        }
        let result = func(menuItem);
        cookOnce.set(menuItem, result);
        return result;
    }
}
cookFood = findFood(cookFood);
cookFood("Idly");
cookFood("Idly");
cookFood("Dosa");

