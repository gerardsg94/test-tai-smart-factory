import getWorkunit from "./getWorkunits";
import data from './fetch'; 

export class MonitorWorkunit extends HTMLElement {
    constructor() {
        super();
        this.workunitContainer = document.getElementById('workunits-cont'); 
       
    }

    connectedCallback() {
        getWorkunit(this.workunitContainer, data);
    }

}

customElements.define("monitor-workunit", MonitorWorkunit);