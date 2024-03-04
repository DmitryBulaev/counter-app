let button = document.querySelector(".counter-addButton");
let counterText = document.querySelector(".counter");
let counter = 0;

button.addEventListener("click", function () {
  counter = counter + 1;

  counterText.innerText = counter;
});

let buttonReset = document.querySelector(".counter-resetButton");
let resetText = document.querySelector(".counter");

buttonReset.addEventListener("click", function () {
  counter = 0;

  resetText.innerText = counter;
});
