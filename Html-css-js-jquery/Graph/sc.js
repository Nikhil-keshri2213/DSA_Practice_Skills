var series = {
    monthDataSeries1: {
        prices: [
            8100, 8050, 8020, 7990, 7900,
            7800, 7700, 7600, 7550, 7500
        ],
        dates: [
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10"
        ]
    }
};

var options = {
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight' },
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: { type: 'datetime' },
    yaxis: { opposite: true },
    legend: { horizontalAlign: 'left' },
    colors: ['#FF0000'], // Change this to your desired color code
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var series = {
    monthDataSeries1: {
        prices: [
            8100, 8050, 8020, 7990, 7900,
            7800, 7700, 7600, 7550, 7500
        ],
        dates: [
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10"
        ]
    }
};

var options = {
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: { type: 'datetime' },
    yaxis: { opposite: true },
    legend: { horizontalAlign: 'left' },
    colors: ['#00ff00'], // Change this to your desired color code
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

var series = {
    monthDataSeries1: {
        prices: [
            8100, 8050, 8020, 7990, 7900,
            7800, 7700, 7600, 7550, 7500
        ],
        dates: [
            "2025-01-01",
            "2025-01-02",
            "2025-01-03",
            "2025-01-04",
            "2025-01-05",
            "2025-01-06",
            "2025-01-07",
            "2025-01-08",
            "2025-01-09",
            "2025-01-10"
        ]
    }
};

var options = {
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'stepline' },
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: { type: 'datetime' },
    yaxis: { opposite: true },
    legend: { horizontalAlign: 'left' },
    colors: ['#0000ff'], // Change this to your desired color code
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

var options = {
          series: [25],
          chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.5
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.7
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Percent'],
        };

        var chart = new ApexCharts(document.querySelector("#chart4"), options);
        chart.render();
      
        
      
        var options = {
          series: [67],
          chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Median Ratio'],
        };

        var chart = new ApexCharts(document.querySelector("#chart5"), options);
        chart.render();
      
      