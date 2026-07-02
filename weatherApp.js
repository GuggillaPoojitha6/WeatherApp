console.log("hello weather app");
const apikey = "c6226352ccf29db2a869bd63ae879cf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMsg = document.querySelector(".error-msg");

async function checkWeather(city){
    const respone=await fetch(apiUrl+ city +`&appid=${apikey}`) 
    if (respone.status == 404) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "❌ Invalid city name";
        return;
    } 
    else {
        errorMsg.style.display = "none";
    }
    const data=await respone.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".type").innerHTML=data.weather[0].main;
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/meteocons--cloudy-fill.svg";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/meteocons--clear-day-fill.svg";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/meteocons--rain-fill.svg";
    }
    else if(data.weather[0].main=="Drizzle"){   
        weatherIcon.src="images/meteocons--drizzle-fill.svg";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/meteocons--mist-fill.svg";
    }
    else if(data.weather[0].main=="Snow"){  
        weatherIcon.src="images/meteocons--snow-fill.svg";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src="images/meteocons--thunderstorm-fill.svg";
    }   
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/meteocons--haze-fill.svg";
    }   
    else if(data.weather[0].main=="Smoke"){
        weatherIcon.src="images/meteocons--smoke-fill.svg";
    }  
    else if(data.weather[0].main=="clear-night "){ 
        weatherIcon.src="images/meteocons--clear-night-fill.svg";
    }  
    document.querySelector(".weather-card").style.display="block";
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        checkWeather(searchBox.value);
    }
});
