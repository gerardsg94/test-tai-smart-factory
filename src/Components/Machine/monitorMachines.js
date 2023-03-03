import chartMachines from '../../Views/Machine/chartMachines';
import data from '../../Api/data'; 
import getMachines from '../../Views/Machine/getMachines';
import  refreshPage from '../../Services/reloadPage';


export class MonitorMachines extends HTMLElement {
   
    constructor() {
        super();
        this.machinesContainer = document.getElementById('container-machines');
        this.index = decodeURIComponent(new URLSearchParams(window.location.search).get('index'));
        getMachines(this.machinesContainer, data, this.index);
        chartMachines(data, this.index);

    }
 
}

refreshPage();

customElements.define("monitor-machines", MonitorMachines);


