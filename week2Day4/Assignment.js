//verify two string using promise

var promise = new Promise((resolve, reject) => {
    const x = "TestLeaf";
    const y = "Software";
    if (x == y) {
        resolve();
    } else {
        reject();
    }
})

// promise.then(() => {
//     console.log("Success");
// }).catch(() => {
//     console.log("Failure");
// })

//

let arrayWords = ["cucumber", "tomotos", "avacado"];
let complicated = ["cucumber", 12, true];

let makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {
            if (typeof word === "string") {
                return word.toUpperCase();
            } else {
                reject("Error");
            }
        })
        resolve(capsArray);
    })
}


makeAllCaps(complicated).then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
})