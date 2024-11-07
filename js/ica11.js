

const button = document.getElementById('button');

const child = document.getElementById('child');
const part = document.getElementById('part');
const loc = document.getElementById('loc');
const job = document.getElementById('job');

const fortune = document.getElementById('fortune');


function childentry(input1){
    var x = childentry(input1.value);
}

function partentry(input2){
    var y = partentry(input2.value);
}

function locentry(input3){
    var z = locentry(input3.value);
}

function jobentry(input4){
    var n = jobentry(input4.value);
}

function tellFortune(x,y,z,n){
    fortune.innerText = "this is"+x+"and"+y+"and"+z+"and"+n;
}

button.addEventListener('click', () => {
    childentry();
    partentry();
    locentry();
    jobentry();
    tellFortune(x,y,z,n);
})
