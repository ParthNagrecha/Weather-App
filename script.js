const apikey = "e5ee9da003de562b7735c5eaa0f28a25".trim();

async function checkweather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    let data =  await response.json();    
    
    console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity+ "%";
    document.querySelector('.wind').innerHTML = data.wind.speed+" km/h";
    
    // console.log('from api',data.weather[0].main);
    // console.log('img',weathericon.src );

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = "clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weathericon.src = "mist.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weathericon.src = "rain.png";
    }
    else if(data.weather[0].main == 'Snow'){
        weathericon.src = "snow.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = "drizzle.png";
    }
}
const inputbox = document.querySelector('.searchbox');
const srchbtn = document.querySelector('.btn1');
const weathericon = document.querySelector('.weather img');

checkweather(document.querySelector('.city').innerHTML);


srchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
})

