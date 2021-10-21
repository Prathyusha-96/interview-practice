var userInput = document.querySelector("#user-input");
var output = document.querySelector("#output");

function inputHandler() {
    let input = userInput.value;
    output.innerText = input;
    if(input.length % 3 === 0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }

}
userInput.addEventListener("input", inputHandler)