let display = document.querySelector(".display");

let disp = document.querySelector("#disp");

let btn = document.querySelectorAll("#num");

let input = document.querySelectorAll("input")




btn.forEach(btn =>{
    btn.addEventListener("click", (el)=>{
        console.log(el.target.value);
    })
});



