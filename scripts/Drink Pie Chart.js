// Deze regels JavaScript zorgen ervoor dat de piechart gecreëerd en gestyled wordt.
var myChart = document.getElementById('drink').getContext('2d');

// Dit is de data voor de grafiek.
var massPopChart = new Chart(myChart, {
      type:'doughnut',
      data:{
        labels:['Water', 'Juices', 'Smoothies', 'Alcohol', 'Other'],
        datasets:[{
          label:'Water',
          data:[4000, 2000, 3100, 2200, 3500],

          // Hieronder staan enkele regels die de grafiek styling geven.
          backgroundColor:['#2F242C', '#502274', '#A42CD6', '#C179B9', '#EEB4B3'],
          borderWidth:1,
          borderColor:['#2F242C', '#502274', '#A42CD6', '#C179B9', '#EEB4B3'],
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
            left:0,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
});




