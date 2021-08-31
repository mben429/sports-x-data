
var BarTooltipsSettings = {
    intersect: false,
    position: 'nearest',
    displayColors: false,
    titleColor: massey_yellow,
    titleFont: {
        size: 20,
        family: "'Abel', sans-serif"
    },
    bodyFont: {
        size: 20,
        family: "'Abel', sans-serif"
    },
    caretPadding: 10,
}

const MetersGainedGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('mg-graph-canv'),
        config
    );
    setBarGraphConfig(myChart);
}

const TackleSuccessPosGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('ts-pos-graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const TackleSuccessByTypeGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('tck-aw-graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const TackleSuccessByArea = (graph_data_arr) => {
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
            borderColor: black_1,
            borderWidth: 3,
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


    var myChart = new Chart(
        document.getElementById('tck-area-graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const LinebreaksByPos = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('lb-by-position-graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const PosessionKickedGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('pos-kicked-graph'),
        config
    );
    setDoughnutConfig(myChart);
}

const TypeOfKicksMade = (graph_data_arr) => {
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
            borderColor: black_1,
            borderWidth: 3,
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


    var myChart = new Chart(
        document.getElementById('type_of_kick_graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const KicksRegatheredGraph = (graph_data_arr) => {
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
            borderColor: black_1,
            barThickness: 75,
            borderWidth: 3,
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


    var myChart = new Chart(
        document.getElementById('kick_regathered_graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const KickForTouchMetersGainGraph = (graph_data_arr) => {
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
            borderColor: black_1,
            barThickness: 75,
            borderWidth: 3,
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


    var myChart = new Chart(
        document.getElementById('meters_gain_kft_graph'),
        config
    );
    setBarGraphConfig(myChart);
}

const PassSuccessByTypeGraph = (graph_data_arr) => {
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
            borderColor: black_1,
            barThickness: 50,
            borderWidth: 3,
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


    var myChart = new Chart(
        document.getElementById('pass_success_by_type_graph'),
        config
    );
    setBarGraphConfig(myChart, 20, 4, 0);
}

const PassesTotalByType = (graph_data_arr) => {
    const labels = [
        "Short Ball from Ruck or Set Piece %",
        "Ball to Backline from Ruck or Set Piece %",
        "Short Pass Loose Play %",
        "Medium Pass Loose Play %",
        "Long Pass Loose Play %",
        "Offloads %"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Pass Total %',
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
                    display: true,
                    labels: {
                        font: {
                            size: 12
                        },
                        boxWidth: 40,
                        padding: 5
                    }
                },
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('passes_made_total_by_type_graph'),
        config
    );
    setDoughnutConfig(myChart);
}

const TypeHandlingErrorsGraph = (graph_data_arr) => {
    const labels = [
        "Knock on From General Passing Play",
        "Forward Pass",
        "Dropped Ball Whilst Receiving Kick",
        "Knock on in Ruck",
        "Knock on During Set Piece"
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


    var myChart = new Chart(
        document.getElementById('type_handling_errors_graph'),
        config
    );
    setDoughnutConfig(myChart);
}

const RuckRecycleSpeedGraph = (graph_data_arr) => {
    const labels = [
        "0-3 Seconds",
        "3-6 Seconds",
        "6+ Seconds"
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Ruck Recycle Speed',
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


    var myChart = new Chart(
        document.getElementById('ruck_recycle_speed_graph'),
        config
    );
    setBarGraphConfig(myChart);

}

const TriesOffSetPieceGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('tries_off_set_piece_graph'),
        config
    );
    setBarGraphConfig(myChart, -15);

}

const TypesOfPenaltiesGraph = (graph_data_arr) => {
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


    var myChart = new Chart(
        document.getElementById('types_of_penalties_conceded_graph'),
        config
    );
    setBarGraphConfig(myChart, -10);
}