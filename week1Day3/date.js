//getting tomorrow Date
let now = new Date("2020-06-30");

let tom = now.getDate() + 1;

let tomDate = now.setDate(tom);

let nextDate = new Date(tomDate);

console.log(nextDate);
