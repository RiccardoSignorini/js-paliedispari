/*
--PROBLEMA--
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let word = document.querySelector('#input').value;

const button = document.querySelector('#button');

const risposta = document.querySelector('#risposta')

button.addEventListener('click', function() {

    word = document.querySelector('#input').value;

    risposta.innerHTML = `<p>${word}</p>`
})
