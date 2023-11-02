let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2

let sumEl= document.getElementById("sum-e")
function add(p) {
    let result= num1+num2
    sumEl.textContent ="Sum: "+ result
    
}
function sub(params) {
    let result= num1-num2
    sumEl.textContent ="Sum: "+ result
}
function div(params) {
    let result= num1/num2
    sumEl.textContent ="Sum: "+ result
}

function mul(params) {
    let result= num1*num2
    sumEl.textContent ="Sum: "+ result
}