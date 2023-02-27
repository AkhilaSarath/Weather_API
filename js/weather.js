function handleKeys(evt) {
  if(evt.keyCode === 13) {
    weatherDetails()
  }
}

document.addEventListener('keydown', handleKeys, true);

function weatherDetails() {
  placedata = place.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placedata}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data => data.json()).then(data => displayData(data))
}

function displayData(weatherDetails) {
  humidity = weatherDetails.main.humidity
  description = weatherDetails.weather[0].description
  windspeed = weatherDetails.wind.speed
  temperature = Math.floor((weatherDetails.main.temp - 273.5))
  feelslike = Math.floor((weatherDetails.main.feels_like - 273.5))

  hum.innerHTML       = `<h4 class="text-center text-info "><strong>${humidity}</strong></h4>`
  cityname.innerHTML  = `<h4 class="text-center text-info"><strong>${placedata}</strong></h4>`
  desc.innerHTML      = `<h4 class="text-center text-info"><strong>${description}</strong></h4>`
  wind.innerHTML      = `<h4 class="text-center text-info"><strong>${windspeed}</strong></h4>`
  temp.innerHTML      = `<h4 class="text-center text-info" ><strong>${temperature}&#176;C</strong></h4>`
  feels.innerHTML      = `<h4 class="text-center text-info"><strong>${feelslike}&#176;C</strong></h4>`
}