let string = "";
let memory = 0;
const buttons = document.getElementById("button");
const input = document.querySelector("input");

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch(error) {
                console.error('invalid expression:', error.messege);
            }
        } else if(e.target.innerHTML ==== "C") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "M+") {
        try {
            memory += eval(string);
        } catch(error) {
            console.error("invalid expression:", error.messege);
        } 
        string = "";
        input.value = string;  
        } else if(e.target.innerHTML === "M-") {
            try {
            string = memory -= string;
        } catch(error){
            console.error("invalid expression:", error.messege)
        }
        string = "";
        value.input = string;
        } else {
            string += button.innerHTML;
            input.value;
        }
    })
});