let eyeIcon = document.getElementById("eye-icon")
let pass = document.getElementById("pass")

eyeIcon.onclick = ()=>{
    if(pass.type == "password"){
        pass.type = "text"
        eyeIcon.src = "./imgP/eye-svgrepo-com (1).svg"
    }
    else{
        pass.type = "password"
        eyeIcon.src = "./imgP/eye-hidden-hide-svgrepo-com.svg"
    }
}