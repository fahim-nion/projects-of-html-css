console.log("hello");


async function main() {
    let a = await fetch("https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275420/Tomar_Priyo_Ritu_Barsha_Tai_d9pgzl.mp3")
    let response = await a.text()
    console.log(response)
}

main()