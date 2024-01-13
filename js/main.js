


var todayName = document.getElementById("today_date_day_name")
var todayNumber = document.getElementById("today_date_day_number")
var todayMonth = document.getElementById("today_date_month")
var todayLocation = document.getElementById("today_location")
var todayTemp = document.getElementById("today_temp")
var todayConditionImg = document.getElementById("today_condition_img")
var todayConditionText = document.getElementById("today_condition_text")
var humidity = document.getElementById("humidity")
var wind = document.getElementById("wind")
var windDiection = document.getElementById("wind_diection")

//next date
var nextDays = document.getElementById("days")
var nextConditionImg = document.getElementById("days_img")
var nextConditionText = document.getElementById("days_condition_text")
var nextMaxTemp = document.getElementById("day_number")
var nextMinTemp = document.getElementById("number")

var searchInput = document.getElementById("search")
let date =new Date("2024-01-13")
console.log(date.toLocaleDateString("en-US",{weekday:"long"}));
console.log(date.toLocaleDateString("en-US",{month:"long"}));
// fetch

async function getWeatherData(cityName){
 let weatherResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1445c0c1b07c481980b202528241201&q=${cityName}&days=3`)
 let weatherData= await weatherResponse.json()
 console.log(weatherData);
 return weatherData

}
getWeatherData()

// display today
function displayTodayData(data){
  let todayName = new Date()
  todayName.innerHTML =date.toLocaleDateString("en-US",{weekday:"long"})
  todayNumber.innerHTML =date.toLocaleDateString("en-US",{monthday:"long"})
  todayMonth.innerHTML =date.toLocaleDateString("en-US",{month:"long"})
  todayLocation.innerHTML=data.location.name
  todayTemp.innerHTML=data.current.temp_c
  todayConditionImg.setAttribute("src",data.current.condition.icon)
  todayConditionText.innerHTML=data.current.condition.text
  humidity.innerHTML =data.current.humidity+"%"
  wind.innerHTML = data.current.wind_mph+"km/h"
  windDiection.innerHTML =data.current.wind_dir
}
// display next days data
function displayNextData(data){
var forecastData = data.forecast.forecastday
 for(let i = 0; i < 2 ;i++)
 {
  let nextDate= new Date(forecastData[i+1].date)
  nextDays.innerHTML =nextDate.toLocaleDateString("en-US",{weekday:"long"})
 nextMaxTemp[i].innerHTML = forecastData[i+1].day.maxtemp_c
  nextMinTemp[i].innerHTML = forecastData[i+1].day.mintemp_c
  nextConditionImg[i].innerHTML = setAttribute("src",forecastData[i+1].day.condition.icon)
}
}



//start app
 async function startApp(city="cairo")
 {
  var weatherData = await getWeatherData(city)
  displayTodayData(weatherData)
  displayNextData(weatherData)
 }
 startApp()

 searchInput.addEventListener("input",function(){
  startApp(searchInput.value)
 })





