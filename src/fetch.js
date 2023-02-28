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
  
 export const data = postData('http://intranet.taionline.net:14036/api/loadtfunction', body)
.then(response => response);

export default data;