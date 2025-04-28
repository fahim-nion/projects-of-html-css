const apiKey = "e3658f1af0be6b03bf176590fecb63ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl+ city +`&appid=${apiKey}`)
        var data = await response.json()
        // console.log(data)
        console.log(data.weather[0].main);
        
        if (response.ok && data.cod == 200){
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = `${data.main.temp}°C`
            document.querySelector(".humidity").innerHTML = `${Math.floor(data.main.humidity)}%`
            document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
        } else{
            document.querySelector(".weather-icon").src="./imgw/emoticon-moon-night-2-svgrepo-com.svg"
            document.querySelector(".city").innerHTML = `Sorry, couldn't find the city`;
            document.querySelector(".temp").innerHTML = ``;
            document.querySelector(".humidity").innerHTML = ``;
            document.querySelector(".wind").innerHTML = ``;
        }
        
    } catch (error) {
        console.log(error)
        document.querySelector(".weather-icon").src="./imgw/emoticon-moon-night-2-svgrepo-com.svg"
        document.querySelector(".city").innerHTML = `Sorry, couldn't find the city`;
        document.querySelector(".temp").innerHTML = ``;
        document.querySelector(".humidity").innerHTML = ``;
        document.querySelector(".wind").innerHTML = ``;
    }

    if ((data.weather[0].main) == "Clouds"){
        document.querySelector(".weather-icon").src = "./imgw/cloudy-forecast-sun-svgrepo-com.svg"
    }else if ((data.weather[0].main) == "Clear"){
        document.querySelector(".weather-icon").src = "./imgw/sunny-sun-svgrepo-com.svg"
    }else if ((data.weather[0].main) == "Rain"){
        document.querySelector(".weather-icon").src = "./imgw/cloud-cry-emoticon-svgrepo-com.svg"
    }else if ((data.weather[0].main) == "Drizzle"){
        document.querySelector(".weather-icon").src = "./imgw/angry-cloud-emoticon-svgrepo-com.svg"
    }else if ((data.weather[0].main) == "Haze"){
        document.querySelector(".weather-icon").src = "./imgw/mist-svgrepo-com.svg"
    }else if ((data.weather[0].main) == "Moderate Rain"){
        document.querySelector(".weather-icon").src = "./imgw/fog-svgrepo-com.svg"
    }
    
    document.querySelector(".details").style.display = "flex"
    document.querySelector(".weather h2").style.fontSize = "40px"


}

let srchBox = document.querySelector(".search").children[0]
let srchBtn = document.querySelector(".search").children[1]

srchBtn.addEventListener("click",()=>{
    checkWeather(srchBox.value)
})

srchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(srchBox.value);
    }
});

//css e display none korar pore ekhane eshe display block kore dilei khuje pabo