///////////////////////////////////////////////////////////////
// Funzioni
///////////////////////////////////////////////////////////////

// Funzione per creare gli elementi del DOM
function createElement(type, css_class, text) {
    
    let element = document.createElement(type);
    element.classList.add(css_class);
    element.textContent = text;

    return element;
}


///////////////////////////////////////////////////////////////
// STRUTTURA DOM   
///////////////////////////////////////////////////////////////

// Inizializza il counter
let counter = document.querySelector(".counter");

// Crea il numero
let number = createElement("div", "number", "0");
counter.appendChild(number);

// Crea il contenitore per i pulsanti
let buttonsContainer = createElement("div", "buttons", "");
counter.appendChild(buttonsContainer);

// Crea i pulsanti +/- 
let plusButton = createElement("button", "button", "+");
let minusButton = createElement("button", "button", "-");
buttonsContainer.appendChild(plusButton);
buttonsContainer.appendChild(minusButton);

// Crea il pulsante reset 
let resetButton = createElement("button", "button-reset", "RESET");
counter.appendChild(resetButton);


///////////////////////////////////////////////////////////////
// EVENTI    
///////////////////////////////////////////////////////////////

// Funzione per gestire gli eventi sui pulsanti
function handleEvent(event) {

    let target = event.target;

    // click
    if (event.type === 'click') {

        if (target === plusButton) {
            number.textContent++;
        } else if (target === minusButton) {
            number.textContent--;
        } else if (target === resetButton) {
            number.textContent = 0;
        }
        target.classList.remove('button-hover');
        target.classList.remove('button-reset-hover');  

    // mouseover/touchstart
    } else if (event.type === 'mouseover' || event.type === 'touchstart') {

        if (target === plusButton || target === minusButton) {
            target.classList.add('button-hover');
        } else if (target === resetButton) {
            target.classList.add('button-reset-hover')
        }
    
    // mouseout/touchend
    } else if (event.type === 'mouseout' || event.type === 'touchend') {

            target.classList.remove('button-hover');
            target.classList.remove('button-reset-hover');  

    }
}

// Event listener per click, mouseover/mouseout, touchstart/toouchend
['click', 'mouseover', 'mouseout', 'touchstart', 'touchend'].forEach(eventType => {
    counter.addEventListener(eventType, handleEvent);
});