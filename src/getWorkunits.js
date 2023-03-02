import getRoute from './router.js'
export const getWorkunit=(container, data)=>data.then(response => {
   
    //if(!container) return;

    const result = response.Payload;

    
        result.forEach((workunit)=>
        {
            const index = result.indexOf(workunit);

            container.innerHTML+=`
                    <div data-value="${index}" id="workunit" class="workunit">
                        <h2>${workunit.sbacode}</h2>
                        <p>${workunit.sbaname}</p>
                    </div>`
            
        
            getRoute();

        });

})
    



export default getWorkunit;


        
