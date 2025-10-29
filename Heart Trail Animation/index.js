const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove",()=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElem = document.createElement("span");
    spanElem.style.left = xPos + "px"
    spanElem.style.top = yPos + "px"
    bodyEl.appendChild(spanElem);
    const size = Math.random()*100;
    spanElem.style.width = size +"px";
    spanElem.style.height = size +"px";
    setTimeout(() => {
        spanElem.remove()
    }, 4000);
})
