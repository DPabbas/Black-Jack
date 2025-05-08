                                                  // blackjack game
// befor the player click the start game can see the num because it we don need these two let and 
// and put sum let = 0 / and allCard let = []
// put isAlive to false frist then in startgame(), equal it to true

// player object
let player = {

    name: "Abbas: ",
    chips: 2900
}

/*  let fristCard = getRanmodCard()
 let secondCard = getRanmodCard() */

 let sum = 0 /* fristCard + secondCard  */

//put var to the array 
let allCard = []/* [ fristCard, secondCard] */

//remember the answer
let massage = ""

//cash out
 let hasBlackjack = false

//alive
 let isAlive = false

//show sum of two num
let sumEl = document.getElementById("sum-el")

//show card on duct
let cardEl = document.querySelector("#card-el")

//remember the answer and show it in duct
let massageEl = document.getElementById("massage-el")

// show name and chips of player
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " $" + player.chips


//creat the function that return random card
function getRanmodCard (){
    // 1 = ace = 11
    // j,q,k = 10
    let randomCard = Math.floor( Math.random()* 13) + 1

    if( randomCard === 1 ){
        return 11
    }
    else if( randomCard > 10){
        return 10
    } 
    else{
        return randomCard
    }

    
}


//start game function 
function startGame() {

    // because the frist comment I define two random number and Re-assign the sum and allCard and 
    //put isAlive = true

    isAlive = true

    let randomNumber1 = getRanmodCard()

    let randomNumber2 = getRanmodCard()


    sum = randomNumber1 + randomNumber2

    allCard = [randomNumber1,randomNumber2]

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

    // this logical operator is for avoiding repeat and active at the frist
    
    if ( isAlive === true && hasBlackjack === false){

    
    // new card var
        let card = getRanmodCard()
    //

        sum += card

    //push third card to array
        allCard.push(card)
    //
    
    renderGame()
        } 
    }

