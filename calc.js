let input = document.querySelector("#disp");

let btn = document.querySelectorAll("#num");


let stringData = "";



btn.forEach(btn =>{
    btn.addEventListener("click", (el)=>{
        let data = el.target.value;
        
        switch(data){
            case "=":
                stringData = eval(stringData);
                input.value = stringData;
            break;
            case "AC":
                stringData = "";
                disp.value = 0
            break;
            case "DE":
                stringData = stringData.toString().slice(0, -1);
                disp.value = stringData;
            break;
            default:
                stringData += data;
                input.value = stringData;
        
        }
    })
});
