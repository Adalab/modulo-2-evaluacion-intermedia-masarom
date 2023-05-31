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


//FUNCIONES

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

function winnerBet () {
    const bet = parseInt(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
    balance.innerHTML = initialBalance + (bet * 2);
}

function loserBet () {
    const bet = parseInt(betInput.value);
    const initialBalance = parseInt(balance.innerHTML);
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

function handleClick (ev) {
    ev.preventDefault();
    updateBalance();
};

// EVENTO
playBtn.addEventListener('click', handleClick);

