
// get random number from 1 to 6 like a diec 

function rolldiec (){

    // floor = just compelet number like 1.2.3.4... (with out decimal)
    // random = num between 0.000 to 0.999 (not 1)
    // random()*6 = num between 0.000 to 5.999 (not 6)
    // floor(Math.random()*6) + 1 = increase 1 unit to above function with out decimal (1.2.3.4.5.6)

    let randomnumber = Math.floor(Math.random()*6) + 1

    return randomnumber
}


let rolldiecEl = document.getElementById("rolldiec-el")
rolldiecEl.textContent = "Your random number is: " + rolldiec()