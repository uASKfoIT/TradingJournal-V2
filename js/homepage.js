//--Import fetch() functions
import { fetchJournals} from './journalCRUD.js';

//--Journal List
const journal_list = document.querySelector(".journal-list");

//--Forms
const newjournal_form = "newjournal_form.php";
const journalEdit_form = "journalEdit_form.php";

//--External Pages
const journal_page = "journalTrades.php";

//--Popout Window (x,y)
const left = (screen.width / 2) - (480 / 2);
const top = (screen.height / 2) - (480 / 2);

//--Logged User
const passed_username = localStorage.getItem('username');
const passed_userID = localStorage.getItem('userID');

//--Welcome Message
var welcome_user = document.getElementById("welcome-message");
welcome_user.textContent = `Welcome back ${passed_username}`;

//--Journal Title
const journal_title = document.getElementById("journal-title__text");
journal_title.textContent = "My Journals";

//--New Journal Button
const newJournal_button = document.querySelector(".newjournal");

//--Edit Journal Button
const editJournal_button = document.querySelector(".editjournal");

//--User Journals #
let userJournals; 

//--Edit A Journal
editJournal_button.addEventListener("click", () => {
    //Make an edit
  const url = `${journalEdit_form}?value=${encodeURIComponent(passed_userID)}`;
  window.open(url,"_blank",`width=480,height=480,left=${left},top=${top}`);
});

//--Create A Journal
newJournal_button.addEventListener("click", () => {
     //Add a new journal
    if (userJournals >= 4){
        console.log("Max Journals Reached");
        return;
    }

    const url = `${newjournal_form}?value=${encodeURIComponent(passed_userID)}`;
    window.open(url,"_blank",`width=480,height=480,left=${left},top=${top}`);
});


//--Function: Display Journals
async function loadJournals(passed_userID){
    
    if (passed_userID) {
        const results = await fetchJournals(passed_userID);

        if (results && results.success && results.journals.length > 0) {
            journal_list.innerHTML = "";
            userJournals = results.journals.length;
        
            results.journals.forEach(journal => {
                //Create Journal Elements
                const tempJournal = document.createElement("div");
                const tempColor = document.createElement("div");
                const tempTitle = document.createElement("p");
                
                //Define Journal(parent)
                tempJournal.className = "journal";
                tempJournal.id = journal.journalID;

                //Journal Color
                tempColor.className = "journal-image";
                tempColor.style.backgroundColor = journal.journal_color;

                //Journal Title
                tempTitle.className = "TNR-small__black";
                tempTitle.textContent = journal.journal_name;
            
                //Append info to Journal
                tempJournal.appendChild(tempColor);
                tempJournal.appendChild(tempTitle);

                //Add journal to journal list
                journal_list.appendChild(tempJournal);
            });
        } else {
            userJournals = 0;
            console.log("User contains no journals");
        }
    }else{console.log("No userID was passed from login/userID lost");}
}


//--Load selected journal
journal_list.addEventListener("click", (event) => {
    const clickedJournal = event.target.closest(".journal");

    if (clickedJournal) {
        const tempJournal_ID = clickedJournal.id;
        localStorage.setItem('journalID', tempJournal_ID);
        window.location.href = journal_page;
    }
});

//--eventListner: popwindows for edit/new journal
window.addEventListener("message", (event) => {
    if (event.origin !== "http://localhost") return; // only accept from your domain

    if (event.data === "success") {
        console.log("This worked");
        loadJournals(passed_userID);
    }
});

//--Display Journals
loadJournals(passed_userID);
