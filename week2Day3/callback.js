//callback function will
//be executed after another function get executed
/* 
 sam need to give money for bowya
 babu borrowed money from sam
 scenario 1: babu deposit -  bowya will get money 
 Scenario 2: babu doesnot deposit - bowya will not get money
 scenario 3: both goes to bank same time(micromilliseconds)
*/

function credit(creditAmount, result) {
    setTimeout(() => {
        result(creditAmount - 2000);
    }, 2000);
}

function debit(debitAmount) {
    return debitAmount;
}

credit(10000, amt => {
    console.log(`Amount of ${amt} is Credited...`);
    console.log(debit(5000));
})

// console.log(credit(10000));
// console.log(debit(5000));

