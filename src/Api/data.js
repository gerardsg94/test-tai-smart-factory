import postDataFetch from './postDataFetch';

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
  

export const data = postDataFetch('http://intranet.taionline.net:14036/api/loadtfunction', body)
.then(response => response)
.catch(err => console.log('Se ha encontrado el siguiente error en la respuesta: ', err));

export default data;

