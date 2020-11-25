let green_win = "rgb(80,118,35)";
let red_win = "rgb(154,46,46)";

function tackles_pi_graph(){
  let ctx = document.getElementById('tackle-pie-graph').getContext('2d');
  let newPie = new Chart(ctx,
  {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [80, 20],
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

