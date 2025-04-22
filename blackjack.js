                                                  // blackjack game

 let fristCard = 10
 let secondCard = 6

 let sum = fristCard + secondCard 

//put var to the array 
let allCard = [ fristCard, secondCard]

//remember the answer
let massage = ""

//cash out
 let hasBlackjack = false

//alive
 let isAlive = true

//show sum of two num
let sumEl = document.getElementById("sum-el")

//show card on duct
let cardEl = document.querySelector("#card-el")

//remember the answer and show it in duct
let massageEl = document.getElementById("massage-el")
 

//start game function 
function startGame() {
    renderGame()
}
 

// game function 
function renderGame() {


for( let i = 0; i < allCard.length; i++)
{
cardEl.textContent += allCard[i] + " "
}

   
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

sumEl.textContent = "Sum: " + sum
massageEl.textContent = massage

}



//new card option
function newCard() {

    // new card var
        let card = 11
    //

    //push third card to array
        allCard.push(card)

        sum += card

        renderGame()

        sumEl.textContent = "Sum: " + sum 
        cardEl.textContent = "Cards: " + [allCard] + " "
        
    }

