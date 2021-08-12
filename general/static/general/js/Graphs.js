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