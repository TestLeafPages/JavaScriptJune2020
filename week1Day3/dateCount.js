let date = new Date("2020-06-24");

//find last day of the month
let year = date.getFullYear();
let month = date.getMonth();

let newDate = new Date(year, month + 1, 0);

console.log(newDate.getDate());

