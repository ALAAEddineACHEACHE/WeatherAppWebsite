$(document).ready(function(){
    let cityname;
    let table = $(".table-striped");
    console.log(table);
    $("#boutton").on("click",function(){
        cityname=$("#cityname").val()
        console.log(cityname);
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
       
        table.html(`
        <tr>
        <th>Icon</th>
        <th>Weather</th>
        <th>Description</th>
        <th>Morning <br>Temperature</th>
        <th>Night<br> Temperature</th>
        <th>Min.<br>Temperature</th>
        <th>Max.<br>Temperature</th>
        <th>Pressure</th>
        <th>Humidity</th>
        <th>Wind<br> Speed</th>
        <th>Wind<br> Direction</th>
        
        <tr>
            <td><i class="fas fa-cloud"></i></td>
            <td>${weather}</td>
            <td>${weatherDesc}</td>
            <td>X °C</td>
            <td>Y °C</td>
            <td>${Minimum} °C</td>
            <td>${Maximum} °C</td>
            <td>${pressure} hpa</td>
            <td>${humidity} %</td>
            <td>${windspeed} m/s</td>
            <td>${windDirection} °</td>

        </tr>
        </tr>
        
        
        `)
      
        
    },
        error:function(){
            console.log("erreur");

        }

    })
   
})

})