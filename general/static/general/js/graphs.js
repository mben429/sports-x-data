let green_win = "rgb(80,118,35)";
let red_win = "rgb(154,46,46)";

function tackles_pi_graph(){
  let ctx = document.getElementById('tackle-pie-graph').getContext('2d');
  let newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [83.333, 16.666],
        backgroundColor: [
          green_win,
          red_win
        ],
        borderWidth: 5,
        borderColor: [
          "rgb(15,14,16)",
          "rgb(15,14,16)"        
        ],
        
          hoverBorderWidth: 1,
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

