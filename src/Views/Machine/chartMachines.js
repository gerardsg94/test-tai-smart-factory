import getChart from '../../Services/getChart';

export const chartMachines = (data, i) => {

  data.then(response => {
  
    const result = response.Payload;

    const allWorkunits = result.map(({workunits}) => workunits)
    
    var count = 0;

    allWorkunits[i].forEach((workunit)=>{

      const container = document.getElementById(`chart_div${count}`);
      getChart(container, workunit.tpar, workunit.tprep, workunit.tprod);  
      count++;

    })
  
  })

}


export default chartMachines;
