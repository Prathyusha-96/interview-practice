let userText=document.querySelector("#userText");
const output=document.querySelector("#output");

const conButtons=document.querySelectorAll(".conButtons")
conButtons.forEach(button=>{
  button.addEventListener("click",(e)=>{
    output.innerHTML=userText.value
    output.style.color=e.target.value
  })
})