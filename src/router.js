export default getRoute=(container)=> {
    
    if(container) {
   
            container.addEventListener('click', (e)=>{
                const index = e.target.dataset.value;
                localStorage.setItem("index", index);
                console.log('Saliendo')
                window.location.href='monitor-production.html';
            })
    
            
    }

}






