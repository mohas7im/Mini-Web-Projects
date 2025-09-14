const apiKey = "bb93ea03377b4acd83211d8bacde4101";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-img");

async function checkWhether(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    
  if (response.status == 404) {
    console.log(response)
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";

  } else {
      document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
    var data = await response.json();
    console.log(data) 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/assets/images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/assets/images/mist.png";
    }
  }

}
document.addEventListener('keydown',function(event){
    if (event.keyCode == 13){
        searchBtn.click()
    }
});

searchBtn.addEventListener("click", () => {
  checkWhether(searchBox.value);
});
