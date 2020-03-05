new Chart(document.getElementById("speed-chart"), {
  type: 'line',
  data: {
    labels: ['1/2020', '6/2020', '1/2021', '6/2021', '1/2022', '3/2020'],
    datasets: [{ 
        data: [146000, 230250, 230250, 230250, 230250, 146000],
        label: "Speed",
        borderColor: '#ADD7F6',
        backgroundColor: '#ADD7F6',
        fill: false
      }, 
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Speed form beginning to end of journey'
    }
  }
});