

/*Viewport sizes*/
let WINDOW_HEIGHT = $(window).height();
let WINDOW_WIDTH = $(window).width();

// Responsible for ensuring all charts are responsive to different screen sizes
function make_responsive(curr_chart){
  if (WINDOW_WIDTH <= 700) {
    curr_chart.options.legend.labels.fontSize = 4;
  
    if (curr_chart.config.type == "bar" || curr_chart.config.type == 'horizontalBar'){
      set_bar_thickness(curr_chart, 10);
      curr_chart.options.scales.xAxes[0].ticks.fontSize = 4;
      curr_chart.options.scales.yAxes[0].ticks.fontSize = 4;
    }
    else if (curr_chart.config.type == "radar") {
      curr_chart.options.scale.pointLabels.fontSize = 4;
    }
  }
  else if (WINDOW_WIDTH > 700 && WINDOW_WIDTH < 1100){
    curr_chart.options.legend.labels.fontSize = 9;

    if (curr_chart.config.type == "bar" || curr_chart.config.type == 'horizontalBar'){
      set_bar_thickness(curr_chart, 15);
      curr_chart.options.scales.xAxes[0].ticks.fontSize = 9;
      curr_chart.options.scales.yAxes[0].ticks.fontSize = 9;
    }
    else if (curr_chart.config.type == "radar") {
      curr_chart.options.scale.pointLabels.fontSize = 9;
    }
  }
  else if (WINDOW_WIDTH >= 1100 && WINDOW_WIDTH < 1600){
    curr_chart.options.legend.labels.fontSize = 11   

    if (curr_chart.config.type == "bar" || curr_chart.config.type == 'horizontalBar'){
      set_bar_thickness(curr_chart, 20);
      curr_chart.options.scales.xAxes[0].ticks.fontSize = 11;
      curr_chart.options.scales.yAxes[0].ticks.fontSize = 11; 
    }
    else if (curr_chart.config.type == "radar") {
      curr_chart.options.scale.pointLabels.fontSize = 11;
    }
  }
  else if (WINDOW_WIDTH > 1600){
    curr_chart.options.legend.labels.fontSize = 12;
    
    if (curr_chart.config.type == "bar" || curr_chart.config.type == 'horizontalBar'){
      set_bar_thickness(curr_chart, 30); 
      curr_chart.options.scales.xAxes[0].ticks.fontSize = 12;
      curr_chart.options.scales.yAxes[0].ticks.fontSize = 12;  
    }
    else if (curr_chart.config.type == "radar") {
      curr_chart.options.scale.pointLabels.fontSize = 12;
    }
  }
}


// Set Bar thickness of all datasets in graph
function set_bar_thickness(curr_chart, new_thickness){
  let curr_datasets = curr_chart.config.data.datasets;
  var i;

  for(i = 0; i < curr_datasets.length; i++){
    curr_datasets[i].barThickness = new_thickness;
  }
}


/*ALL CHARTS START HERE*/

function tackles_pi_graph(team){
  let ctx = document.getElementById('tackle-pie-graph').getContext('2d');
  let newChart = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [83.333, 16.666],
        backgroundColor: [
          green_win,
          red_lose
        ],
        borderWidth: 5,
        borderColor: [
          massey_black,
          massey_black        
        ],
        
          hoverBorderWidth: 0.5,
      }],
      labels: ["Tackles Made %", "Tackles Missed %"]
    },
    options: {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });

  make_responsive(newChart);
  
}

function tackles_22_pie_graph(team) {
  let ctx = document.getElementById('tackle-22-pie-graph-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [85, 15],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["Tackles Made %", "Tackles Missed %"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function tackles_5_pie_graph(team) {
  let ctx = document.getElementById('tackle-5-pie-graph-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [95, 5],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["Tackles Made %", "Tackles Missed %"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function linespeed_barchart(team) {
  let ctx = document.getElementById('line-speed-graph-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'horizontalBar',
      
      data: {

        datasets: [{
          data: [2.7, 2.9],
          backgroundColor: [
            massey_black,
            massey_black
          ],
          borderWidth: 2,
          borderColor: [
            teamMainColorsGraphs[team],
            teamMainColorsGraphs[team]
          ],
          hoverBorderWidth: 5,
          barThickness: 30
        }],

        labels: [
          "Time till first contact (s)", 
          "Season Avg time till first contact (s)"
        ]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 5.0,
              min: 0,
              stepSize: 1.0
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}

function opp_pts_22_barchart(team) {
  let ctx = document.getElementById('opp-pts-22-graph-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'horizontalBar',
      
      data: {

        datasets: [{
          data: [2.2, 1.9],
          backgroundColor: [
            massey_black,
            massey_black
          ],
          borderWidth: 2,
          borderColor: [
            teamMainColorsGraphs[team],
            teamMainColorsGraphs[team],
          ],
          hoverBorderWidth: 5,
          barThickness: 30
        }],

        labels: [
          "Opponents Points / Visit to 22", 
          "Season Avg of Opponents Points / Visit to 22"
        ]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 5.0,
              min: 0,
              stepSize: 1.0
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}

function posessions_gain_meters(team) {
  let ctx = document.getElementById('posession-gain-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [57, 43],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["% of posessions that lead to Gain in Meters", "% of posessions that did not lead to Gain in Meters"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function running_on_ball_pie(team) {
  let ctx = document.getElementById('running-on-ball-graph-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [70, 30],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["Running onto the ball %", "Not Running onto ball %"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function points_per_visit_22(team) {
  let ctx = document.getElementById('points-per-visit-bar-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'horizontalBar',
      
      data: {

        datasets: [{
          data: [2.4, 1.9],
          backgroundColor: [
            massey_black,
            massey_black
          ],
          borderWidth: 2,
          borderColor: [
            teamMainColorsGraphs[team],
            teamMainColorsGraphs[team],
          ],
          hoverBorderWidth: 5,
          barThickness: 30
        }],

        labels: [
          "Points / Visit to 22", 
          "Season Avg of Points / Visit to 22"
        ]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 5.0,
              min: 0,
              stepSize: 1.0
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}


function meters_gain_success(team){
  let ctx = document.getElementById('meter-gain-success-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{
          data: [2.4, 1.9],
          backgroundColor: [
            massey_black,
            massey_black
          ],
          borderWidth: 2,
          borderColor: [
            teamMainColorsGraphs[team],
            teamMainColorsGraphs[team],
          ],
          hoverBorderWidth: 5,
          barThickness: 30
        }],

        labels: [
          "Points / Visit to 22", 
          "Season Avg of Points / Visit to 22"
        ]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 5,
              min: 0,
              stepSize: 0.5
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}

function posessions_kicked_pie(team){
  let ctx = document.getElementById('posessions-kicked-pie-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [15, 85],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["% of Kicked", "% Posessions No Kick"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function kicks_out_on_full_bar(team){
  let ctx = document.getElementById('kicks-out-on-full-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{
          data: [3, 1.9],
          backgroundColor: [
            massey_black,
            massey_black
          ],
          borderWidth: 2,
          borderColor: [
            teamMainColorsGraphs[team],
            teamMainColorsGraphs[team],
          ],
          hoverBorderWidth: 5,
          barThickness: 30
        }],

        labels: [
          "Kicks out on full outside 22", 
          "Season avg Kicks out on full outside 22"
        ]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 10
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}

function kick_regathers_bar(team){
  let ctx = document.getElementById('kick-regathers-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{

          label: 'Number of Kicks regathered',
          data: [2, 1, 2, 1],
          backgroundColor: green_win,
          borderWidth: 3,
          borderColor: massey_black,
          hoverBorderWidth: 1,
          barThickness: 30
          },

          {
          label: "Number of Kicks not regathered",
          data: [1, 2, 4, 2],
          backgroundColor: red_lose,
          borderWidth: 5,
          borderColor: massey_black,
          hoverBorderWidth: 1,
          barThickness: 30
          },
        ],

        labels: [ 
          "Grubbers",
          "Up-and-unders",
          "Chip-kicks",
          "Cross kicks",
        ]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 5,
              min: 0,
              stepSize: 1
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
  make_responsive(newChart);
  
}

function kick_for_touch_bar(team){
  let ctx = document.getElementById('kick-for-touch-success-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{
          data: [15.4, 7.7, 30.8, 38.5, 7.7],
          backgroundColor: massey_black,
          borderWidth: 3,
          borderColor: teamMainColorsGraphs[team],
          hoverBorderWidth: 10,
          },
        ],

        labels: [
          "% Kicks - 0 Meters Gained", //2
          "% Kicks - 10+ Meters Gained", //1
          "% Kicks - 20+ Meters Gained", //4
          "% Kicks - 30+ Meters Gained", //5
          "% Kicks - 50+ Meters Gained", // 1 TOTAL: 13
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 50,
              min: 0,
              stepSize: 5
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);  
    
}

function pass_success_pie(team){
  let ctx = document.getElementById('pass-success-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [85, 15],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["% Successful Passes", "% Failed Passes"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function pass_success_by_type_bar(team) {
  let ctx = document.getElementById('pass-success-by-type-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{

          label: '% Pass Success',
          data: [33.33, 70, 75, 80, 90, 93],
          backgroundColor: green_win,
          borderWidth: 3,
          borderColor: massey_black,
          hoverBorderWidth: 1,
          barThickness: 30
          },

          {
          label: "% Pass Failure",
          data: [66.66, 30, 25, 20, 10, 7],
          backgroundColor: red_lose,
          borderWidth: 5,
          borderColor: massey_black,
          hoverBorderWidth: 1,
          barThickness: 30
          },
        ],

        labels: [ 
          "Long Pass in Backline",
          "Medium Pass in Backline",
          "Short Ball in Backline",
          "Halfback pass to Backs",
          "Halfback pass to Forwards",
          "Pickup From ground or ruck",
        ]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function handling_errors_bar(team){
  let ctx = document.getElementById('handling-errors-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{
          label: 'Number of Errors',
          data: [4, 2, 1, 2, 1, 5],
          backgroundColor: massey_black,
          borderWidth: 3,
          borderColor: teamMainColorsGraphs[team],
          hoverBorderWidth: 6,
          barThickness: 60
          },
        ],

        labels: [ 
          "Knock-On from Pass",
          "Knock-On when tackled",
          "Knock-On from Kick",
          "Knock-On from Ground Pick up",
          "Forward Pass",
          "Pass to Ground",
        ]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 7,
              min: 0,
              stepSize: 1
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function ruck_success_pie(team){
  let ctx = document.getElementById('ruck-success-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [80, 20],
          backgroundColor: [
            green_win, 
            red_lose
          ],
          borderWidth: 5,
          borderColor: [
            massey_black,
            massey_black
          ],
          hoverBorderWidth: 0.5,
        }],
        labels: ["% Posession kept", "% Posession lost (Allowed Ruck Steal, Handling Error, or Penalty)"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function ruck_speed_bar(team){
  let ctx = document.getElementById('ruck-speed-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [{
          label: '% of Rucks ',
          data: [46.76, 27.94, 25.29],
          backgroundColor: [red_lose, middle_orange, green_win],
          borderWidth: 3,
          borderColor: massey_black,
          hoverBorderWidth: 10,
          barThickness: 80
          },
        ],

        labels: [ 
          "% Ruck Speed 6+ Seconds",
          "% Ruck Speed 3-6 Seconds",
          "% Ruck Speed 0-3 Seconds"
        ]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 50,
              min: 0,
              stepSize: 25
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function ruck_success_diff_fields_bar(team){
  let ctx = document.getElementById('ruck-success-diff-fields-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [
        {
          label: '% Own Ruck Success ',
          data: [88, 82, 75],
          backgroundColor: green_win,
          borderWidth: 3,
          borderColor: massey_black,
          hoverBorderWidth: 5,
          barThickness: 80
        },

        {
          label: "% Own Rucks Lost",
          data: [12, 18, 21],
          backgroundColor: red_lose,
          borderWidth: 3,
          borderColor: massey_black,
          hoverBorderWidth: 5,
          barThickness: 80
        },
        ],

        labels: [ 
          "Own 22",
          "Middle of Field",
          "Opp 22"
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 25
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function set_piece_success_bar(team){
  let ctx = document.getElementById('set-piece-success-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [
          
          {
            label: '% Success ',
            data: [75, 45, 90, 80],
            backgroundColor: green_win,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 5,
            barThickness: 50
          },

          {
            label: "% Failure",
            data: [25, 55, 10, 20],
            backgroundColor: red_lose,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 5,
            barThickness: 50
          },

        ],

        labels: [ 
          "Own Lineout",
          "Opponent Lineout",
          "Own Scrum",
          "Opponent Scrum"
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function set_piece_diff_field(team){
  let ctx = document.getElementById('set-piece-success-dif-field-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [
          
          {
            label: '% Scrum Success ',
            data: [80, 82, 90],
            backgroundColor: massey_black,
            borderWidth: 3,
            borderColor: teamMainColorsGraphs[team],
            hoverBorderWidth: 8,
            barThickness: 50
          },

          {
            label: "% Lineout Success",
            data: [66.66, 75, 80],
            backgroundColor: massey_black,
            borderWidth: 3,
            borderColor: teamMainColorsGraphs[team],
            hoverBorderWidth: 8,
            barThickness: 50
          },

        ],

        labels: [ 
          "Own 22",
          "Middle Field",
          "Opponents 22"
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function action_taken_set_piece_pie(team){
  let ctx = document.getElementById('action-taken-set-piece-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{

          data: [20, 30, 40, 10],
          backgroundColor: [
            green_win,
            yellow_1,
            red_1,
            orange_1,
          ],
          borderWidth: 2,
          borderColor: massey_black,
          hoverBorderWidth: 0.5,
        }],
        labels: [
          "No.8 Solo Run",
          "No.8 to halfback",
          "Straight out to Backs",
          "Halfback solo run"
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function outcome_from_set_piece(team){
  let ctx = document.getElementById('outcome-from-set-piece-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [30, 20, 20, 30],
          backgroundColor: [
            green_win,
            red_1,
            yellow_1,
            orange_1,
          ],
          borderWidth: 2,
          borderColor: massey_black,
          hoverBorderWidth: 0.5,
        }],
        labels: [
          "Meters Gain",
          "Meters Lost",
          "Linebreak",
          "Kick"
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

function penalties_conceded_bar(team){
  let ctx = document.getElementById('types-of-penalties-conceded-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [
          
          {
            label: '% Penalty Occurence ',
            data: [35, 20, 25, 5, 15],
            backgroundColor: massey_black,
            borderWidth: 3,
            borderColor: teamMainColorsGraphs[team],
            hoverBorderWidth: 8,
            barThickness: 50
          },

        ],

        labels: [ 
          "Ruck/Maul Penalty %",
          "Offside Penalty %",
          "Scrum Penalty %",
          "Dangerous Tackle Penalties %",
          "Other Penalty%"
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 50,
              min: 0,
              stepSize: 5
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function penalties_conceded_diff_field_bar(team){
  let ctx = document.getElementById('penalties-diff-field-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'bar',
      
      data: {
        datasets: [
          
          {
            label: 'Ruck/Maul Penalties',
            data: [4, 1, 3],
            backgroundColor: green_win,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 4,
            barThickness: 25
          },

          {
            label: 'Offside Penalties',
            data: [3, 0, 2],
            backgroundColor: red_1,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 4,
            barThickness: 25
          },

          {
            label: 'Scrum Penalties',
            data: [2, 4, 1],
            backgroundColor: yellow_1,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 4,
            barThickness: 25
          },

          {
            label: 'Dangerous Tackle Penalties',
            data: [0, 0, 2],
            backgroundColor: orange_1,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 4,
            barThickness: 25
          },

          {
            label: 'Other Penalties',
            data: [1, 0, 2],
            backgroundColor: blue_1,
            borderWidth: 3,
            borderColor: massey_black,
            hoverBorderWidth: 4,
            barThickness: 25
          },

        ],

        labels: [ 
          "Own 22",
          "MidField",
          "Opp 22"
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 5,
              min: 0,
              stepSize: 1
            }
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true
        }
      }
    });
    make_responsive(newChart);
    
}

function outcome_of_penalties_pie(team){
  let ctx = document.getElementById('outcome-of-penalties-conceded-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [15, 15, 70],
          backgroundColor: [
            blue_1,
            red_1,
            green_win,
          ],
          borderWidth: 2,
          borderColor: massey_black,
          hoverBorderWidth: 0.5,
        }],
        labels: [
          "Try",
          "Penalty Goal",
          "Succesfull Defense"
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
  make_responsive(newChart);
  
}

//Seven Aspects of game are: Defense, Attack, Ball Handling, Kicking Game, Set Piece, Rucks, Discipline
function radar_chart_1(team){

  let inputData = {
    labels: [
      'Tackle Success %', 
      '% of Posessions leading to linebreak',
      'Pass Success %', 
      '% Kicks 30+ Meteres Gained',
      'Own Ruck Retained Success %',
      '% Own Lineout Success',
      '% Own Scrum Success'
    ],
    datasets: [
      {"label": "Rosmini College", "data": [85, 87, 75, 89, 76, 79, 81], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["rosmini1stxv"]},
      {"label": "Massey HS", "data": [82, 70, 72, 81, 88, 85, 76], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["massey1stxv"]},
      {"label": "Westlake BHS", "data": [79, 83, 89, 88, 72, 75, 80], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["westlake1stxv"]},
      {"label": "Rangitoto College", "data": [76, 73, 71, 84, 90, 77, 85], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["rangitoto1stxv"]},
      {"label": "Manurewa HS", "data": [72, 89, 78, 86, 80, 82, 74], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["manurewa1stxv"]},
      {"label": "Orewa College", "data": [79, 80, 75, 88, 85, 81, 70], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["orewa1stxv"]},
      {"label": "Whangarei BHS", "data": [81, 80, 73, 79, 88, 74, 83], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["whangarei1stxv"]},
      {"label": "Takapuna Grammar", "data": [90, 70, 86, 82, 81, 84, 89], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["takapuna1stxv"]},
      {"label": "Mahurangi College", "data": [80, 75, 70, 84, 82, 89, 87], "fill": true, "backgroundColor": teamMainColorsGraphsTransparent["mahurangi1stxv"]},
    ],
  };

  let inputOptions = {
    scale: {
        angleLines: {
          display: true
        },
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100,
        },
        pointLabels: {
          fontSize: 13
        }
    },
    legend: {
      display: true,
      labels: {
        fontSize: 13
      }
    }
    
  }; 

  let ctx = document.getElementById('radar-chart-1-canv').getContext('2d');
  let newChart = new Chart(ctx, 
    {
      type: 'radar',
      data: inputData,
      options: inputOptions  
    });

  make_responsive(newChart)
}

