let firstCard =21
let secondCard = 16

let sum = firstCard + secondCard;
let check= false
let stillAlive=true

let message=""
let messageEl= document.getElementById("msg-el")
console.log(messageEl)
function startGame(params) {
    if (sum > 21) {
        message="Do you want to draw a new card"
        
    } else if (sum < 21) {
        message="Whoo! You have got the Blackjail"
    } else if (sum === 21) {
        message="you are not of the game "
        check = true;
    } else {
        message="Wrong Answer"
        stillAlive=false;
    }

    messageEl.textContent =message
    
}
//Start - 2:14:06













console.log(check)
