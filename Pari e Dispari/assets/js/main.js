/*
--PROBLEMA--
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let num1 = parseFloat( document.querySelector('#num').value );
let num2 = Math.floor(Math.random()*5)+1;

const play = document.querySelector('button')
console.log(num2)

play.addEventListener('click', function() {
    
})


/*
-checkbox pari(scelta1)
-checkbox dispari(scelta2)

input number per la scrittura di un numero(num1)

generare un numero casualmente(num2):
-ha selezionato pari
    se (num1+num2) diviso 2 = 0 allora ha vinto
    se (num1+num2) diviso 2 != 0 allora ha perso
-ha selezionato dispari
    se (num1+num2) diviso 2 != 0 allora ha vinto
    se (num1+num2) diviso 2 = 0 allora ha perso
*/