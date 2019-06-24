// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require cable


$(function() {  // Create the chart


  $('#container_humidity').highcharts({
    // setOptions : {
    //   time: {
    //     useUTC: false
    //   }
    // },
    chart : {
            type: 'area',
            plotBorderWidth: 0,
      events : {
        load : function() {
          // set up the updating of the chart each second
          humidityChart = this.series[0];
          
        }
      }
    },
    time: {
        useUTC: false
    },
    title : {
      text : 'Live data'
    },
        xAxis: {
            type: 'datetime',
            title: {text: 'Time'}
        },
        yAxis: {
            gridLineWidth: 0.3,
            title: {text: "Humidity (%)"}
        },
        plotOptions: {
            area: {
                fillOpacity: 0.35,
                states: {
                            hover: {
                                enabled: false
                            }
                        },
                marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 2
                    }
            }
        },
        legend: { enabled: false },
        credits: { enabled: false },
    series : [{
      name : 'data',
            lineWidth: 2,
      data : (function() {
        // generate an array of random data
        var data = [], time = (new Date()).getTime(), i;
                      var previous;
        for( i = -10; i <= 0; i+=1) {
          data.push([
            time + i * 1000,
            0
          ]);
        }
        return data;
      })()
    }]
  });

  $('#container_temperature').highcharts({
    chart : {
            type: 'area',
            plotBorderWidth: 0,
      events : {
        load : function() {
        
          // set up the updating of the chart each second
          temperatureChart = this.series[0];
          /* setInterval(function() {
            var x = (new Date()).getTime(), // current time
                  
                                // Previous value +/- 10 max
                                y = Math.round(series.data.slice(-1)[0]['y'] +                                        (Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)));
                                if (y < 0) 
                                    y = -y
            series.addPoint([x, y], true, true);
          }, 1000); */
        }
      }
    },
    time: {
        useUTC: false
    },
    title : {
      text : 'Live data'
    },
        xAxis: {
            type: 'datetime',
            title: {text: 'Time'}
        },
        yAxis: {
            gridLineWidth: 0.3,
            title: {text: "Temperature (°C)"}
        },
        plotOptions: {
            area: {
                fillOpacity: 0.35,
                states: {
                            hover: {
                                enabled: false
                            }
                        },
                marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 2
                    }
            }
        },
        legend: { enabled: false },
        credits: { enabled: false },
    series : [{
      name : 'data',
            lineWidth: 2,
      data : (function() {
        // generate an array of random data
        var data = [], time = (new Date()).getTime(), i;
                      var previous;
        for( i = -10; i <= 0; i+=1) {
          data.push([
            time + i * 1000,
            0
          ]);
        }
        return data;
      })()
    }]
  });


  $('#container_gas').highcharts({
    chart : {
            type: 'area',
            plotBorderWidth: 0,
      events : {
        load : function() {
        
          // set up the updating of the chart each second
          gasChart = this.series[0];
          /* setInterval(function() {
            var x = (new Date()).getTime(), // current time
                  
                                // Previous value +/- 10 max
                                y = Math.round(series.data.slice(-1)[0]['y'] +                                        (Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)));
                                if (y < 0) 
                                    y = -y
            series.addPoint([x, y], true, true);
          }, 1000); */
        }
      }
    },
    time: {
        useUTC: false
    },
    title : {
      text : 'Live data'
    },
        xAxis: {
            type: 'datetime',
            title: {text: 'Time'}
        },
        yAxis: {
            gridLineWidth: 0.3,
            title: {text: "Gas Level (ppm)"},
        },
        plotOptions: {
            series: {
                zones: [
                {
                    color: '#4CAF50',
                    value: 600
                }, {
                    color: '#dc3545',
                    value: Number.MAX_VALUE
                }]
            },
            area: {
                fillOpacity: 0.35,
                states: {
                            hover: {
                                enabled: false
                            }
                        },
                marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 2
                    }
            }
        },
        legend: { enabled: false },
        credits: { enabled: false },
    series : [{
      name : 'data',
            lineWidth: 2,
      data : (function() {
        // generate an array of random data
        var data = [], time = (new Date()).getTime(), i;
                      var previous;
        for( i = -10; i <= 0; i+=1) {
          data.push([
            time + i * 1000,
            0
          ]);
        }
        return data;
      })()
    }]
  });
/* humidityChart.addPoint([10, 10], true, true) */
 // setInterval(function() { 
 //  var x = (new Date()).getTime(); // current time
 //      // Previous value +/- 10 max
 //  var y = Math.round(temperatureChart.data.slice(-1)[0]['y'] + (Math.random() * 3 * (Math.round(Math.random()) * 2 - 1)));
 //      if (y < 0) 
 //          y = -y 
 //  temperatureChart.addPoint([x, y], true, true);
 // }, 1000); 

 // setInterval(function() { 
 //  var x = (new Date()).getTime(); // current time
 //      // Previous value +/- 10 max
 //  var y = Math.round(humidityChart.data.slice(-1)[0]['y'] + (Math.random() * 3 * (Math.round(Math.random()) * 2 - 1)));
 //      if (y < 0) 
 //          y = -y 
 //  humidityChart.addPoint([x, y], true, true);
 // }, 1000);

 



App.arduino = App.cable.subscriptions.create("ArduinoChannel", {
  connected: function() {
    console.log('connected');
  },
  disconnected: function() {
        console.log('disconnected');
  },
  received: function(data) {
    var x = (new Date()).getTime(); // current time

    temperatureChart.addPoint([x, data.temperature], true, true);
    humidityChart.addPoint([x, data.humidity], true, true);
    gasChart.addPoint([x, data.gas], true, true);
  },
  speak: function() {
  }

});












































});
/* humidityChart.addPoint([10, 10], true, true); */

