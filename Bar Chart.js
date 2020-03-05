new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Cooking", "Painting", "Gardening", "Fitness", "Gaming"],
      datasets: [
        {
          label: "Participants",
          backgroundColor: ['#FAA275', '#FF8C61', '#CE6A85', '#985277', '#5C374C'],
          data: [20, 20, 20, 20, 20]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Registrations per activity'
      }
    }
});


