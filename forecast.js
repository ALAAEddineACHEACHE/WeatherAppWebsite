$(document).ready(function(){
    let cityname;
    let table = $(".table-striped");
    console.log(table);
    $("#boutton").on("click",function(){
        cityname=$("#cityname").val();
        cityname[0].toUpperCase();
let cnt = $("#secondinput").val();
let APIkey="b965294b6d00bd0c41e73d6c2427f51f";
let APIurl=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&cnt=${cnt}&appid=${APIkey}&units=metric`;
let h1=$("#h1");
h1.text(`Weather Forecast At ${cityname}`);
$.ajax({
        url:APIurl,
        method:"GET",
        dataType:"JSON",
        success:function(res){  
            console.log(res);
       for(let i=0;i<res.list.length;i++){
           let table = "<tr>"; 
           table+=`<td><img src="http://openweathermap.org/img/wn/${res.list[i].weather[0].icon}.png" alt=""/></td>`;
           table+=`<td>${res.list[i].weather[0].main}</td>`;
           table+=`<td>${res.list[i].weather[0].description}</td>`;
            table+=`<td>${res.list[i].feels_like.morn} °C</td>`;
            table+=`<td>${res.list[i].feels_like.night} °C</td>`;
            table+=`<td>${res.list[i].temp.min} °C</td>`;
            table+=`<td>${res.list[i].temp.max} °C</td>`;
            table+=`<td>${res.list[i].pressure} hpa</td>`;
            table+=`<td>${res.list[i].humidity} % </td>`;
            table+=`<td>${res.list[i].speed} m/s</td>`;
            table+=`<td>${res.list[i].deg} °</td>`;
         $("#tbody").append(table);
       }
    },
        error:function(){
            console.log("erreur");

        }

    })
   
})

})
