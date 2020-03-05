// Deze regels JavaScript zorgen ervoor dat de piechart gecreëerd en gestyled wordt.
var myChart = document.getElementById('food').getContext('2d');

// Dit is de data voor de grafiek.
var massPopChart = new Chart(myChart, {
      type:'doughnut',
      data:{
        labels:['Bread', 'Sandwiches', 'Snacks', 'Fruits', 'Other'],
        datasets:[{
          label:'Water',
          data:[3000, 2000, 1700, 3200, 4500],

          // Hieronder staan enkele regels die de grafiek styling geven.
          backgroundColor:['#011936', '#465362', '#82A3A1', '#9FC490', '#C0DFA1'],
          borderWidth:1,
          borderColor:'transparent',
          hoverBorderWidth:3,
          hoverBorderColor:'transparent'
        }]
      },
      
      // Deze regels hebben invloed op de styling van de grafiek.
      options:{
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:5,
            right:5,
            bottom:5,
            top:5
          }
        },
        tooltips:{
          enabled:true
        }
      }
});




