/*
--PROBLEMA--
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let choise = document.querySelector('#choise');
let num1 = parseFloat( document.querySelector('#num').value );

// FUNZIONE NUMERO RANDOM
function randomNum(min, max){
    return Math.floor(Math.random()*max) + min;
}

const play = document.querySelector('button')

play.addEventListener('click', function() {
    choise = document.querySelector('#choise');
    num1 = parseFloat( document.querySelector('#num').value );
    
    let num2 = randomNum(1, 5)
    // SCEGLIE PARI
    if(choise = 'Pari'){
        // SE VINCE
        if((num1+num2)%2==0){
            // SCELTA UTENTE
            document.querySelector('#printchoise').innerHTML = '<span>La tua scelta: Pari</span>'
            // NUMERO UTENTE
            document.querySelector('#usernumber').innerHTML = `<span>Il tuo numero: ${num1}</span>`
            // NUMERO PC
            document.querySelector('#pcnumber').innerHTML = `<span>Numero PC: ${num2}</span>`
            // RISULTATO
            document.querySelector('#results').innerHTML = '<span>Risultato: Hai Vinto!</span>'  
        }
        // SE PERDE
        if((num1+num2)%2!=0){
            // SCELTA UTENTE
            document.querySelector('#printchoise').innerHTML = '<span>La tua scelta: Pari</span>'
            // NUMERO UTENTE
            document.querySelector('#usernumber').innerHTML = `<span>Il tuo numero: ${num1}</span>`
            // NUMERO PC
            document.querySelector('#pcnumber').innerHTML = `<span>Numero PC: ${num2}</span>`
            // RISULTATO
            document.querySelector('#results').innerHTML = '<span>Risultato: Ha vinto il PC!</span>' 
            }

    // SCEGLIE DISPARI
    } else if(choise = 'Dispari'){
        // SE VINCE
        if((num1+num2)%2!=0){
            // SCELTA UTENTE
            document.querySelector('#printchoise').innerHTML = '<span>La tua scelta: Dispari</span>'
            // NUMERO UTENTE
            document.querySelector('#usernumber').innerHTML = `<span>Il tuo numero: ${num1}</span>`
            // NUMERO PC
            document.querySelector('#pcnumber').innerHTML = `<span>Numero PC: ${num2}</span>`
            // RISULTATO
            document.querySelector('#results').innerHTML = '<span>Risultato: Hai Vinto!</span>'    
        }       
        // SE PERDE
        if((num1+num2)%2==0){
            // SCELTA UTENTE
            document.querySelector('#printchoise').innerHTML = '<span>La tua scelta: Dispari</span>'
            // NUMERO UTENTE
            document.querySelector('#usernumber').innerHTML = `<span>Il tuo numero: ${num1}</span>`
            // NUMERO PC
            document.querySelector('#pcnumber').innerHTML = `<span>Numero PC: ${num2}</span>`
            // RISULTATO
            document.querySelector('#results').innerHTML = '<span>Risultato: Ha vinto il PC!</span>' 
            }
    }
})


/*
input text per scelta pari o dispari

input number per la scrittura di un numero(num1)

generare un numero casualmente(num2):
-ha selezionato pari
    se (num1+num2) diviso 2 = 0 allora ha vinto
    se (num1+num2) diviso 2 != 0 allora ha perso
-ha selezionato dispari
    se (num1+num2) diviso 2 != 0 allora ha vinto
    se (num1+num2) diviso 2 = 0 allora ha perso
*/