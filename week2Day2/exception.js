/* 
function handleException(round) {
    if (round >= 0 && round < 101) {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } else {
        throw new SyntaxError("Change your number");
    }

}
 */
/* function handleException(round) {
    try {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } catch (error) {
        console.error("Not a valid range...");
        console.error(error.stack);
    }
} */

/* function handleException(round) {
    try {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } catch {}
} */

/* function handleException(round) {
    try {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } catch (error) {
        console.error("Range Issue...")
    } finally {
        console.log("I'm Done...");
    }
} */
function handleException(round) {
    if (round >= 0 && round < 101) {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } else {
        throw new NewException();
    }

}

class NewException {
    constructor() {
        console.log("This is customized exception...");

    }
}

handleException(101);
