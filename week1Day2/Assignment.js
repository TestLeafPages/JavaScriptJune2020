//print unique Characters

let str = "paypal";
let unq = "";
for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
        unq += str[i];
    }
}
console.log(unq);


//Anagram

let value1 = "listen";
let value2 = "silent";

if (value1.length !== value2.length) {
    console.log(false);
} else {
    let str1 = value1.split("").sort().join("");
    let str2 = value2.split("").sort().join("");
    console.log(str1 === str2)
}