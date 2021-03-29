let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')


function getweather(){document.querySelector('#searchButton').addEventListener('click', function(){
    const appKey = "c6eb0122bfa02ae6b6d30b2c20189943"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=${appKey}`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        const city = data.name;
        const temp = data.main.temp;
        const icon = data.weather[0].icon
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed; 
        

        document.querySelector('.city').innerHTML = `Weather in ${city} is`;
        document.querySelector('.temp').innerHTML = `${temp} degres celcius`;
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png` 
        document.querySelector('.desc').innerHTML = `${desc}`;
        document.querySelector('.humidity').innerHTML = `humidity ${humidity}%`;
        document.querySelector('.wind').innerHTML = `${wind} km/h`;
        
    })
    .catch(err => alert("Please enter another city"))

        
})
}
