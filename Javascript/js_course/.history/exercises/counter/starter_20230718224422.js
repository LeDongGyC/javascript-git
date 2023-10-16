const minusButton = document.querySelector(".counter-descrease");
const plusButton = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let currentNumber = parseInt(counterNumber.textContent);
plusButton.addEventListener("click", function () {
  currentNumber++;
  counterNumber.textContent = currentNumber;
});
minusButton.addEventListener("click", function () {
  currentNumber++;
  counterNumber.textContent = currentNumber;
});
