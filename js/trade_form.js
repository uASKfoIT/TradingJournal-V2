//--Call Source
const params = new URLSearchParams(window.location.search);

const source = params.get('value');
let journalID = null;

if (params.get('journalID')) {
    journalID = params.get('journalID');
}

//--Search Stock Elements
const stock_search = document.querySelector(".stock-search");
const stockDisplay = document.getElementById("stock-ticker");

//--Form Elements & Paramenets
const formContainer = document.querySelector(".form-container");

const optionFields = document.querySelector(".option");
const shareFields = document.querySelector(".share");
const advanceFields = document.querySelector(".advance");

const tradeFields = "trade-fields";
const contractFields = "contract-fields";


const displayOff = "off";
const optionShow = "option-fields";
const shareShow = "share-fields";
const advanceShow = "advance-fields";

const simpleForm = "simpleform";
const advanceForm = "advanceform";

const unselectButton = "button";
const selectButton = "button-selected";


//--Form Menu Interaction
const menu_buttons = document.querySelectorAll(".menu-button");

menu_buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const clickedButton = event.target.closest(".menu-button");
        const selectedForm = clickedButton.id;

        //Change Forms
        if(selectedForm == advanceForm){
            if (advanceFields.classList.contains(displayOff)) {
                advanceFields.classList.replace(displayOff, advanceShow);
            } 
            validateFormSize();
        }
        if(selectedForm == simpleForm){
            if (advanceFields.classList.contains(advanceShow)) {
                advanceFields.classList.replace(advanceShow, displayOff);
            }
            validateFormSize(); 
        }

        //Toggle Buttons
        menu_buttons.forEach(button => {
            if (button === clickedButton) {
                // If it's the clicked one and not already selected
                if (!button.classList.contains(selectButton)) {
                    button.classList.remove(unselectButton);
                    button.classList.add(selectButton);
                }
            } else {
                // Reset all other buttons to unselected
                button.classList.remove(selectButton);
                button.classList.add(unselectButton);
            }
        });
    })
})


//--Drop Down Menus
const dropdown_menus = document.querySelectorAll(".dropdown-menu");

dropdown_menus.forEach(menu => {
    const menuID = menu.id;
    
    //Add a blank/default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select an option";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true; 
    menu.appendChild(defaultOption);

    //Populate Dropdown
    if (menuID === tradeFields) {
        const options = ["option", "share"];
        options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase().replace(/\s+/g, '-');
            option.textContent = optionText;
            menu.appendChild(option);
        });

        //Show-hide fields
        menu.addEventListener("change", (event) => {
            const selectedValue = event.target.value;

            if(selectedValue == "option"){
                if (optionFields.classList.contains(displayOff)) {
                    optionFields.classList.replace(displayOff, optionShow);
                } 
                if (shareFields.classList.contains(shareShow)) {
                    shareFields.classList.replace(shareShow, displayOff);
                }
                validateFormSize();
            }
            if(selectedValue == "share"){
                if (optionFields.classList.contains(optionShow)) {
                    optionFields.classList.replace(optionShow, displayOff);
                } 
                if (shareFields.classList.contains(displayOff)) {
                    shareFields.classList.replace(displayOff, shareShow);
                }
                validateFormSize();
            }
        })
    }

    //Populate Dropdown
    if (menuID === contractFields) {
        const options = ["put", "call"];
        options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase().replace(/\s+/g, '-');
            option.textContent = optionText;
            menu.appendChild(option);
        });
    }
});


//--Dynamic Change Form Size
function validateFormSize(){
    if (advanceFields.classList.contains(displayOff) && optionFields.classList.contains(optionShow)){
        formContainer.style.height = "34rem";
    } else if (advanceFields.classList.contains(displayOff) && shareFields.classList.contains(shareShow)){
        formContainer.style.height = "28rem";
    } else if (advanceFields.classList.contains(advanceShow) && optionFields.classList.contains(optionShow)){
        formContainer.style.height = "54rem";
    } else if (advanceFields.classList.contains(advanceShow) && shareFields.classList.contains(shareShow)){
        formContainer.style.height = "48rem";
    }else if (advanceFields.classList.contains(advanceShow) && shareFields.classList.contains(displayOff) && optionFields.classList.contains(displayOff)){
        formContainer.style.height = "43rem";
    } else {
        formContainer.style.height = "23em";
    }
}


//--Handle Source 
const newtrade = "newtrade";
const edittrade = "edittrade";

if(source == newtrade){
    stock_search.addEventListener("click", () => {
        window.open("stocksearch.php", "_blank", "width=800,height=600");
    })

    //Push Trade
}

if(source == edittrade){
    //Change Buttons & Functions


    //Update Trade

    //Delete Trade
}


/*
stock_search.addEventListener("click", (event) => {
    window.open("stocksearch.php", "_blank", "width=800,height=600");
})*/