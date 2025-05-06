//return function in var//
let player1 = 205
let player2 = 205

function winer (){
 if ( player1 < player2){
    return "player 1 is winner"
 } 
 else if ( player2 < player1){
    return "player 2 is winner"
 }
 else{
    return"break even"
 }

}

function tatolRaceTime (){
    let total =  player1 + player2
    return "Total race time = " + total
}

/* let resultEl = document.getElementById("result-el")
resultEl.textContent = winer() */


let resultEl = document.getElementById("result-el")
resultEl.textContent = tatolRaceTime()