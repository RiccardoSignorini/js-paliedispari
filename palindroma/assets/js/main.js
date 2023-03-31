/*
--PROBLEMA--
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// COSTANTI
let word = document.querySelector('#input').value;

const button = document.querySelector('#button');

let risposta = document.querySelector('#risposta')

// FUNZIONE BOTTONE
button.addEventListener('click', function() {

    word = document.querySelector('#input').value;

    risposta = document.querySelector('#risposta')
    // FUNZIONE
    function reverse(word){ //ciao
        let reverseWord = ''

        for(let i=word.length-1; i>=0; i--){

            reverseWord += word[i]
        }
        return reverseWord
    }

    let palindroma = reverse(word)
    console.log(palindroma)

    // STAMPA IN PAGINA
    if(word==palindroma){
        risposta.innerHTML = `<p>La parola ${word} è palindroma!</p>`    
    } else {
        risposta.innerHTML = `<p>La parola ${word} non è palindroma!</p>` 
    }

})

/*
-input text per far scrivere una parola all'utente(word)
-button per far partire il ciclo
-se (word) al contrario = (word)
    allora la parola è palindroma --> scrivere in pagina che (word) è palindroma
-se (word) al contrario != (word)
    allora la parola non è palindroma --> scrivere in pagina che (word) non è palindroma
*/