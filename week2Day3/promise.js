//positive (resolve) & Negative (reject), then
/* Async do not wait for execution to complete 
 */

let getText = new Promise((resolve,reject) => {
    try {
        console.log("Find the element and try to get the text");
        // throw new SyntaxError();
        resolve("Value is LeafTaps");
    } catch (error) {
        reject("Element could not be located");
    }
})

getText.then(str => {
    console.log(str);
}).then(str => {
  console.log("Successfully Executed...");
}).catch(str => {
    console.log(str);
    console.log("Take Snap...");
})


