// Funzione per aggiornare il DOM
function updateNumberDisplay() {
    document.querySelector("[data-number]").textContent = number;
}

// Funzioni per gestire il contatore (funioni di callback)
function plusOne() {
    number++;
    updateNumberDisplay();
}

function minusOne() {
    number--;
    updateNumberDisplay();
}

function reset() {
    number = 0;
    updateNumberDisplay();
}

// Variabile globale per tenere traccia del numero
let number;

// Inizializzazione del counter
reset();

// Definisci i bottoni
let plusButton = document.querySelector("[data-plus]");
let minusButton = document.querySelector("[data-minus]");
let resetButton = document.querySelector("[data-reset]");

// Event listeners
plusButton.addEventListener('click', plusOne);
minusButton.addEventListener('click', minusOne);
resetButton.addEventListener('click', reset);