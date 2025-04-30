const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes")
}

showNotes()

createBtn.addEventListener("click",()=>{
    let box = document.createElement("p");
    box.className = "input-box";
    let img = document.createElement("img")
    box.setAttribute("contenteditable","true");
    img.src = "./imgn/delete-svgrepo-com.svg"
    img.setAttribute("contenteditable","false")
    noteContainer.appendChild(box)
    box.appendChild(img)

    //or notes-noteContainer.appendChild(box).appendChild(img)
})

noteContainer.addEventListener("click",(e)=>{
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        save()
    }
    //it will start saving while typing on box
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(box => {
            // onkeyup	the user releases a key
            box.onkeyup = ()=>{
                save();
            }
        });
    }
})


function save(){
    localStorage.setItem("notes",noteContainer.innerHTML)
}

