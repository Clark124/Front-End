#!/usr/bin/env node

var axios = require('axios');
//console.log(process.argv);
var data = {};

if(process.argv[2]){
    data.params = {
        city: process.argv[2]
    }
}
axios.get('http://api.jirengu.com/weather.php',data).then(function(response){
//    console.log(response.data);
    var weather = response.data.results[0].weather_data[0];
    var pm25 = response.data.results[0].pm25;
    console.log(weather.date);
    console.log("pm25:"+pm25);
    console.log(weather.temperature);
    console.log(weather.weather+','+weather.wind)
}).catch(function(error){
    console.log(error)
});