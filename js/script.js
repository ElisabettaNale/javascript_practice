///////////////////////////////////////////////////////////////
// Funzioni   
///////////////////////////////////////////////////////////////

// Funzione per creare un pulsante 
function createButton(text, styles) {
    let button = document.createElement('button');
    button.textContent = text;
    button.style.margin = "5px";
    button.style.height = styles["height"];
    button.style.width = styles["width"];
    button.style.fontSize = styles["fontSize"];
    button.style.fontWeight = "bold";
    button.style.border = styles["border"];
    button.style.borderRadius = "10%";
    button.style.backgroundColor = styles["backgroundColor"];
    button.style.color = "#465038";
    button.style.cursor = "pointer";
    button.style.transition = styles["transition"];
    return button;
}

// Funzione per gestire gli eventi di click sui pulsanti
function handleButtonClick(event) {
    if (event.target === plusButton) {
        number.textContent++;
    } else if (event.target === minusButton) {
        number.textContent--;
    } else if (event.target === resetButton) {
        number.textContent = 0;
    }
}

// Funzione per gestire l'hover sui pulsanti
function handleHover(event, hover) {
    let target = event.target;
    if (target === plusButton || target === minusButton) {
        target.style.transform = hover ? 'scale(0.9)' : 'scale(1)';
    } else if (target === resetButton) {
        resetButton.style.backgroundColor = hover ? "#fbc8a2" : "#f9ddad";
        resetButton.style.fontSize = hover ? "20px" : "18px";
    }
}


///////////////////////////////////////////////////////////////
// STRUTTURA DOM   
///////////////////////////////////////////////////////////////

// Recupera counter
let counter = document.querySelector(".counter");

// Crea, inizializza e aggiungi number
let number = document.createElement("div");
number.textContent = 0;
number.style.marginBottom = "40px";
number.style.fontSize = "50px";
counter.appendChild(number);

// Crea, inizializza e aggiungi i pulsanti +/-
let buttons = document.createElement("div");
buttons.style.display = "flex";
buttons.flexDirection = "row";
buttons.marginBottom = "20px";
let plusButton = createButton("+", {height: "50px",
                                    width: "70px",
                                    fontSize: "28px",
                                    border: "#fbc8a2 3px solid",
                                    backgroundColor: "#fbc8a2",
                                    transition: "0.5s"}
)
let minusButton = createButton("-", {height: "50px",
                                     width: "70px",
                                     fontSize: "28px",
                                     border: "#fbc8a2 3px solid",
                                     backgroundColor: "#fbc8a2",
                                     transition: "0.5s"}
)
counter.appendChild(buttons);
buttons.appendChild(plusButton);
buttons.appendChild(minusButton);

// Crea, inizializza e aggiungi il pulsante reset
let resetButton = createButton("RESET", {height: "40px",
                                         width: "100px",
                                         fontSize: "18px",
                                         border: "#fbc8a2 1px solid",
                                         backgroundColor: "#f9ddad",
                                         transition: "0.8s"}
)
counter.appendChild(resetButton);


///////////////////////////////////////////////////////////////
// EVENTI    
///////////////////////////////////////////////////////////////

// Event listeners per click, mouseover/mouseout
counter.addEventListener('click', handleButtonClick);
counter.addEventListener('mouseover', (event) => handleHover(event, true));
counter.addEventListener('mouseout', (event) => handleHover(event, false));
