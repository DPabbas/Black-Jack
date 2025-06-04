
// logical operator means that you write an if inside another if 

// if a player could not solved the challenge and has no chance then show the solution

let hasSolvedChallenge = false

let hasHintsLeft = false

function showSolution (){

    // we can write it in two ways
    // in this case we use && operator, we also can use || (ABOVE ENTER BTN IN KEYBOARD) operator

    if( hasSolvedChallenge === false && hasHintsLeft === false){

        return "The Solution is ....."
    }

/*     if( hasSolvedChallenge === false){
        if(hasHintsLeft === false){
            return "The Solution is ....."
        }
    } */
}

let solutionEl = document.getElementById("solution-el")
solutionEl.textContent = showSolution()