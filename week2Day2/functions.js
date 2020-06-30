//Simple Regular Function

function click(locator) {
    console.log("Find Element " + locator);
    console.log("Perform a click");
    console.log("Click Successful");
}
click("id");


//Function Expression
let wait = function (time) {
    console.log("Sleep for some time " + time);

}
wait(5);
console.log(wait);

setTimeout(function () {
    console.log("Waiting...");
}, 5000);

setTimeout(() => " ", 5000);