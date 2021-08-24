$(document).ready(function(){
    let cityname;
    let table = $(".table-striped");
    console.log(table);
    $("#boutton").on("click",function(){
        cityname=$("#cityname").val();
let cnt = $("#secondinput").val();
let APIkey="b965294b6d00bd0c41e73d6c2427f51f";
let APIurl=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&cnt=${cnt}&appid=${APIkey}`;
  
$.ajax({
        url:APIurl,
        method:"GET",
        dataType:"JSON",
        success:function(res){  
            console.log(res);
            //  let weather = res.list[0].main;
            // let temp = res.main.temp;
            // let pressure = res.main.pressure;
            // let humidity=res.main.humidity;
            // let Minimum=res.main.temp_min;
            // let Maximum=res.main.temp_max;
            // let weatherDesc=res.weather[0].description;
            // let windspeed=res.wind.speed;
            // let windDirection=res.wind.deg;
       
        // table.html(`
        //   <thead>
        //   <tr>
        //   <th>Icon</th>
        //   <th>Weather</th>
        //   <th>Description</th>
        //   <th>Morning <br>Temperature</th>
        //   <th>Night<br> Temperature</th>
        //   <th>Min.<br>Temperature</th>
        //   <th>Max.<br>Temperature</th>
        //   <th>Pressure</th>
        //   <th>Humidity</th>
        //   <th>Wind<br> Speed</th>
        //   <th>Wind<br> Direction</th>
        //   </tr>
        //   </thead>
        // `)
       for(let i=0;i<res.list.length;i++){
           let table = "<tr>"; 
           table+=`<td><img src="http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}.png" alt=""/></td>`;
           table+=`<td>${res.list[0].weather[0].main}</td>`;

         $("#tbody").append(table);
       }

      
        
    },
        error:function(){
            console.log("erreur");

        }

    })
   
})

})
