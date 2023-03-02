export const refreshPage=()=>{
    
    const refreshButton = document.getElementById('refresh-button');

    const handleRefresh = () => {
        location.reload();
    }
    
    if(refreshButton) {
        refreshButton.addEventListener('click', handleRefresh);
    }  

}

export default refreshPage;