

$(document).ready(function() {
      var lati;
      var long;
  
      var fTemp;
      var cTemp;
      var temSwap= true;

      $.getJSON("http://ip-api.com/json" , function(data2) {
              lati = data2.lat;
              long = data2.lon;
               // $("#data").html("latitude: " + lati + "<br>longitude: " + long);
               //git
               var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&&APPID=f44745b3b949068be733eb938051eed4';

                  $.getJSON(api, function(data) {
                       var weatherType = data.weather[0].description;
                       var kelvin = data.main.temp;
                       var windspeed = data.wind.speed;
                       var city = data.name;
                       fTemp = ((kelvin * 9 / 5) - 459.67).toFixed(2);
                       cTemp  = (kelvin - 273.15).toFixed(2);
                       windspeed = (2.237 * windspeed).toFixed(1);
                       if (fTemp > 80) {
                         $('body').css('background-color','red');
                       } else if (fTemp < 80 && fTemp > 70) {
                          $('body').css('background-color', 'blue');
                       } else if (fTemp < 70 && fTemp > 60) {
                          $('body').css('background-color','#2F4F4F');
                       }
                       $(".city").html(city);
                       $(".weatherType").html(weatherType);
                       $(".windspeed").html("Wind Speed " + windspeed + " MPH");
                       $(".messageFara").html( fTemp + " (°F)");
                       $(".messageFara").click(function() {
                             if (temSwap === false) {
                               $(".messageFara").html(cTemp + " (°C)");
                               temSwap = true;
                             } else {
                                  $(".messageFara").html(fTemp + " (°F)");
                                  temSwap = false;
                             }
                      });

                       




                  });
      });              
  });

// (function() {
// var d3 = Plotly.d3;

// var WIDTH_IN_PERCENT_OF_PARENT = 60,
//     HEIGHT_IN_PERCENT_OF_PARENT = 80;

// var gd3 = d3.select('body')
//     .append('div')
//     .style({
//         width: WIDTH_IN_PERCENT_OF_PARENT + '%',
//         'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

//         height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
//         'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
//     });

// var gd = gd3.node();

// Plotly.plot(gd, data, [{
//     type: 'bar',
//     x: [1, 2, 3, 4],
//     y: [5, 10, 2, 8],
//     marker: {
//         color: '#C8A2C8',
//         line: {
//             width: 2.5
//         }
//     }
// }], 
// {
//     title: 'Auto-Resize',
//     font: {
//         size: 16
//     }
// });

// window.onresize = function() {
//     Plotly.Plots.resize(gd);
// };

// })();







// var trace1 = {
//   x: [1, 2, 3, 4],
//   y: [1, 4, 9, 16],
//   name: 'Trace1',
//   type: 'bar'
// };
// var trace2 = {
//   x: [1, 2, 3, 4],
//   y: [6, -8, -4.5, 8],
//   name: 'Trace2',
//   type: 'bar'
// };
// var trace3 = {
//   x: [1, 2, 3, 4],
//   y: [-15, -3, 4.5, -8],
//   name: 'Trace3',
//   type: 'bar'
//  }

//  var trace4 = {
//   x: [1, 2, 3, 4],
//   y: [-1, 3, -3, -4],
//   name: 'Trace4',
//   type: 'bar'
//  }

// var data = [trace1, trace2, trace3, trace4];
// var layout = {

//   xaxis: {
//   	title: 'X axis'
//   },
//   yaxis: {
//   	title: 'Y axis'
//   },
//    width: 1000,
//    height: 275,
//    margin: {
//      l: 0,
//      t: 0,
//    },
//    padding: {
//      t: 10,
//    },
//    bargap: 0.9,
//   barmode: 'relative',
//   title: 'Relative Barmode'
// };

// Plotly.newPlot('myDiv', data, layout);