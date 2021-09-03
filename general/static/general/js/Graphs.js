var CURRENT_SCREEN_WIDTH = $(window).width();
var CURRENT_SCREEN_HEIGHT = $(window).height();

var BarTooltipsSettings = {
    intersect: false,
    position: 'nearest',
    displayColors: false,
    titleColor: massey_yellow,
    titleFont: {
        family: "'Abel', sans-serif"
    },
    bodyFont: {
        family: "'Abel', sans-serif"
    },
    caretPadding: 10,
}

var MetersGainedGraph = (graph_data_arr) => {
    /*
    console.log("Graph data arr", graph_data_arr);
    let new_g_data = []
    for(let i = 0; i < graph_data_arr.length; i++){
        new_g_data.push(graph_data_arr[i][0][0]);
    }
    console.log("After proccessing graph data arr", new_g_data);
    */
    const labels = [
        'One-Off Runner',
        'Backline Move',
        'Pick and Go',
        ];
    
    const data = {
        labels: labels,
        datasets: [{
            label: '% time Meters where Gained',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            barThickness: 100,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    stepSize: 20,
                    max: 100,
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('mg-graph-canv'),
        config
    );

    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 25, 7, 7, 10);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 12, 12, 20);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 75, 16, 16, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 90, 25, 25, 35);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 130, 35, 35, 45);
    }
}

var TackleSuccessPosGraph = (graph_data_arr) => {
    const labels = [
        'Backs',
        'Forwards',
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Tackle Success % by Position',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                    stepSize: 20,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('ts-pos-graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 15, 6, 6, 7);
        myChart.update();
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 12, 12, 15);
        myChart.update();
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 75, 16, 16, 20);
        myChart.update();
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 75, 20, 20, 20);
        myChart.update();
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
        myChart.update();
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 90, 25, 25, 30);
        myChart.update();
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 130, 35, 35, 45);
        myChart.update();
    }
}

var TackleSuccessByTypeGraph = (graph_data_arr) => {
    console.log("DATA", graph_data_arr);
    const labels = [
        'Above Waist',
        'Below Waist',
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Tackle Success % by Type of Tackle',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                    stepSize: 20,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('tck-aw-graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 15, 5, 5, 5);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 12, 12, 15);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 75, 16, 16, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 90, 25, 25, 35);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 130, 35, 35, 45);
    }
}

var TackleSuccessByArea = (graph_data_arr) => {
    const labels = [
        'Own 5m',
        'Opp 5m',
        'Own 22',
        'Opp 22',
        'Midfield'
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Tackle Success % by Area of Field',
            backgroundColor: massey_yellow,
            barThickness: 50,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                    stepSize: 20,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('tck-area-graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 10, 4, 4, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 20, 12, 12, 8);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 35, 16, 16, 10);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 50, 20, 20, 10);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 55, 20, 20, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 75, 25, 25, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 90, 35, 35, 45);
    }
}

var LinebreaksByPos = (graph_data_arr) => {
    const labels = [
        "Backs",
        "Forwards"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Linebreaks Allowed by Position',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: Math.max(...graph_data_arr) + 2,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('lb-by-position-graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 15, 6, 6, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 12, 12, 15);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 75, 16, 16, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 75, 20, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 90, 25, 25, 35);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 130, 35, 35, 45);
    }
}

var PosessionKickedGraph = (graph_data_arr) => {
    const labels = [
        "% Kicked",
        "% Not Kicked"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: '% Posession Kicked',
            backgroundColor: [green_win, red_lose],
            borderColor: black_1,
            data: graph_data_arr,
            hoverOffset: 20,
            }],
        
        };

    const config = {
        type: 'doughnut',
        data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 12
                        },
                        boxWidth: 40
                    }
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(2)+"%";
                        return percentage;

                    },
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('pos-kicked-graph'),
        config
    );
    // Set doughnut display settings based on size of screen args: (chart, legendFontSize, legendBoxSize, offset, tooltipFontSize)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setDoughnutDisplaySettings(myChart, 7, 13, 5, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setDoughnutDisplaySettings(myChart, 8, 15, 5, 7);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setDoughnutDisplaySettings(myChart, 12, 17, 8, 15);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setDoughnutDisplaySettings(myChart, 12, 17, 8, 15);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setDoughnutDisplaySettings(myChart, 12, 17, 8, 15);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setDoughnutDisplaySettings(myChart, 14, 20, 11, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setDoughnutDisplaySettings(myChart, 17, 25, 18, 30);
    }
}

var TypeOfKicksMade = (graph_data_arr) => {
    const labels = [
        "Punts",
        "Chip Kicks",
        "Grubbers",
        "Up and Unders",
        "Box Kicks"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Types of Kicks Made',
            backgroundColor: massey_yellow,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: Math.max(...graph_data_arr) + 2
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('type_of_kick_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 10, 6, 6, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 25, 13, 10, 8);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 32, 15, 13, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 55, 18, 18, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 70, 24, 24, 30);
    }
}

var KicksRegatheredGraph = (graph_data_arr) => {
    const labels = [
        "Punts",
        "Chip Kicks",
        "Grubbers",
        "Up and Unders",
        "Box Kicks"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: '% Kicks Regathered',
            backgroundColor: massey_yellow,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('kick_regathered_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 10, 6, 6, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 25, 11, 11, 13);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 27, 15, 13, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 55, 18, 18, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 70, 24, 24, 30);
    }
}

var KickForTouchMetersGainGraph = (graph_data_arr) => {
    const labels = [
        "0m",
        "0m to 10m",
        "10m to 30m",
        "30m to 60m",
        "More than 60m"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: '% of Kicks',
            backgroundColor: massey_yellow,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('meters_gain_kft_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, legendfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 10, 6, 6, 7);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 25, 11, 11, 13);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 27, 15, 13, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 35, 18, 15, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 55, 18, 18, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 70, 24, 24, 30);
    }
}

var PassSuccessByTypeGraph = (graph_data_arr) => {
    const labels = [
        "Short Ball from Ruck or Set Piece",
        "Ball to Backline from Ruck or Set Piece",
        "Short Pass Loose Play",
        "Medium Pass Loose Play",
        "Long Pass Loose Play",
        "Offloads"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Pass Success %',
            backgroundColor: massey_yellow,
            barThickness: 50,
            hoverBackgroundColor: massey_yellow_2,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)",
                        
                    },
                    ticks: {
                        font: {
                            size: 13,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('pass_success_by_type_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 18, 3, 7, 13);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 30, 7, 13, 18);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 40, 8, 15, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 60, 9, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 60, 9, 20, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 60, 11, 25, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 80, 15, 35, 35);
    }
}

var TypeHandlingErrorsGraph = (graph_data_arr) => {
    const labels = [
        "KO General Passing Play",
        "Forward Pass",
        "KO Whilst Receiving Kick",
        "KO in Ruck",
        "KO During Set Piece"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: '% Handling Errors Made',
            backgroundColor: [green_win, red_lose, massey_yellow, blue_1, orange_1],
            borderColor: black_1,
            data: graph_data_arr,
            borderWidth: 3,
            hoverBorderWidth: 1, 
            hoverOffset: 20
            }],
        };

    const config = {
        type: 'doughnut',
        data,
        options: {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 12
                        },
                        boxWidth: 40
                    }
                },
                tooltip: {
                    position: 'nearest',
                    xAlign: 'right',
                }

            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('type_handling_errors_graph'),
        config
    );
    // Set doughnut display settings based on size of screen args: (chart, legendFontSize, legendBoxSize, offset, tooltipFontSize)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setDoughnutDisplaySettings(myChart, 5, 10, 5, 6);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setDoughnutDisplaySettings(myChart, 8, 15, 10, 15);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setDoughnutDisplaySettings(myChart, 0, 0, 20, 20);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setDoughnutDisplaySettings(myChart, 0, 0, 20, 20);   
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setDoughnutDisplaySettings(myChart, 0, 0, 20, 20);  
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setDoughnutDisplaySettings(myChart, 0, 0, 30, 20);  
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setDoughnutDisplaySettings(myChart, 0, 0, 40, 30);
    }
}

var RuckRecycleSpeedGraph = (graph_data_arr) => {
    const labels = [
        "0-3 Seconds",
        "3-6 Seconds",
        "6+ Seconds"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Ruck Recycle Speed %',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 75,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 13,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: 100,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('ruck_recycle_speed_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 25, 9, 10, 13);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 11, 12, 25);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 65, 14, 16, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 80, 15, 18, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 95, 18, 19, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 105, 20, 21, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 115, 22, 24, 30);
    }

}

var TriesOffSetPieceGraph = (graph_data_arr) => {
    const labels = [
        "Scrum",
        "Lineouts"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Tries off of Set Piece',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 150,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 13,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: Math.max(...graph_data_arr) + 2,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('tries_off_set_piece_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 30, 9, 10, 13);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 11, 12, 25);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 80, 16, 17, 29);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 90, 15, 18, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 100, 18, 19, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 130, 20, 21, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 200, 25, 26, 45);
    }

}

var TypesOfPenaltiesGraph = (graph_data_arr) => {
    const labels = [
        "Ruck Penalty",
        "Offside Penalty",
        "Scrum Penalty",
        "Lineout Penalty",
        "Other"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Tries off of Set Piece',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 80,
            hoverBackgroundColor: massey_yellow_2,
            hoverBorderColor: black_1,
            data: graph_data_arr,
            }]
        };

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                x: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 13,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 15
                    }
                },
                y: {
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: true,
                        color: "rgba(165,167,170, 0.5)"
                    },
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Abel', sans-serif"
                        },
                        color: white,
                        padding: 7
                    },
                    min: 0,
                    max: Math.max(...graph_data_arr) + 2,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: BarTooltipsSettings,
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    let myChart = new Chart(
        document.getElementById('types_of_penalties_conceded_graph'),
        config
    );
    // Set display settings based on size of screen args: (chart, barwidth, xticksfont, yticksfont, tooltipfont)
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        setBarDisplaySettings(myChart, 25, 7, 10, 13);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        setBarDisplaySettings(myChart, 50, 11, 12, 25);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        setBarDisplaySettings(myChart, 65, 14, 16, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        setBarDisplaySettings(myChart, 80, 15, 18, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        setBarDisplaySettings(myChart, 95, 18, 19, 25);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1900 && CURRENT_SCREEN_WIDTH <= 2299) {
        setBarDisplaySettings(myChart, 105, 20, 21, 30);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        setBarDisplaySettings(myChart, 115, 22, 24, 30);
    }
}