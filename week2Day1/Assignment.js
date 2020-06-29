// 1) Change Even Characters in a String
let str = "Chennai";
let eachChar = str.split("");
let array1 = [];
let char;
for (let i = 0; i < eachChar.length; i++) {
    if (i % 2 === 0) {
        char = eachChar[i].toUpperCase();
    } else {
        char = eachChar[i].toLowerCase();
    }
    array1.push(char);
}
console.log(array1.join(""))

// 2) Find the largest number among three numbers

let arr = [90, 13, 67];

let sort = arr.sort((a, b) => a - b)
console.log(sort.shift());
console.log(sort.pop());

// 3) Find a given number is a prime number or not
let input = 13;
let flag = true;
for (let i = 2; i < input; i++) {
    if (input % i == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log("It is a prime Number");
} else {
    console.log("It is Not a prime Number");
}

// 4) Print Fibonacci Series for a range of 8
let Fibonacci = [0, 1];
for (let i = 1; i < 10; i++) {
    Fibonacci.push(Fibonacci[i] + Fibonacci[i - 1]);
}
console.log(Fibonacci);


// 5) Reverse a sentence's words alone
let sentence = "Welcome to Chennai City";
let word = sentence.split(" ");
console.log(word.reverse().join(" "));

// 6) Print the Factorial of any given input

let n = 5;
let answer = 1;
if (n == 0 || n == 1) {
    console.log(answer);
} else {
    for (let i = n; i >= 1; i--) {
        answer = answer * i;
    }
    console.log(answer);

}
