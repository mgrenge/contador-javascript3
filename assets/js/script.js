var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  if (currentNumber <= 9) currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  if (currentNumber >= 1) currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
}

document.getElementById("adicionar").addEventListener("click", increment);

document.getElementById("subtrair").addEventListener("click", decrement);
