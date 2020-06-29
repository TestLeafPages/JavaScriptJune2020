//function Declaration
function cookDosa() {
    console.log("Dosa is Ready...");
}
cookDosa();//function call

//Function Expression
var cookDosa = function cook(num) {
    console.log(num + " Dosa is Ready..");
}
cookDosa(5);

//Arrow Function
howManyDosas = (num) => {
    console.log(num + " Dosa is Ready..");

}
howManyDosas(5);