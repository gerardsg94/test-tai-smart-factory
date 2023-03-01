import { MachineMonitor } from './monitorWorkunit';
import { MonitorProduction } from './monitorMachines';
import getRoute from './router';
import chart, { chartMachines } from './chartMachines';



const workunitContainer = document.getElementById('workunits-cont');

const machinesContainer = document.getElementById('container-machines');

//getMachines(machinesContainer, data);

getRoute(workunitContainer);


chartMachines();





