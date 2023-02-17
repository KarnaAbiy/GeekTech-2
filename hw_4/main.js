// HOMEWORK 4.1
const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const span = document.getElementById('hone');
let score = 0;

inc.onclick = () => {
    score++;
    span.innerHTML = score
    span.style.color = 'green';

}

dec.onclick = () => {
    if(score > 0){
        span.style.color = 'red';
        score--;
        span.innerHTML = score
    }
    else{
        alert('значение должно быть больше 0');
    }
}


// HOMEWORK 4.2
const btn = document.getElementById('buttn');

btn,addEventListener('click', (e) => {
    console.log(e);
})

const xoc = document.getElementById('x');
const yoc = document.getElementById('y');

xyblock.addEventListener("mousemove", (e) => {
    xoc.innerHTML = e.screenX;
    yoc.innerHTML = e.screenY;
})


// HOMEWORK 4.3
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const askuser = prompt('Введите красный, желтый или зелёный');

if(askuser.toLowerCase() === 'красный'){
    red.style.backgroundColor = "red"
}
else if(askuser.toLowerCase() === 'желтый'){
    yellow.style.backgroundColor = "yellow"
}
else if(askuser.toLowerCase() === 'зелёный'){
    green.style.backgroundColor = "green"
}
else{
    alert("Error")
}
