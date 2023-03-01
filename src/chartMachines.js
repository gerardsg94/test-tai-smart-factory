

export const chartMachines =(counter=0, parados=20, preparados=25, producidos=30)=> {

  console.log('Hola estas en chart')

  /*      
  new Chart(container, {
    type: 'bar',
    data: {
      labels: ['Green', 'Yellow', 'Red'],
      datasets: [{
        label: '# of Votes',
        data: [parados, preparados, producidos],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
*/
anychart.onDocumentLoad(function () {
  // create an instance of a pie chart
  var chart = anychart.pie();
  // set the data
  chart.data([
    ["Parados", parados],
    ["Preparados", preparados],
    ["Producidos", producidos],
  ]);
  // set chart title
  chart.title("Top 5 pancake fillings");
  // set the container element 
  chart.container(`chart_div${counter}`);
  // initiate chart display
  chart.draw();
});

const containerChart = document.getElementById(`chart_div${counter}`);


}




export default chartMachines;
