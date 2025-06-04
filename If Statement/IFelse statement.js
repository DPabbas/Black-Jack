

// check the passenger age, if

// less than 6 = free
// 6 to 17 = child discount 
// 18 to 26 = student discount 
// 27 to 66 = full price 
// over 66 = senior citizen discount


let age = Math.floor(Math.random() *80) + 1 //or a hard let like 15 or.....

let result = ""

if( age < 6 ){
    
     result = "It is FREE"

} else if ( age < 18) {

     result = "It is child discount"

}else if ( age < 27 ) {

     result = "It is student discount"

}else if ( age < 67 ) {

     result = "It is full price"

}else {

     result = "It is senior citizen discount"

}

let ageEl = document.getElementById("age-el")
ageEl.textContent = age

let discountEl = document.getElementById("discount-el")
discountEl.textContent = result