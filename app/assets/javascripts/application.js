//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require cable


// $(function() {  // Create the chart
//   $('#container_humidity').highcharts({
//     // setOptions : {
//     //   time: {
//     //     useUTC: false
//     //   }
//     // },
//     chart : {
//             type: 'area',
//             plotBorderWidth: 0,
//       events : {
//         load : function() {
//           // set up the updating of the chart each second
//           humidityChart = this.series[0];
          
//         }
//       }
//     },
//     time: {
//         useUTC: false
//     },
//     title : {
//       text : 'Live data'
//     },
//         xAxis: {
//             type: 'datetime',
//             title: {text: 'Time'}
//         },
//         yAxis: {
//             gridLineWidth: 0.3,
//             title: {text: "Humidity (%)"}
//         },
//         plotOptions: {
//             area: {
//                 fillOpacity: 0.35,
//                 states: {
//                             hover: {
//                                 enabled: false
//                             }
//                         },
//                 marker: {
//                         enabled: true,
//                         symbol: 'circle',
//                         radius: 2
//                     }
//             }
//         },
//         legend: { enabled: false },
//         credits: { enabled: false },
//     series : [{
//       name : 'data',
//             lineWidth: 2,
//       data : (function() {
//         // generate an array of random data
//         var data = [], time = (new Date()).getTime(), i;
//                       var previous;
//         for( i = -10; i <= 0; i+=1) {
//           data.push([
//             time + i * 1000,
//             0
//           ]);
//         }
//         return data;
//       })()
//     }]
//   });

//   $('#container_temperature').highcharts({
//     chart : {
//             type: 'area',
//             plotBorderWidth: 0,
//       events : {
//         load : function() {
        
//           // set up the updating of the chart each second
//           temperatureChart = this.series[0];
//           /* setInterval(function() {
//             var x = (new Date()).getTime(), // current time
                  
//                                 // Previous value +/- 10 max
//                                 y = Math.round(series.data.slice(-1)[0]['y'] +                                        (Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)));
//                                 if (y < 0) 
//                                     y = -y
//             series.addPoint([x, y], true, true);
//           }, 1000); */
//         }
//       }
//     },
//     time: {
//         useUTC: false
//     },
//     title : {
//       text : 'Live data'
//     },
//         xAxis: {
//             type: 'datetime',
//             title: {text: 'Time'}
//         },
//         yAxis: {
//             gridLineWidth: 0.3,
//             title: {text: "Temperature (°C)"}
//         },
//         plotOptions: {
//             area: {
//                 fillOpacity: 0.35,
//                 states: {
//                             hover: {
//                                 enabled: false
//                             }
//                         },
//                 marker: {
//                         enabled: true,
//                         symbol: 'circle',
//                         radius: 2
//                     }
//             }
//         },
//         legend: { enabled: false },
//         credits: { enabled: false },
//     series : [{
//       name : 'data',
//             lineWidth: 2,
//       data : (function() {
//         // generate an array of random data
//         var data = [], time = (new Date()).getTime(), i;
//                       var previous;
//         for( i = -10; i <= 0; i+=1) {
//           data.push([
//             time + i * 1000,
//             0
//           ]);
//         }
//         return data;
//       })()
//     }]
//   });

//   $('#container_gas').highcharts({
//     chart : {
//             type: 'area',
//             plotBorderWidth: 0,
//       events : {
//         load : function() {
        
//           // set up the updating of the chart each second
//           gasChart = this.series[0];
//           /* setInterval(function() {
//             var x = (new Date()).getTime(), // current time
                  
//                                 // Previous value +/- 10 max
//                                 y = Math.round(series.data.slice(-1)[0]['y'] +                                        (Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)));
//                                 if (y < 0) 
//                                     y = -y
//             series.addPoint([x, y], true, true);
//           }, 1000); */
//         }
//       }
//     },
//     time: {
//         useUTC: false
//     },
//     title : {
//       text : 'Live data'
//     },
//         xAxis: {
//             type: 'datetime',
//             title: {text: 'Time'}
//         },
//         yAxis: {
//             gridLineWidth: 0.3,
//             title: {text: "Gas Level (ppm)"},
//         },
//         plotOptions: {
//             series: {
//                 zones: [
//                 {
//                     color: '#4CAF50',
//                     value: 600
//                 }, {
//                     color: '#dc3545',
//                     value: Number.MAX_VALUE
//                 }]
//             },
//             area: {
//                 fillOpacity: 0.35,
//                 states: {
//                             hover: {
//                                 enabled: false
//                             }
//                         },
//                 marker: {
//                         enabled: true,
//                         symbol: 'circle',
//                         radius: 2
//                     }
//             }
//         },
//         legend: { enabled: false },
//         credits: { enabled: false },
//     series : [{
//       name : 'data',
//             lineWidth: 2,
//       data : (function() {
//         // generate an array of random data
//         var data = [], time = (new Date()).getTime(), i;
//                       var previous;
//         for( i = -10; i <= 0; i+=1) {
//           data.push([
//             time + i * 1000,
//             0
//           ]);
//         }
//         return data;
//       })()
//     }]
//   });


App.arduino = App.cable.subscriptions.create("ArduinoChannel", {
  connected: function() {
    console.log('connected');
  },
  disconnected: function() {
        console.log('disconnected');
  },
  received: function(data) {
    // var x = (new Date()).getTime(); // current time
    // temperatureChart.addPoint([x, data.temperature], true, true);
    // humidityChart.addPoint([x, data.humidity], true, true);
    // gasChart.addPoint([x, data.gas], true, true);

    if (data.mode){
      $('#mode').html(data.mode)
      $('#control-mode').prop('checked', data.mode == 'control')
      return
    }

    if (data.light_1){
      light1 = '#light-1-' + data.light_1
      light3 = '#light-3-' + data.light_1
      $(light1).prop('checked', true);
      $(light3).prop('checked', true);
    } 
    if (data.light_2) {
      light2 = '#light-2-' + data.light_2 
      light4 = '#light-4-' + data.light_2
      $(light2).prop('checked', true);
      $(light4).prop('checked', true);
    }
  },
  changeMode: function(msg) {
    this.perform('change_mode', { mode: msg })
  },

  change_light_1: function(color){
    this.perform('change_light_1', { color: color})
  },
  change_light_2: function(color){
    this.perform('change_light_2', { color: color})
  },
  set_red_light_1: function(time){
    this.perform('set_red_light_1', { time: time})
  },

  set_green_light_1: function(time){
    this.perform('set_green_light_1', { time: time})
  }
});


$(function() {
  $('#mode').html('control')
  var mode
  var time_red_1 = 10
  var time_green_1 = 10
  var time_red_2 = 10
  var time_green_2 = 10
  var c = {
    "color1": 'r',
    "color2": 'y',
    "color3": 'g',
  }

  $('#control-mode').click(function(e){
    ischecked = $('#control-mode').is(":checked")
    
    if (ischecked){
      $('#mode').html('control')
      mode = 'control'
    }else{
      $('#mode').html('auto')
      mode = 'auto'
    }
    App.arduino.changeMode(mode)
  });
//event get on click
  $('.light-1 input').on('click',function(e){
   if (mode == 'auto') {
      e.preventDefault()
      return
    }
    color = e.target.value
    // console.log(c[color])
    App.arduino.change_light_1(c[color])
  })

  $('.light-2 input').on('click',function(e){
   if (mode == 'auto') {
    e.preventDefault()
    return
   } 
   color = e.target.value
   // console.log(c[color])
   App.arduino.change_light_2(c[color])
  })

  $('.light-3 input').on('click',function(e){
   e.preventDefault()
  })

  $('.light-4 input').on('click',function(e){
   e.preventDefault()
  })

  // $('#red-time-1').on('change', function (e) {
  //   time_red_1 = e.target.value
  //   App.arduino.set_red_light_1(time_red_1)
  // });

  // $('#green-time-1').on('change', function (e) {
  //   time_green_1 = e.target.value
  //   App.arduino.set_green_light_1(time_green_1)
  // });
  //set up thoi gian den khi bam enter

  $("#red-time-1").on('keyup', function (e) {
    if (e.keyCode === 13) {
      time_red_1 = e.target.value
      App.arduino.set_red_light_1(time_red_1)
    }
  });

  $("#green-time-1").on('keyup', function (e) {
    if (e.keyCode === 13) {
      time_green_1 = e.target.value
      App.arduino.set_green_light_1(time_green_1)
    }
  });

})









































// });
/* humidityChart.addPoint([10, 10], true, true); */

