// console.log('23' - '10' - 3)
// console.log('23' / '2')
// console.log('10' * '10')
// console.log('10' ** '10' + '1')

/*
Note - 
Type Coerion is done only 
when pulse (+) operator is applied

For ex-
"I am " + 23 + " old "
O/P- I am 23 old

*/



console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))



// const num1= parseInt(prompt("Enter the value of this number"))
// console.log(num1)

var A= false
var B = true

console.log(!A)
console.log(A && B)
console.log(A || B)
console.log(!A && B)
console.log(A || !B)
console.log(!A && !B)
console.log(!A || !B)

/*
true
false
true
true
false
false
true
*/

//Switch 

let case1 = Number(prompt("Enter the case value"));

switch (case1) {
    case 1:
        console.log("Case 1 satisfied");
        break;

    case 2:
        console.log("Case 2 satisfied");
        break;

    default:
        console.log("Please check the input");
        break;
}


