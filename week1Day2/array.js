//Array literals
let dishes = ["chicken soup", "lobster fry", "chicken Briyani", true, 12];

//push
dishes.push("fried rice", "gulab jamun");
// console.log(dishes);
//pop
dishes.pop();
//unShift
dishes.unshift("chicken 65");

//shift
dishes.shift();

//sort
dishes.sort();

//reverse

dishes.reverse();

//length
dishes.length;

//last element 
dishes[dishes.length - 1];

//copy of array
let newDishes = dishes;
dishes.push("icecream");

//splice
dishes.splice(1, 0, "mutton kabab");
console.log(dishes);

// trying to access index out of array

console.log(dishes[10]);

//indexof
console.log(dishes.indexOf("mutton kabab"));
