const button = document.getElementById('button1')
const button2 = document.getElementById('button2')
const counterDisplay = document.getElementById('display')
let counter = 0

button.addEventListener("click", farmer)
button2.addEventListener("click", dark)

function farmer(){
    counter++
    counterDisplay.innerText = counter;
}

function dark(){
    document.body.classList.toggle('darkmode');
}
