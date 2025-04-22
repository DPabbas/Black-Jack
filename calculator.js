

                                                        //caculate to number 

let num1 = 8
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

//functions 

let sum = document.getElementById("sum-El")

function add() { 
    num3 = num1+num2
    sum.textContent = "Sum :" + num3
}
function substrac() { 
    num3 = num1-num2
    sum.textContent = "Sum :" + num3
}
function divide() { 
    num3 = num1/num2
    sum.textContent = "Sum :" + num3
}
function multupy() { 
    num3 = num1*num2
    sum.textContent = "Sum :" + num3
}
function reset() {
    sum.textContent = "Sum :" 
}