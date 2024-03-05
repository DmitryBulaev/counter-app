const counterElement = document.querySelector('[data-find="counterValue"]');
const addApproachButton  = document.getElementById("addApproachButton");
const resetButton = document.getElementById("resetButton");

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterElement.innerText = counter;

addApproachButton.addEventListener("click", function () {
  counter = counter + parseInt(addApproachButton.dataset.approach);
  counterElement.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterElement.innerText = counter;
});