let restaurantName = "saraswathi hotel";
//spliting string into a single Character Array
let occ = restaurantName.split("");
let charOcc = new Map();
occ.forEach(eachChar => {
    if (charOcc.has(eachChar)) {
        //getting the count of the character
        let count = charOcc.get(eachChar) + 1;
        //inserting into Map
        charOcc.set(eachChar, count);
    } else {
        charOcc.set(eachChar, 1);
    }
});

console.log(charOcc);





















//find character occurances
/*
set
get
has
 */