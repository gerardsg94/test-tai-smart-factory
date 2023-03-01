import chartMachines from './chartMachines';
import data from './fetch'; 
import getMachines from "./getMachines";

export class MonitorMachines extends HTMLElement {
    constructor() {
        super();
        this.machinesContainer = document.getElementById('container-machines');
        this.index = localStorage.getItem("index");
    }

    connectedCallback() {

       getMachines(this.machinesContainer, data, this.index);


    }
}

customElements.define("monitor-machines", MonitorMachines);