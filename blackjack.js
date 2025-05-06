                                                  // blackjack game

 let fristCard = getRanmodCard()
 let secondCard = getRanmodCard()

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
 

//creat the function that return random card
function getRanmodCard (){
    
    return Math.floor( Math.random()* 13) + 1 
}


//start game function 
function startGame() {

    renderGame()
}
 

// game function
function renderGame() {

cardEl.textContent = "Cards: "
for( let i = 0; i < allCard.length; i++)
{
cardEl.textContent += allCard[i] + " "
}

sumEl.textContent = "Sum: " + sum

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

massageEl.textContent = massage

}



//new card option
function newCard() {

    // new card var
        let card = getRanmodCard()
    //

        sum += card

    //push third card to array
        allCard.push(card)
    //
    
    renderGame()
        
    }

