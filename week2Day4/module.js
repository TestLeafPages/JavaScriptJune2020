/* export - make ur variable or function or the entire class itself
to be accessible outside the current module(file)

node version - v.12.18.2

Two types
1) named export - multiple 
2) default export - single occurence in the entire file
*/


function click() {
    return "Clicked Successfully";
}

function type() {
    return "Typed successfully";
}

function getText() {
    return "Received text successfully";
}
// export default { click, type }
export { click, type, getText }
