

$(document).ready(function() {
      var long;
      var lati;

      if (navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition(function(position) {
            	long =  position.coords.longitude;
            	lati =  position.coords.latitude;
                  $("#data").html("latitude: " + lati + "<br>longitude: " + long);
                  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&&APPID=f44745b3b949068be733eb938051eed4';

                  $.getJSON(api, function(data) {
                       var weatherType = data.weather[0].description;
                       var kelvin = data.main.temp;
                       var windspeed = data.wind.speed;
                       var city = data.name;
                      console.log(weatherType);
                       console.log(api);
                  });
            });
      } 
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