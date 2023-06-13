'use strict';

// VARIABLES GLOBALES

const diceSelect = document.querySelector('.js_dice');
const betInput = document.querySelector('.js_bet');
const playBtn = document.querySelector('.js_play');
const betMsg = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');
    // correction: use a global variable to store user balance
let userBalance = 50;

    // Bonus
const endGameMsg = document.querySelector('.js_endgame');
const resetBtn = document.querySelector('.js_reset');

//FUNCIONES

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

// correction: use a function to simplify innerHTML code
function writeHTML (el, string){
    return el.innerHTML = string;
}

// correction: changing parseInt to parseFloat in bet
function winnerBet () {
    let bet = parseFloat(betInput.value);
    if (isNaN(bet)) { 
        bet = 0;
        writeHTML(betMsg, `Tienes que introducir una apuesta`);
    };
    userBalance = userBalance + (bet * 2);
    balance.innerHTML = userBalance;
}

function loserBet () {
    let bet = parseFloat(betInput.value);
    if (isNaN(bet)) { 
        bet = 0;
        writeHTML(betMsg, `Tienes que introducir una apuesta`);
    };
    userBalance = userBalance - bet;
    balance.innerHTML = userBalance;
}

function updateBalance() {
    const dice = parseInt(diceSelect.value);    
    const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    if(dice === randomNumber) {
        writeHTML(betMsg, `Has ganado el doble de lo apostado 😄`);
        winnerBet();
    } else {
        writeHTML(betMsg, `Has perdido lo apostado 😫`);
        loserBet();
    }
}

    //Bonus
function endGame () {
    if (balance.innerHTML >= 200) {
        writeHTML(
          endGameMsg,
          `<p class="hidden__message--text">¡Has ganado a la máquina! Recoge tu premio de ${balance.innerHTML} monedas.</p>`
        );
    } else if (balance.innerHTML <= 0) {
        writeHTML(
          endGameMsg,
          `<p class="hidden__message--text">¡Vaya! Te ha ganado la máquina. No te olvides de pasar por caja y pagarnos lo que nos debes 🙂</p>`
        );
    }
}

function resetGameBtn() {
    if (balance.innerHTML >=200) {
        resetBtn.classList.remove('hidden');
        playBtn.classList.add('hidden');
    }
}
// correction: change window reload to default values
function handleclickReset(ev) {
    diceSelect.value = 'number';
    betInput.value = '';
    balance.innerHTML = '50';
    endGameMsg.innerHTML = '';
    playBtn.classList.remove('hidden');
    resetBtn.classList.add('hidden');
}

function handleClick (ev) {
    ev.preventDefault();
    updateBalance();
    endGame();
    resetGameBtn();
};

// EVENTO
playBtn.addEventListener('click', handleClick);

resetBtn.addEventListener('click', handleclickReset);
