import chartMachines from './chartMachines';
import data from './fetch'; 
import getMachines from "./getMachines";

export class MonitorMachines extends HTMLElement {
   
    constructor() {
        super();
        this.machinesContainer = document.getElementById('container-machines');
        this.index = decodeURIComponent(new URLSearchParams(window.location.search).get('index'));
        getMachines(this.machinesContainer, data, this.index);
        chartMachines(data, this.index);
    }

}

customElements.define("monitor-machines", MonitorMachines);