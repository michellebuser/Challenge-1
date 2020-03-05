new Chart(document.getElementById('fuel-chart'), {
  type: 'line',
  data: {
    labels: ['1/2020', '6/2020', '1/2021', '6/2021', '1/2022', '3/2020'],
    datasets: [{ 
        data: [1500, 1200, 900, 600, 300, 0],
        label: 'Fuel',
        borderColor: '#F0F465',
        backgroundColor: '#F0F465',
        fill: false
      }, 
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Fuel form beginning to end of journey'
    }
  }
});