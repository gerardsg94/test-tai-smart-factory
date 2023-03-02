import getWorkunit from "./getWorkunits";
import data from './fetch'; 

export class MonitorWorkunit extends HTMLElement {
    constructor() {
        super();
        this.workunitContainer = document.getElementById('workunits-cont');
        getWorkunit(this.workunitContainer, data);
       // localStorage.clear();

    }

}

customElements.define("monitor-workunit", MonitorWorkunit);