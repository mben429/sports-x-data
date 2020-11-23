let green_win = "rgb(80,118,35)";
let red_win = "rgb(154,46,46)";


function team_tackle_line_graph(){
  var ctx = document.getElementById('tackles_improvement_lc').getContext('2d');
  var newLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Game 1', 'Game 2', 'Game 3', "Game 4"],
      datasets: [{
        backgroundColor: "rgb(15,14,16)",
        borderColor: "rgb(248,189,65)",
        data: [75, 78, 92, 80],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 100,
            min: 50,
            stepSize: 10
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0
        }
      }
    }

  });
}

function total_handling_errors_pg(){
  var ctx = document.getElementById('handling-errors-pg').getContext('2d');
  var newLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Game 1', 'Game 2', 'Game 3', "Game 4"],
      datasets: [{
        backgroundColor: "rgb(15,14,16)",
        borderColor: "rgb(248,189,65)",
        data: [18, 10, 14, 6],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 25,
            min: 0,
            stepSize: 5
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0
        }
      }
    }

  });
}

function overall_posession_pg(){
  var ctx = document.getElementById('overall_posession_pg').getContext('2d');
  var newLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Game 1', 'Game 2', 'Game 3', "Game 4"],
      datasets: [{
        backgroundColor: "rgb(15,14,16)",
        borderColor: "rgb(248,189,65)",
        data: [60, 55, 60, 75],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 100,
            min: 0,
            stepSize: 25
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0
        }
      }
    }

  });
}

function ruck_speed_bar(){
  var ctx = document.getElementById('ruck_speed_canvas').getContext('2d');

  var newHorizontalBar = new Chart(ctx,
  {
    type: 'horizontalBar',
    data: {
      labels: ['% at 6+ seconds', '% at 3-6 seconds', '% at 0-3 seconds'],
      datasets: [{
          data: [36.76, 27.94, 35.29],
          backgroundColor: "rgb(248, 189, 65)",
          borderColor: "rgb(248, 189, 65)",
        }],
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            max: 100,
            min: 0,
            stepSize: 20
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
}

function tackles_pi_graph(){
  var ctx = document.getElementById('tackle-pie-graph').getContext('2d');
  var newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [55, 45],
        backgroundColor: [
          green_win,
          red_win
        ],
        borderWidth: 5,
        borderColor: [
          "rgb(255,255,255)",
          "rgb(255,255,255)"        
        ],
        
          hoverBorderWidth: 1,
      }],
      labels: ["Tackle Made %", "Tackles Missed %"]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}

function lineout_success_pie(){
  var ctx = document.getElementById('lineout_success_canvas').getContext('2d');
  var newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [56, 44],
        backgroundColor: [
          "rgb(255,205,86)",
          "rgb(50,50,50)"
        ],
        borderWidth: 5,
        borderColor: [
          "rgb(15,14,16)",
          "rgb(15,14,16)",
        ],
        hoverBorderWidth: 1,
      }],
      labels: ["Linout Wins", "Lineout Losses"]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}

function scrum_success_pie(){
  var ctx = document.getElementById('scrum_success_canvas').getContext('2d');
  var newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [80, 20],
        backgroundColor: [
          "rgb(255,205,86)",
          "rgb(50,50,50)"
        ],
        borderWidth: 5,
        borderColor: [
          "rgb(15,14,16)",
          "rgb(15,14,16)",
        ],
        hoverBorderWidth: 1,
      }],
      labels: ["Scrum Wins", "Scrum Losses"]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}

function passing_success_pie(){
  var ctx = document.getElementById('passing_success_canvas').getContext('2d');
  var newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [90, 10],
        backgroundColor: [
          "rgb(255,205,86)",
          "rgb(50,50,50)"
        ],
        borderWidth: 5,
        borderColor: [
          "rgb(15,14,16)",
          "rgb(15,14,16)",
        ],
        hoverBorderWidth: 1,
      }],
      labels: ["Successfull passes", "Unsuccessful Passes"]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}
