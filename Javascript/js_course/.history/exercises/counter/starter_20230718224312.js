const minusButton = document.querySelector(".counter-descrease");
const plusButton = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let currentNumber = parseInt(counterNumber.textContent);
minusButton.addEventListener("click", function() {
    currentNumber++;
    counterNumber = currentNumber;
})
