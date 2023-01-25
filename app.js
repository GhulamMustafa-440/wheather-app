const feels_like = document.getElementsByClassName('feels_like')
const humidity = document.getElementsByClassName('humidity')
const sunrise = document.getElementsByClassName('sunrise')
const sunset = document.getElementsByClassName('sunset')
const wind_speed = document.getElementsByClassName('wind_speed')
const temp = document.getElementsByClassName('temp')
const wind_degrees = document.getElementsByClassName('wind_degrees')
const min_temp = document.getElementsByClassName('min_temp')
const max_temp = document.getElementsByClassName('max_temp')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd8303b996cmsh276de41bfd30418p18d29cjsn62e2ed48d772',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



const getWheather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        //  cloud_pct.innerHTML = response.cloud_pct
        feels_like[0].innerHTML = response.feels_like
        humidity[0].innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp[0].innerHTML = response.max_temp
        min_temp[0].innerHTML = response.min_temp
        sunrise[0].innerHTML = response.sunrise
        sunset[0].innerHTML = response.sunset
        temp[0].innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees[0].innerHTML = response.wind_degrees
        wind_speed[0].innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

        // console.log(response)
    })
    .catch(err => console.error(err));
}
    
getWheather('Karachi')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let cityName = city.value.charAt(0).toUpperCase() + city.value.substr(1, city.value.length)
    getWheather(cityName)
    city.value = ''
})


const quettaWheather = (city) => {
   
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        //  cloud_pct.innerHTML = response.cloud_pct
        feels_like[1].innerHTML = response.feels_like
        humidity[1].innerHTML = response.humidity
        max_temp[1].innerHTML = response.max_temp
        min_temp[1].innerHTML = response.min_temp
        sunrise[1].innerHTML = response.sunrise
        sunset[1].innerHTML = response.sunset
        temp[1].innerHTML = response.temp
        wind_degrees[1].innerHTML = response.wind_degrees
        wind_speed[1].innerHTML = response.wind_speed

        // console.log(response)
    })
    .catch(err => console.error(err));
}
    
quettaWheather('Quetta')

const rawalpindiWheather = (city) => {
   

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        //  cloud_pct.innerHTML = response.cloud_pct
        feels_like[2].innerHTML = response.feels_like
        humidity[2].innerHTML = response.humidity
        max_temp[2].innerHTML = response.max_temp
        min_temp[2].innerHTML = response.min_temp
        sunrise[2].innerHTML = response.sunrise
        sunset[2].innerHTML = response.sunset
        temp[2].innerHTML = response.temp
        wind_degrees[2].innerHTML = response.wind_degrees
        wind_speed[2].innerHTML = response.wind_speed

        // console.log(response)
    })
    .catch(err => console.error(err));
}
    
rawalpindiWheather('Rawalpindi')

const faisalabadWheather = (city) => {
   

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        //  cloud_pct.innerHTML = response.cloud_pct
        feels_like[3].innerHTML = response.feels_like
        humidity[3].innerHTML = response.humidity
        max_temp[3].innerHTML = response.max_temp
        min_temp[3].innerHTML = response.min_temp
        sunrise[3].innerHTML = response.sunrise
        sunset[3].innerHTML = response.sunset
        temp[3].innerHTML = response.temp
        wind_degrees[3].innerHTML = response.wind_degrees
        wind_speed[3].innerHTML = response.wind_speed

        // console.log(response)
    })
    .catch(err => console.error(err));
}
    
faisalabadWheather('Faisalabad')

const murreeWheather = (city) => {
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        //  cloud_pct.innerHTML = response.cloud_pct
        feels_like[4].innerHTML = response.feels_like
        humidity[4].innerHTML = response.humidity
        max_temp[4].innerHTML = response.max_temp
        min_temp[4].innerHTML = response.min_temp
        sunrise[4].innerHTML = response.sunrise
        sunset[4].innerHTML = response.sunset
        temp[4].innerHTML = response.temp
        wind_degrees[4].innerHTML = response.wind_degrees
        wind_speed[4].innerHTML = response.wind_speed

        // console.log(response)
    })
    .catch(err => console.error(err));
}
    
murreeWheather('Murree')
