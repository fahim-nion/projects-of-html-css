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

let random = Math.floor(1+(9-1)*Math.random())
console.log(random)

let lttr = 