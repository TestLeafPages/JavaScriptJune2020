
var dosa = 0;
function cookDosa(n) {
    if (n == 0) {
        console.log(dosa + " Dosa is Ready..");
    } else {
        dosa++;
        return cookDosa(n - 1);
    }
}

cookDosa(5);

//2^3
/*
fibanocci Series
factorial
*/
















// var quantity = 0;
// function cookDosa() {
//     console.log(" Dosa");
//     return () => {
//         console.log("Vada");
//     }
// }
// cookDosa()
// cookDosa()
// cookDosa()
// cookDosa()
