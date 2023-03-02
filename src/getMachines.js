import chartMachines from './chartMachines'

export const getMachines=(container, data, i)=>data
.then(response => {
     
     
    if(i != 'undefined') {
        
        var index = i;
    }
    else {
        var index = 0;
    }


    //if(!container) return;

    const result = response.Payload;

    const allWorkunits = result.map(({workunits}) => workunits)
    
    var counter = 0;

    const getWorkunit= allWorkunits[index].map((workunit)=>{
        
        const newStatus=getStatus(workunit.sitcolor);

        
        container.innerHTML+=`
        <div class="machine-card">
            <h2>${workunit.wkuname}</h2>

            <div class="card-flex-border-bot">
                <span id="badge-status" class="${newStatus}">${workunit.sitname}</span>
                <span class="badge"><b>Speed:</b> ${workunit.speed} </span>
            </div>

            <div class="machine-card-flex-row">
                <div class="card-col-container">
                    <span>Active work order:</span>
                    <span class="badge"><b>${workunit.wohnumber}</b></span>
                </div>
                
                <div class="card-col-container">
                    <span>Product:</span>
                    <span class="badge"><b>${workunit.matcode}</b></span>
                </div>  
            </div>

            <div class="card-col-container">
                <span>Product name:</span>
                <span class="badge"><b>${workunit.matname}</b></span>
            </div>

            <div class="card-flex-border-bot">
                <div class="card-col-container">
                    <span>Quantity required:</span>
                    <span class="badge"><b>${workunit.quantityrequired}</b></span>
                </div>
                <div class="card-col-container">
                    <span>Quantity produced:</span>
                    <span class="badge"><b>${workunit.quantityproduced}</b></span>
                </div>
            </div>
                <div width id="chart_div${counter}">
            </div>
            
        </div>
        `  
        counter++;
    })

    
   
})

const getStatus=(color)=>{
    
    const PRODUCTION_STATUS={
        'Green':'badge-status-perfect',
        'Red':'badge-status-alert', 
        'Orange': 'badge-status-warning',
        'YellowGreen': 'badge-status-good'
    };

    const PRODUCTION_STATUS_DEFAULT = 'badge-status';

    return PRODUCTION_STATUS[color] || PRODUCTION_STATUS_DEFAULT;
}



export const refreshPage=()=>{
    const refreshButton = document.getElementById('refresh-button');

    const handleRefresh = () => {
        location.reload();
    }
    
    if(refreshButton) {
        refreshButton.addEventListener('click', handleRefresh)
    }  

}

export default getMachines;

