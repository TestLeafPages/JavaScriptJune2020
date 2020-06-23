//string literals
let restaurant = "  Thalapakatti velachery ";

//length
console.log("The Count of Characters: " + restaurant.length);

// //upper & lower
console.log("converting String to UpperCase: " + restaurant.toUpperCase());

console.log("Converting String to LowerCase: " + restaurant.toLowerCase());

// //CharAt(find the character by position)
console.log("CharAt : " + restaurant.charAt(0));

// //includes (contains)
console.log("Includes(contains) : " + restaurant.includes("b"));

// //split
console.log(restaurant.split(" "));

// //replace
console.log("replaced location : " + restaurant.replace("velachery", "chrompet"));

// //subString
console.log("subString : " + restaurant.substring(2, 5));

// //slice
console.log("slice : " + restaurant.slice(4, 8));

// //trim
console.log("trim : " + restaurant.trim());
console.log("trim : " + restaurant);


