


// creat a object then creat a function that use the objects key/values in a string 


let person ={

    name: "Abbas",
    age: 25,
    country: "Iran"
}

function logData() {

    return (person.name + " is " + person.age + " years old and live in " + person.country + ".")

}


let personEl = document.getElementById("log-el")
personEl.textContent = logData()