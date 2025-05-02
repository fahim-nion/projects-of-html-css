
getQuote()

const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const new_q = document.querySelector(".new")
// const url = "https://buddha-api.com/api/random";

// const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://buddha-api.com/api/random");
function getUrl() {
    return "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://buddha-api.com/api/random")+
        `&timestamp=${new Date().getTime()}`;
}


async function getQuote() {
    let response = await fetch(getUrl());
    let data_q = await response.json()
    let data = JSON.parse(data_q.contents)
    console.log(data.text)
    quote.innerHTML = data.text
    author.innerHTML = data.byName
}

new_q.addEventListener("click",()=>{
    getQuote()
})

function x(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "by---"+ author.innerHTML)
}

