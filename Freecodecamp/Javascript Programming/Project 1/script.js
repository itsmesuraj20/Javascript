
let countEl= document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
 let count=0
function increment()
{
    count +=  1
    countEl.textContent = count;
}
function save()
{
    let countStr= count + " -"
    saveEl.textContent +=countStr
    countEl.textContent = 0;
    count = 0 
}


console.log("Let's count the people in the railway station")





//recap
//Script tag
//variables
//number
//string
//console.log()
//getElementByID
//textContent
