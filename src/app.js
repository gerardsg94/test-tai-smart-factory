import { MachineMonitor } from './monitorWorkunit';
import { MonitorProduction } from './monitorMachines';
import getRoute from './router';



const workunitContainer = document.getElementById('workunits-cont');

const machinesContainer = document.getElementById('container-machines');

//getMachines(machinesContainer, data);

getRoute(workunitContainer);






