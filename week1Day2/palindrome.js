var data = "madam";
let reversedString = data.split("").reverse().join("");
console.log(reversedString);
if (data === reversedString) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}