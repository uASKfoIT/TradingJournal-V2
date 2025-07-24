//-Import API fetch() functions
import { fetchJournals, updateJournal, deleteJournal } from './journalCRUD.js';

//--Passed UserID
const passed_userID = new URLSearchParams(window.location.search).get('value');
console.log("Passed UserID: ", passed_userID);

//--Form Variables
const journalName =  document.querySelector(".form__journal-name");
const journalColor = document.querySelector(".form__journal-color");

//--Journal List
const journal_dashboard = document.querySelector(".journalDashboard");

//--Form Buttons
const save_button = document.getElementById("save-button");
const delete_button = document.getElementById("delete-button");

//--rgb to hex conversion 
function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g); // extract numbers
  if (!result || result.length < 3) return "#000000";

  return "#" + result.slice(0, 3).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
}

//--Editable Form Operations
let lastClickedJournal = null;

const form = document.querySelector(".form");
const show_form = "journalForm";
const hide_form = "off";

const checked = "checked";
const uncheck = "unchecked"

const journalList = "journalList";
const journalSingle = "journalSingle";

function toggleCheckState(element) {
    if (element.classList.contains(uncheck)) {
        element.classList.replace(uncheck, checked);
    } else {
        element.classList.replace(checked, uncheck);
    }
}

function showhideform(element){
    if(element.classList.contains(hide_form)){
        element.classList.replace(hide_form, show_form);
    }else{
        element.classList.replace(show_form, hide_form)
    }
}

function changeFormSize(element){
    if(element.classList.contains(journalList)){
        element.classList.replace(journalList, journalSingle);
    }else{
        element.classList.replace(journalSingle, journalList);
    }

}

function showAllJournals(){
    document.querySelectorAll(".off").forEach(journal => {
        journal.className = "journal";
    });
}

function showSingleJournal(clickedJournal){
    document.querySelectorAll(".journal").forEach(journal => {
        journal.className = (journal === clickedJournal) ? "journal" : "off";
    });  
}


//--function: loadJournals
async function loadJournals(passed_userID){
    if (passed_userID) {
        const result = await fetchJournals(passed_userID);

        if (result && result.success && result.journals.length > 0) {
            journal_dashboard.innerHTML = "";

            result.journals.forEach(journal => {
                //Create Elements
                const tempJournal = document.createElement("div");
                const tempCheckbox = document.createElement("div");
                const titleContainer = document.createElement("div");
                const tempColor = document.createElement("div");
                const tempTitle = document.createElement("p");

                //Define Journal(parent)
                tempJournal.className = "journal";
                tempJournal.id = journal.journalID;

                //Check Box
                tempCheckbox.classList.add("unchecked", "checkbox");

                //Journal Title
                titleContainer.className = "journal-title";
                tempTitle.className = "TNR-small__black";
                tempTitle.textContent = journal.journal_name;
                titleContainer.appendChild(tempTitle);

                //Journal Color
                tempColor.className = "journal-color";
                tempColor.style.backgroundColor = journal.journal_color;
            
                //Append info to Journal
                tempJournal.appendChild(tempCheckbox);
                tempJournal.appendChild(titleContainer);
                tempJournal.appendChild(tempColor);
                
                //Add journal to journal list
                journal_dashboard.appendChild(tempJournal);
            });
        } else {
            console.log("User contains no journals");
        }
    }else{console.log("No userID was passed from login/userID lost");}
}


//--Selected Journal
journal_dashboard.addEventListener("click", (event) => {
    const clickedJournal = event.target.closest(".journal");
    console.log("HI");

    if (clickedJournal) {
         console.log("HI HI");
        const tempCheckbox = clickedJournal.querySelector(".checkbox");

        if (clickedJournal === lastClickedJournal) {
            showAllJournals();
            toggleCheckState(tempCheckbox);
            changeFormSize(journal_dashboard);
            showhideform(form);
            lastClickedJournal = null;
        } else {
            changeFormSize(journal_dashboard);
            showSingleJournal(clickedJournal);
            toggleCheckState(tempCheckbox);
            showhideform(form);
            lastClickedJournal = clickedJournal;

            //retreive values
            const tempJournalName = clickedJournal.querySelector(".TNR-small__black").textContent.trim();
            const tempJournalColor = clickedJournal.querySelector(".journal-color");
            const rgbValue = getComputedStyle(tempJournalColor).backgroundColor; 
            const hexValue = rgbToHex(rgbValue);

            journalName.value = tempJournalName;
            journalColor.value = hexValue;
        }
    }
});

//--Save Updates
save_button.addEventListener("click" ,  async() => {
    const journalID = document.querySelector(".journal").id;
    const journal_name = document.querySelector(".form__journal-name").value.trim();
    const journal_color = document.querySelector(".form__journal-color").value.trim();

    if(journalID !== "" && journal_name !== "" && journal_color !== ""){
        const success = await updateJournal(journalID, journal_name, journal_color);
        if (success) {
            console.log("Successful Push");
            window.opener.postMessage("success", "*");
            window.close();
        } else {
            alert("Unexpected error occurred");
        }
    }
})


//--Delete Journal  
delete_button.addEventListener("click", async() => {
    const journalID = document.querySelector(".journal").id;

    if(journalID !== ""){
        const success = await deleteJournal(journalID);
        if (success) {
            console.log("Successful Push");
            window.opener.postMessage("success", "*");
            window.close();
        } else {
            alert("Unexpected error occurred");
        }
    }
})


//--Load User Journals
loadJournals(passed_userID);