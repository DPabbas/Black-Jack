                                                    //here we use for loop and array togheder

// this section has own html (section 1)
// we take sentence array and put it in greeting-el in document

let sentence = ["hello","my","name","is","Abbas"]
let greetingEl = document.getElementById("greeting-el");

for( let i = 0 ; i < sentence.length; i++) {
    
    greetingEl.textContent += sentence[i] + " ";
}