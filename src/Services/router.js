export const getRoute=()=> {   
    
    const containers = document.getElementsByClassName('workunit');
    
    if(containers) {
        for(var i=0; i<containers.length; i++ ) {
            containers[i].addEventListener('click', function(event){
                const valueDiv = event.currentTarget.getAttribute("data-value");
                window.location.href = './monitor-production.html?index=' + encodeURIComponent(valueDiv);
            })
        }
    }   
}

export default getRoute;






