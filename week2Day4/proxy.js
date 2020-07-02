let idly = {
    id: "1001",
    price: 15,
    type: "Veg"
}
// idly.price = 5;
// console.log(idly.price);

let handler = {
    set: function (obj, property, value) {
        if (value != 15) {
            throw new TypeError("You are not allowed to change");
        }
        return true;
    },
    get: function (obj, property) {
        if (property in obj) {
            return obj[property];
        } else {
            throw new TypeError("You do not have the property");
        }
    }
}

let proxyIdly = new Proxy(idly, handler);
// proxyIdly.price = 5;
console.log(proxyIdly.type);
