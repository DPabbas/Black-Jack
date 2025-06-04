

// creat an object that present an airbnb castle

// log out at least two of the keys


let castle = {

    Location: "London, castlestreet",
    roomNumber: 4,
    bio: "chose the best",
    autoRent: false,
    feature: [ "Bathroom", "Garden", "Pool"]

}

let keyEl = document.getElementById("key-el")
keyEl.textContent = ( castle.feature + " " +  castle.roomNumber )