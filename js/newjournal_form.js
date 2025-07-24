//--Import fetch() functions
import { storeJournals } from './journalCRUD.js';

//--Passed userID
const passed_userID = new URLSearchParams(window.location.search).get('value');

//--Form Buttons
const create_button = document.getElementById("create-button");
const cancel_button = document.getElementById("cancel-button");

//--Event Listeners: create journal
create_button.addEventListener("click", async ()=> { 
    const journal_name = document.getElementById("journal-name").value.trim();
    const journal_color = document.getElementById("journal-color").value;

    if( journal_name !== "" && journal_color !== ""){
        const success = await storeJournals(passed_userID, journal_name, journal_color);//push journal
        if (success) {
            //pass message
            window.opener.postMessage("success", "*");
            window.close();
        } else {
            alert("Unexpected error occurred");
        }
    }
})

//-close window
cancel_button.addEventListener("click", () => {
    window.close();
})