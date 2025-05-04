const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
let imgBox = document.getElementById("img-box")
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qrTxt");


function genQR(){
    if (qrTxt.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value ;
        imgBox.classList.add("show-img")
        setTimeout(() => {
            imgBox.classList.remove("show-img")
        }, 10000);
    }else{
        qrTxt.classList.add("error")
        setTimeout(() => {
            qrTxt.classList.remove("error")
        }, 500);
    }
}