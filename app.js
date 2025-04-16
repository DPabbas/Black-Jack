/* let name = "linda"
let greeting = "Hi there"

function callname (){
    console.log( greeting + " " + name)
} */



/* let mypoint = 3

function addpoints(){
    mypoint += 3
    console.log(mypoint)
}
function removepoint(){
    mypoint -= 1
    console.log(mypoint)

} */


/* let paragraph = document.getElementById("error")

function finderror(){

    paragraph.textContent = "Something went worng, Try again Later"
} */


/* let num1 = 8
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

//functions 

let sum = document.getElementById("sum-El")

function add() { 
    num3 = num1+num2
    sum.textContent = "Sum :" + num3
}
function substrac() { 
    num3 = num1-num2
    sum.textContent = "Sum :" + num3
}
function divide() { 
    num3 = num1/num2
    sum.textContent = "Sum :" + num3
}
function multupy() { 
    num3 = num1*num2
    sum.textContent = "Sum :" + num3
}
function reset() {
    sum.textContent = "Sum :" 
} */

                                                  // blackjack game

 let fristCard = 4
 let secondCard = 6

 let sum = fristCard + secondCard 

 //cash out
 let hasBlackjack = false

 //alive
 let isAlive = true

 //remember the answer
 let massage = ""

 //show sum of two num
 let sumEl = document.getElementById("sum-el")
 sumEl.textContent += sum

 //show card on duct
 let cardEl = document.querySelector("#card-el")
 cardEl.textContent += fristCard + "," + secondCard 

 //new card option
 
 function newCard() {
     // new card var
    let card = 10
     sum += card
    startGame()
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + fristCard + "," + secondCard + "," + card 

 }
 
 // game function 
function startGame() {
   
if(sum <= 20) {
    massage = "do you wanat new card ?"

}

else if (sum === 21) {
    massage = "wohoo, you win"
    hasBlackjack = true
}

else {
    massage = "damm you are out of game !"
    isAlive = false
}


 //remember the answer and show it in duct
let massageEl = document.getElementById("massage-el")
massageEl.textContent = massage
}

// cash out 



















