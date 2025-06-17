equalBtn = document.querySelector(".equal")
dispVal = document.querySelector(".display input")

equalBtn.addEventListener("click",()=>{
    const expression = dispVal.value.trim();
    if (expression === ''){
        dispVal.value = "INPUT SOMETHING FIRST";
        dispVal.style.fontSize = "25px";

    }else{
        try {
            dispVal.value = eval(expression)
        } catch (error) {
            dispVal.value = "Syntax Error"
        }
    }
});