const stars = document.querySelector("#stars");
const guess1 = document.querySelector("#guess1");
const guess2 = document.querySelector("#guess2");
const guess3 = document.querySelector("#guess3");
const guess4 = document.querySelector("#guess4");
const guess5 = document.querySelector("#guess5");
const resultBox = [guess1, guess2, guess3, guess4, guess5];
const indicator1 = document.querySelector("#indicator1");
const indicator2 = document.querySelector("#indicator2");
const indicator3 = document.querySelector("#indicator3");
const indicator4 = document.querySelector("#indicator4");
const indicator5 = document.querySelector("#indicator5");
const indicatorBox = [indicator1, indicator2, indicator3, indicator4, indicator5];
const guess = document.querySelector("input");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const replay = document.querySelector("#playAgain");
const hint = document.querySelector("#hint");
const hint1 = document.querySelector("#hint1");
const hint2 = document.querySelector("#hint2");

let aim;
let guesses = [];
let hints = 0;

function init () {
    aim = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    hints = 0;
}

init();

submit.addEventListener("click", checkGuess);
replay.addEventListener("click", playAgain);
reset.addEventListener("click", resetGame);
hint.addEventListener("click", giveHint);

function checkGuess () {
    if (guesses.includes(guess.value) || guess.value == "") {
        guess.value = "";
        return;
    }

    if (guesses.length < 5) guesses.push(guess.value);
    
    let pos = guesses.length - 1;
    resultBox[pos].textContent = guesses[pos];
    if (guesses[pos] != aim && pos < 4) {
        resultBox[pos].className = "guessWrong";
        if (guesses[pos] > aim) indicatorBox[pos].innerHTML = '<img src="img/up.png" width="30px"/>';
        else indicatorBox[pos].innerHTML = '<img src="img/down.png" width="30px"/>';
    } else if (guesses[pos] == aim) {
        resultBox[pos].className = "guessWin";
        indicatorBox[pos].innerHTML = '<img src="img/right.png" width="30px"/>';
        guess.disabled = true;
        const star = new Image(60, 60);
        star.src = "img/starPurple.png";
        star.className = "star";
        stars.appendChild(star);
    } else {
        guess.disabled = true;
        resultBox[pos].className = "guessLose";
        indicatorBox[pos].innerHTML = '<img src="img/wrong.png" width="30px"/>';
    }
    guess.value = "";
}

// reset the game while keeping the stars
function playAgain () {
    for (let i = 0; i < 5; i++) {
        resultBox[i].textContent = "";
        resultBox[i].className = "guess";
        indicatorBox[i].textContent = "";
    }
    guess.disabled = false;
    hint1.textContent = "";
    hint2.textContent = "";
    init();
}

// reset everything including the stars
function resetGame () {
    playAgain();
    stars.innerHTML = "";
}

// provides 2 hints with 2 clicks on the Hint button
function giveHint () {
    const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
        53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    if (hints == 0) {
        let hint1Text;
        if (aim % 2 == 0 && aim != 2) hint1Text = "It is an even number.";
        else if (primeArray.includes(aim)) hint1Text = "It is a prime number.";
        else hint1Text = "It is an odd number but not a prime number."
        hint1.textContent = hint1Text;
        hints++;
    } else if (hints == 1) {
        let hintArray = [];
        while (hintArray.length < 10) {
            let num = Math.floor(Math.random() * 100) + 1;
            if (!hintArray.includes(num)) hintArray.push(num);
        }
        if (!hintArray.includes(aim)) hintArray[Math.floor(Math.random() * 10) + 1] = aim;
        hint2.textContent = "It is a number inside [" + hintArray + "].";
        hints++;
    }    
}



