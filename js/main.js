'use strict';

/* HTML:
    - select: dado
    - input: apuesta
    - button: Jugar
    - Frase apuesta
    - Saldo inicial/actual
  
   CSS:
    - (No prioritario) Estilos:
        - h1
        - p
        - Select dado
        - Input apuesta 
        - Button jugar
        - Frase apuesta
        - QSaldo inicial/actual

   JS: 
    - CQS: 
        - Select
        - Input
        - Button Jugar
        - Frase apuesta
        - QSaldo
    
    - EVENTOS: 
        - click en Jugar
    
    - FUNCIONES: 
        - getRandomNumber

        - EVENTO CLICK:
            - Obtener value select
            - Guardar el valor random en una variable
            - Comparar value con getRandomNumber
            - Cambiar frase apuesta con el resultado:
                - Ganas: Has ganado...
                - Pierdes: Has perdido...
            
            - Actualizar saldo:
                - Tomar value del input apuesta
                - Ganas: multiplica la apuesta * 2 y la suma a saldo
                - Pierdes: Resta la apuesta a saldo.

*/

console.log('holi');

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

function winnerBet () {
    let bet = parseInt(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
    if (isNaN(bet)) { 
        bet = 0;
        betMsg.innerHTML = `Tienes que introducir una apuesta`;
    };
    balance.innerHTML = initialBalance + (bet * 2);
}

function loserBet () {
    const bet = parseInt(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
    if (isNaN(bet)) { 
        bet = 0;
        betMsg.innerHTML = `Tienes que introducir una apuesta`;
    };
    balance.innerHTML = initialBalance - bet;
}

function updateBalance() {
    const dice = parseInt(diceSelect.value);    
    const randomNumber = getRandomNumber(1);
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
    console.log('Avengers, ¡Assemble!');
    if (balance.innerHTML >= 200) {
        endGameMsg.innerHTML = `<p>¡Has ganado a la máquina! Recoge tu premio de ${balance.innerHTML} monedas.</p>`
    } else if (balance.innerHTML <= 0) {
        endGameMsg.innerHTML = `¡Vaya! Te ha ganado la máquina. No te olvides de pasar por caja y pagarnos lo que nos debes 🙂`;
    }
}

function resetGameBtn() {
    console.log('Thanos chasqueó los dedos');
    if (balance.innerHTML >=200) {
        resetBtn.classList.remove('hidden');
        playBtn.classList.add('hidden');
    }
}

function handleclickReset(ev) {
    window.location.reload();
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
