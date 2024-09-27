// Example script for displaying a chart (Chart.js can be used)
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Calories Burned',
      data: [200, 450, 300, 500, 700, 650, 500],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    }]
  }
});

