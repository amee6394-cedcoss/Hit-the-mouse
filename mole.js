
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
var x = 0;
var y = 0;
var bgm1=document.getElementById("bgm");
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up'); 
    setTimeout(() => {
        hole.classList.remove('up'); 
        if (!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    bgm1.play();
    if (score >= y) {
        y=x;

        document.getElementById("hs").innerHTML =score;
        console.log(y);
    }
    else {
        console.log("h1")
        document.getElementById("hs").innerHTML = y;
    }
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 20000)
}

function wack(e) {
    if (!e.isTrusted) return;
    score++;
    localStorage.setItem("S",score);
    this.parentNode.classList.remove('up')
    scoreBoard.textContent = score;
    x = localStorage.getItem("S");
    console.log(x);
}

moles.forEach(mole => mole.addEventListener('click', wack))