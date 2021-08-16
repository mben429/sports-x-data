const MetersGainedGraph = () => {
    const labels = [
        'One-Off Runner',
        'Backline Move',
        'Pick and Go',
        ];

    const data = {
        labels: labels,
        datasets: [{
            label: '% of the Time Meters Were Gained',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 100,
            data: [62, 70, 59],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('mg-graph-canv'),
        config
    );
}

const TackleSuccessPosGraph = () => {
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
            data: [66.66, 85],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('ts-pos-graph'),
        config
    );
}


const TackleSuccessByTypeGraph = () => {
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
            data: [75, 90],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('tck-aw-graph'),
        config
    );
}

const TackleSuccessByArea = () => {
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
            barThickness: 50,
            data: [95, 75, 88, 79, 70],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('tck-area-graph'),
        config
    );
}

const LinebreaksByPos = () => {
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
            data: [9, 5],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                    max: 15,
                    stepSize: 5,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('lb-by-position-graph'),
        config
    );
}

const PosessionKickedGraph = () => {
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
            data: [15, 85],
            }],
        hoverOffset: 4,
        };

    const config = {
        type: 'doughnut',
        data,
        options: {
            plugins: {
                legend: {
                    display: true
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
}


const TypeOfKicksMade = () => {
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
            barThickness: 75,
            data: [8, 8, 15, 3, 5],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                    max: 15,
                    stepSize: 5,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('type_of_kick_graph'),
        config
    );
}

const KicksRegatheredGraph = () => {
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
            data: [0, 75, 50, 100, 25],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('kick_regathered_graph'),
        config
    );
}

const KickForTouchMetersGainGraph = () => {
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
            label: 'No. of Kicks',
            backgroundColor: massey_yellow,
            borderColor: black_1,
            barThickness: 75,
            data: [2, 2, 6, 9, 1],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                    max: 15,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('meters_gain_kft_graph'),
        config
    );
}

const PassSuccessByTypeGraph = () => {
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
            barThickness: 75,
            data: [95, 80, 80, 75, 70],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('pass_success_by_type_graph'),
        config
    );
}

const PassesTotalByType = () => {
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
            data: [30, 25, 10, 15, 20],
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
                    display: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('passes_made_total_by_type_graph'),
        config
    );
}


const TypeHandlingErrorsGraph = () => {
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
            data: [30, 25, 10, 15, 20],
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
                    display: true
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
}

const RuckRecycleSpeedGraph = () => {
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
            data: [51, 31, 18],
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
                        color: "rgb(165,167,170)"
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
                        color: "rgb(165,167,170)"
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
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
        };


    var myChart = new Chart(
        document.getElementById('ruck_recycle_speed_graph'),
        config
    );
}