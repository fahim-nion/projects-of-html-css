let toastBox = document.getElementById("toast-box")

let succMsg = "Successfully Submitted";
let errMsg = "Please Fix the Error";
let invMsg = "Invalid input, check again";

function showToast(txt){
    let toast = document.createElement("div")
    toast.classList.add("toast")
    if (txt == "Successfully Submitted"){
        toast.innerHTML = `<img src="./imgTn/checked-svgrepo-com.svg"> ${txt}`;
        toast.classList.add("yes")
    }else if (txt == "Please Fix the Error"){
        toast.innerHTML = `<img src="./imgTn/unchecked-svgrepo-com.svg" alt=""> ${txt}`
        toast.classList.add("error")
    }else{
        toast.innerHTML = `<img src="./imgTn/minus-svgrepo-com.svg" alt=""> ${txt}`
        toast.classList.add("invalids")
    }
    toastBox.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 6000);
}