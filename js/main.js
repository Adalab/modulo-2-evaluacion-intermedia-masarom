'use strict';

// VARIABLES GLOBALES

const diceSelect = document.querySelector('.js_dice');
const betInput = document.querySelector('.js_bet');
const playBtn = document.querySelector('.js_play');
const betMsg = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');

    // Bonus
const endGameMsg = document.querySelector('.js_endgame');
const resetBtn = document.querySelector('.js_reset');

//FUNCIONES

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}
// correction: changing parseInt to parseFloat in bet
function winnerBet () {
    let bet = parseFloat(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
    if (isNaN(bet)) { 
        bet = 0;
        betMsg.innerHTML = `Tienes que introducir una apuesta`;
    };
    balance.innerHTML = initialBalance + (bet * 2);
}

function loserBet () {
    const bet = parseFloat(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
    if (isNaN(bet)) { 
        bet = 0;
        betMsg.innerHTML = `Tienes que introducir una apuesta`;
    };
    balance.innerHTML = initialBalance - bet;
}

function updateBalance() {
    const dice = parseInt(diceSelect.value);    
    const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    if(dice === randomNumber) {
        betMsg.innerHTML = `Has ganado el doble de lo apostado 😄`;
        winnerBet();
    } else {
        betMsg.innerHTML = `Has perdido lo apostado 😫`;
        loserBet();
    }
}

    //Bonus
function endGame () {
    if (balance.innerHTML >= 200) {
        endGameMsg.innerHTML = `<p class="hidden__message--text">¡Has ganado a la máquina! Recoge tu premio de ${balance.innerHTML} monedas.</p>`
    } else if (balance.innerHTML <= 0) {
        endGameMsg.innerHTML = `<p class="hidden__message--text">¡Vaya! Te ha ganado la máquina. No te olvides de pasar por caja y pagarnos lo que nos debes 🙂</p>`;
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
