const apiKey="3d4d35a6f99834bff22a686eed23f40c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const SearchBox = document.querySelector(".search-bar input")
const SearchBtn = document.querySelector(".search-bar button")

const WeatherIcon = document.querySelector(".Weather-icon")

async function Weathercheck(city) {
    if(city === "name" || city === "hello" || city === "city"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".main").style.display="none";
        return;
    }
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status === 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".main").style.display="none";
        return;
    }


    var data = await response.json()
    
    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".wind p").innerHTML = Math.round(data.wind.speed*(3.6)) + " km/h";
    document.querySelector(".humidity p").innerHTML = data.main.humidity + " %"
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-condition").innerHTML = "Cloudy";
        document.querySelector(".weather-condition").style.color = "Black";
    WeatherIcon.src = "./amcharts_weather_icons_1.0.0[1]/animated/cloudy-day-1.svg"
}else if(data.weather[0].main == "Rain"){
    document.querySelector(".weather-condition").innerHTML = "Rainy";
    document.querySelector(".weather-condition").style.color = "Black";
    WeatherIcon.src = "./amcharts_weather_icons_1.0.0[1]/animated/rainy-6.svg"
}else if(data.weather[0].main == "Clear"){
    document.querySelector(".weather-condition").innerHTML = "Clear Sky";
    document.querySelector(".weather-condition").style.color = "Black";
    WeatherIcon.src = "./amcharts_weather_icons_1.0.0[1]/animated/day.svg"
}else if(data.weather[0].main == "Snow"){
    document.querySelector(".weather-condition").innerHTML = "Snowy";
    document.querySelector(".weather-condition").style.color = "Black";
    WeatherIcon.src = "./amcharts_weather_icons_1.0.0[1]/animated/snowy-6.svg"
}else{
    WeatherIcon.src = "./amcharts_weather_icons_1.0.0[1]/animated/cloudy.svg"
}
document.querySelector(".main").style.display = "block";
document.querySelector(".error").style.display="none";
}
SearchBtn.addEventListener("click",()=>{

    Weathercheck(SearchBox.value);
})
