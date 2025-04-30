const passwordBOx = document.getElementById("password-input");
const button = document.querySelector(".btn")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_+=/?><{}[]:;~"

const allChars = upperCase + lowerCase + numbers + symbols


function createPass(){
    let pass = "";
    pass += upperCase[Math.floor(Math.random()*upperCase.length)];
    pass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    pass += numbers[Math.floor(Math.random()*numbers.length)];
    pass += symbols[Math.floor(Math.random()*symbols.length)];
    
    while (length > pass.length){
        pass += allChars[Math.floor(Math.random()*allChars.length)]
    };
    // console.log(pass);
    passwordBOx.value = pass
}


function copyPass(){
    passwordBOx.select()
    // document.execCommand("copy")
    passwordBOx.setSelectionRange(0,99999)
    navigator.clipboard.writeText(passwordBOx.value).then(()=>{
        alert("Copied");
    })
    
}

button.addEventListener("click",()=>{
    createPass()
})