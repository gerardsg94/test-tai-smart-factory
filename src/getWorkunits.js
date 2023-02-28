export const getWorkunit=(container, data)=>data.then(response => {
   
    //if(!container) return;

    const result = response.Payload;
    
    result.forEach((workunit)=>
    {
        const index = result.indexOf(workunit);

       container.innerHTML+=`
            <div data-value="${index}" class="workunit">
                <h2>${workunit.sbacode}</h2>
                <p>${workunit.sbaname}</p>
            </div>`
           
 
    })

})

export default getWorkunit;


        
