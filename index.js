const counterText = document.querySelector("[data-value = counterValue]");
const addSetButton = document.getElementById("addSetButton");
const resetButton = document.getElementById("resetButton");

const COUNTER_INITIAL_VALUE = 0;
counterText.innerText = COUNTER_INITIAL_VALUE;

let counter = COUNTER_INITIAL_VALUE;

addSetButton.addEventListener("click", function () {
  counter = counter + parseInt(addSetButton.dataset.sets);
  counterText.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
});
