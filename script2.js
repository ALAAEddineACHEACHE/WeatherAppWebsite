$(document).ready(function(){
    let cityname;
    $("#boutton").on("click",function(){
        cityname=$("#cityname").val()
        

let APIkey="b965294b6d00bd0c41e73d6c2427f51f";
let APIurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;

    $.ajax({
        url:APIurl,
        method:"GET",
        dataType:"JSON",
        success:function(res){  
            console.log(res);
            let weather = res.weather[0].main;
            let temp = res.main.temp;
            let pressure = res.main.pressure;
            let humidity=res.main.humidity;
            let Minimum=res.main.temp_min;
            let Maximum=res.main.temp_max;
            let weatherDesc=res.weather[0].description;
            let windspeed=res.wind.speed;
            let windDirection=res.wind.deg;
        $("#weatheer").html(`
        <h2 style="text-align: center;">Current Weather for Rabat,MA</h2>
        <ul style="list-style:none;">
            <li>Weather: ${weather}</li>
            <li>Description: ${weatherDesc}</li>
            <li>Temperature: ${temp} °C</li>
            <li>Pressure: ${pressure} hpa </li>
            <li>Humidity: ${humidity} % </li>
            <li>Min Temperature: ${Minimum} °C</li>
            <li>Max Temperature: ${Maximum} °C</li>
            <li>Wind Speed: ${windspeed} m/s</li>
            <li>Wind Direction: ${windDirection} °</li>
        </ul>
        
        
        `)
      
        
    },
        error:function(){
            console.log("erreur");

        }

    })
   
})

})