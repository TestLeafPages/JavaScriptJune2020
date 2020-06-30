//Fatorial
function factorial(x) {
    if (x == 0 || x == 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(5));


//fibanocci series
//0,1,1,2,3,5
var fib = function (n) {
    if (n == 1) {
        return [0, 1];
    } else {
        var s = fib(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

console.log(fib(5));















