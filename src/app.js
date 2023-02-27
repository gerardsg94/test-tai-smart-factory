const body = {
    "FuncName": "Tai.Backend.Qplant",
    "ActiveActor": "WKU11",
    "FuncParam01": "OEEMONITOR2",
    "FuncParam02": "SPAIN",
    "FuncParam03": "",
    "FuncParam04": "",
    "FuncParam05": "",
    "TraceLog": "Y"
};

//POST API

const postData = async(url = '', data = {}) => {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });

    return response.json(); 
}
  
const data = postData('http://intranet.taionline.net:14036/api/loadtfunction', body)
.then(response => response);

const workunitContainer = document.getElementById('workunits-cont');
const machinesContainer = document.getElementById('container-machines');

data.then(response => {
    console.log(response.Payload.length)
    console.log(response.Payload)
    const result = response.Payload;
    
    result.map(({sbacode, sbaname})=>
    {
       /* workunitContainer.innerHTML+=` 
        <a href="/monitor-production.html">
        <div class="workunit">
            <h2>${sbacode}</h2>
            <p>${sbaname}</p>
        </div>
        </a>`*/
    })

    const allWorkunits = result.map(({workunits}) => workunits)
    console.log(allWorkunits)

    const getWorkunit = allWorkunits[3].map((workunit)=>{
        
        const PRODUCTION_STATUS={
            'Green':'badge-status-perfect',
            'Red':'badge-status-alert', 
            'Orange': 'badge-status-warning'
        };

        const PRODUCTION_STATUS_DEFAULT = 'badge-status';

        const newStatus = PRODUCTION_STATUS[workunit.sitcolor] || PRODUCTION_STATUS_DEFAULT;

        machinesContainer.innerHTML+=`
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
            <div class="machine-chart">
                <div id="chart_div">
                </div>
            </div>
            
        </div>
        `
        document.getElementById("badge-status").style.backgroundColor="workunit.sitcolor"
    })
   

})


const refreshButton = document.getElementById('refresh-button');

const refreshPage = () => {
    location.reload();
  }
  
refreshButton.addEventListener('click', refreshPage)



