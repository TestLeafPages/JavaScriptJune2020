let findById = function (value) {
    return "findById using " + value;
}

let findByName = function (value) {
    return "findByName using " + value;
}

let findByClass = function (value) {
    return "findByClass using " + value;
}

let locElement = function (callback, value) {
    return callback(value)
}

console.log(locElement(findById, "userName"));


