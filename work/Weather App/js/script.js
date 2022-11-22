

 //http://api.weatherstack.com/current? access_key =  fe6ec652a4d7a1b9f875d4b77d2527f0  = New%20York

 // http://api.weatherstack.com/current


 //http://api.weatherstack.com/current  ? access_key = fb314df249ea66c251ecc435d9a3992c&query = New York

//  select classes  //


let searchBox  =  document.getElementById("searchBox")
let inputfield = document.getElementById("input-box")
let weatherbox = document.querySelector(".weather-box")


// click to searchbutton //
searchButton.addEventListener("click", function(){
  let valueOfField =  inputfield.value
  console.log(valueOfField)

  async  function apiaccess(){
    let fetch_weather_api =  await fetch("http://api.weatherstack.com/current?access_key=fb314df249ea66c251ecc435d9a3992c&query="+valueOfField)
    let respones = fetch_weather_api.json()
   return  respones
  }



let  city = document.getElementById("city")
let  date = document.getElementById("date")
let temp  = document.getElementById("temp")
let observation_time  = document.getElementById("observation_time")
let weatherDes = document.getElementById("weather")
let humid   = document.getElementById("humid")
let languages    = document.getElementById("lang")

apiaccess().then(function(response){
  let errorss  = document.getElementById("Error")
  errorss.innerHTML =  ""
  console.log(response)

  // city name  //

  let location = response.location.name
  let state    = response.location.region
  let  country = response.location.country
  city.innerHTML =  location +", "+  state + ", " + country


   // data time //
   let time = response.location.localtime
   date.innerHTML = time

  // tempertaure //
    let currentTemp = response.current.temperature
   temp.innerHTML = currentTemp + "34&deg;C"
    
    // observation //
    let obstime = response.current.observation_time
    observation_time.innerHTML = obstime

    // type //
    let weathertype = response.current.weather_descriptions[0]
    weatherDes.innerHTML= weathertype

    //  language//
    let languagetype = response.current.language
    languages.innerHTML= languagetype

    // humidity //
    let humiditytype = response.current.humidity
    humid.innerHTML =  humiditytype

    //  making block visible  //
    weatherbox.style.display = "block"

}).catch(function(reject){
  console.log(reject)
  let errorss  = document.getElementById("Error")
  errorss.innerHTML =   "Sorry  city is not found database please nearby top city"
  weatherbox.style.display = "None"
})
 
})





