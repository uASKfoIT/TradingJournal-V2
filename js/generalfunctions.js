
//---Redirect User Based On Page Selection
function setupSelectionRedirects(){
    const selections = document.querySelectorAll(".selection");

    selections.forEach(selection => {
        selection.addEventListener("click", () => {
            //Retreive file name 
            const page = selection.getAttribute('data-url');

            if(page){
                window.location.href = page;
            }else{
                alert("Error: No Page Found");
            }
        });
    });
}

setupSelectionRedirects();