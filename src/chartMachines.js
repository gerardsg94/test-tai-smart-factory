

export const chartMachines =(data, i)=> {

 return  data.then(response => {
       
      if(i != 'undefined') {
          
          var index = i;
      }
      else {
          var index = 0;
      }
  
      //if(!container) return;
  
      const result = response.Payload;
  
      const allWorkunits = result.map(({workunits}) => workunits)
      
  
      var count = 0;
  
      const getWorkunit= allWorkunits[index].map((workunit)=>{

  
          getChart(count, workunit.tpar, workunit.tprep, workunit.tprod);
          console.log('--------------')
  
          count++;
    })
  
      
     
  })


}

export const getChart=(counter=0, parados=20, preparados=25, producidos=30)=> {

  const container = document.getElementById(`chart_div${counter}`);

    // create an instance of a pie chart
    console.log('Datos de: ', counter)
    console.log(parados, preparados, producidos)
    var chart = anychart.bar();
    // set the data
    chart.data([
      ["Parados", parados],
      ["Preparados", preparados],
      ["Producidos", producidos],
    ]);
    // set chart title
    chart.title("Piezas");
    // set the container element 
    chart.container(container);
    // initiate chart display
    chart.draw();


}



//export default getChart;
export default chartMachines;
