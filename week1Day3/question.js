let str = "paypal";

let setOfCharacters = new Set();

let strArray = str.split("");
strArray.forEach(eachChar => {
    if (!setOfCharacters.has(eachChar)) {
        setOfCharacters.add(eachChar);
    }
});
console.log(setOfCharacters);
