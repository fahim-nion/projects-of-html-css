var icon = document.getElementById("icon");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

icon.onclick = ()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./imgD/sun-2-svgrepo-com.svg";
        icon.style.width = "35px"
        document.querySelector(".logo").style.filter = "invert() hue-rotate(42deg)";
    }else{
        icon.src = "./imgD/half-moon-moon-svgrepo-com.svg"
        icon.style.width = "25px";
        document.querySelector(".logo").style.filter = "none"
    }
}

