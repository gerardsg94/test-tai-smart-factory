export default getRoute=(container)=> {
    
    if(container) {
   
            container.addEventListener('click', (e)=>{
                const index = e.target.dataset.value;
                localStorage.setItem("index", index);
                window.location.assign('./monitor-production.html');
            })
    
            
    }

}






