const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btnAdd = document.querySelector("#btn-add");
const btnSubtract = document.querySelector("#btn-subtract");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivison = document.querySelector("#btn-divison");
const output = document.querySelector("#output");
 
btnAdd.addEventListener("click", add);

function add() {
 var result = Number(input1.value) + Number(input2.value); 
 output.innerText= result;
}
btnSubtract.addEventListener("click", subtract);
function subtract() {
    var result = Number(input1.value) - Number(input2.value); 
    output.innerText= result;
   }
   btnMultiply.addEventListener("click", multiply);
   function multiply() {
    var result = Number(input1.value) * Number(input2.value); 
    output.innerText= result;
   }
   btnDivison.addEventListener("click", divison);

   function divison() {
    var result = Number(input1.value) / Number(input2.value); 
    output.innerText= result;
   }




