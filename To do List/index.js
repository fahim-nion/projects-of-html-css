const inputBox = document.getElementById("input-box")
const listContainer = document.querySelector(".list-container")

function addTask(){
    if (inputBox.value === ''){
        alert("You must Write something to add")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML  = "\u00d7"  //is A code for cross icon
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData();
}

document.getElementById("input-box").addEventListener("keydown",(e)=>{
    if (e.key == "Enter"){
        addTask()
    }
})


listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()