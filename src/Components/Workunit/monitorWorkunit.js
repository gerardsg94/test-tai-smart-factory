import getWorkunit from '../../Views/Workunit/getWorkunits';
import data from '../../Api/data'; 

export class MonitorWorkunit extends HTMLElement {
    
    constructor() {
        super();
        this.workunitContainer = document.getElementById('workunits-cont');
        getWorkunit(this.workunitContainer, data);
    }

}

customElements.define("monitor-workunit", MonitorWorkunit);