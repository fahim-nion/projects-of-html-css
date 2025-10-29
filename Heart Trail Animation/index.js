const bodyEl = document.querySelector("body");

function createHeart(xPos, yPos) {
    const spanElem = document.createElement("span");
    spanElem.style.left = xPos + "px";
    spanElem.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanElem.style.width = size + "px";
    spanElem.style.height = size + "px";
    bodyEl.appendChild(spanElem);
    setTimeout(() => {
        spanElem.remove();
    }, 4000);
}


bodyEl.addEventListener("mousemove", (event) => {
    createHeart(event.offsetX, event.offsetY);
});


bodyEl.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    const xPos = touch.clientX;
    const yPos = touch.clientY;
    createHeart(xPos, yPos);
});

bodyEl.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    const xPos = touch.clientX;
    const yPos = touch.clientY;
    createHeart(xPos, yPos);
});
