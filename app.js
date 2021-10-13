var counterInput = document.querySelector("#counter-input");
var btnIncrease = document.querySelector("#btn-increase");
var btnDecrease = document.querySelector("#btn-decrease");
var output = document.querySelector("#output");

btnIncrease.addEventListener("click", increase);
function increase() {
   counterInput.value++;
     output.innerText = counterInput.value;
}

 btnDecrease.addEventListener("click", decrease);
 function decrease() {
   counterInput.value--;
     output.innerText = counterInput.value;
}