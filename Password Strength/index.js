var pass = document.getElementById("password");
var msg = document.getElementById("msg");
var str = document.getElementById("strngth");

pass.addEventListener("input",()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none"
    }
})
