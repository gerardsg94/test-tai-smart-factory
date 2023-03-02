export const getRoute=()=> {   
    
    const containers = document.getElementsByClassName('workunit')
    
    for(var i=0; i<containers.length; i++ ) {
        //console.log(containers[i])
        containers[i].addEventListener('click', function(event){
            console.log(this)
            const valueDiv = event.currentTarget.getAttribute("data-value")
           window.location.href = './monitor-production.html?index=' + encodeURIComponent(valueDiv);
        })
    }
   
}

export default getRoute;






