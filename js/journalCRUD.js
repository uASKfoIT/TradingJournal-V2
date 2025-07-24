//*Fetch Journals
export async function fetchJournals(temp_userID){
    return fetch("db/fetchJournals.php",{
        method: "POST",
        body: JSON.stringify({
            userID: temp_userID
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        //Wait & Handle server response
        if(!response.ok){
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(data => {
        if(!data.success){
            return {success: false, journals: data.journals};
        }

        return {success: true, journals: data.journals};
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected Error");
        return { success: false, journals: [] };
    })
}

//*Store Journals
export async function storeJournals(temp_userID, temp_journalName, temp_journalColor){
    return fetch("db/storeJournals.php", {
        method: "POST",
        body: JSON.stringify({
            userID: temp_userID,
            journalName: temp_journalName,
            journalColor: temp_journalColor
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if (!response.ok){
            throw new Error('Network error');
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        if(data.success === false){
            console.log("Errror storing data");
            return false;
        }
        return true;//Sucessful Insertion
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected error occured");
        return false;
    })
}

//*Update Journal
export async function updateJournal(temp_journalID, temp_journalName, temp_journalColor){
    return fetch("db/updateJournal.php", {
        method: "POST",
        body: JSON.stringify({
            journalID: temp_journalID,
            journalName: temp_journalName,
            journalColor: temp_journalColor
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if (!response.ok){
            throw new Error('Network error');
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        if(data.success === false){
            console.log("Errror: Failed to update jornal");
            return false;
        }
        return true;//Sucessful Update
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected error occured");
        return false;
    })
}

//--Delete Journal
export async function deleteJournal(temp_journalID){
    return fetch("db/deleteJournal.php", {
        method: "POST",
        body: JSON.stringify({
            journalID: temp_journalID,
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if (!response.ok){
            throw new Error('Network error');
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        if(data.success === false){
            console.log("Error: Unable to delete journal");
            return false;
        }
        return true;//Sucessful Deletion
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected error occured");
        return false;
    })
}