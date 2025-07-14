let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft += scrollContainer.clientWidth;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -= scrollContainer.clientWidth;
})

let random = Math.floor(0+(9-1)*Math.random())
let random2 = Math.floor(0+(8-1)*Math.random())
console.log(random)

let lttr = document.querySelector(".txt1").children[random]
let lttr2 = document.querySelector(".txt2").children[random2]

setTimeout(() => {
    changelumina()
}, 300);

function changelumina(){
    lttr.classList.add("lumina")
    lttr2.classList.add("lumina")
    setTimeout(() => {
    lttr.classList.remove("lumina")
    lttr2.classList.remove("lumina")
    }, 100);
}

