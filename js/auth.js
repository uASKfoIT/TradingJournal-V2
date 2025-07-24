//__Auth Art
const auth_art_url = "https://i.ibb.co/DnDpQRg/auth-art-1.png";

const auth_image = document.getElementById("auth-art__image");
auth_image.src = auth_art_url;

//__Log In Verification 
function verifyUser(login_username, login_password){
    return fetch("db/retrieve_auth.php", {
        method: "POST",
        body: JSON.stringify({
            username: login_username,
            password: login_password
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
        //Process data fetched from server response
        if(data.success === false){
            return false;//wrong user info
        }
        //return true;
        return {success: true, userID: data.userID};
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected Error");
        return false;
    })
}


async function verifyLoginInput(){
    const login_username = document.getElementById("login-username").value.trim();
    const login_password = document.getElementById("login-password").value.trim();

    if(login_username && login_password){
        const  verificationStatus = await verifyUser(login_username, login_password);//Wait for server response
        return verificationStatus; 
    }else{
        alert("Invalid input: All fields are required.");
        throw new Error("Terminating process: Invalid input: All fields are required");
    }
}

//__Verify Registration 
function storeAuth(register_username, register_password){
    return fetch("db/store_auth.php", {
        method: "POST",
        body: JSON.stringify({
            username: register_username,
            password: register_password
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
            alert("username taken");
            throw new Error("Terminating process: Username Taken");
        }
        return true;//Sucessful Insertion
    })
    .catch(error =>{
        console.error('Error:', error);
        alert("Unexpected error occured");
        return false;
    })

}

async function verifyRegisterInput(){
    const register_username = document.getElementById("register-username").value.trim();
    const register_password = document.getElementById("register-password").value.trim();
    const register_confirm_password = document.getElementById("register-confirm-password").value.trim();

    if(register_username && register_password && register_confirm_password){
        if(register_password === register_confirm_password){
            const registrationStatus = await storeAuth(register_username, register_password);//Wait for server response
            return registrationStatus;
        }else{
            alert("passwords do not match");
            throw new Error("Terminating process: passwords do not match");
        }
    }else{
        alert("Invalid input: All fields are required.");
        throw new Error("Terminating process: Invalid input: All fields are required");
    }
}


//__Form Submission 
const homepage = "homepage.php";
const login_page = "login.php";

document.addEventListener("DOMContentLoaded", function() {
    const submission_buttons = document.querySelectorAll(".hidden-submit");

    submission_buttons.forEach(button => {
        const parent_div = button.closest(".auth-form__button");

        if(parent_div){
            parent_div.addEventListener("click", async function(e) {

                //Find target form
                const form = parent_div.closest("form");
                const form_name = form?.id || "unknown form";
                const login = "login-form";
                const register = "register-form";

                if(form_name === login){
                    let verify = await verifyLoginInput(); 
                    if(verify.success){
                        let username = document.getElementById("login-username").value.trim();
                        localStorage.setItem('username', username);
                        localStorage.setItem('userID', verify.userID);
                        window.location.href = homepage;
                    }else{
                        alert("Incorrect username or password");
                    }
                }else if (form_name === register){
                    let verify = await verifyRegisterInput();
                    if(verify){
                        window.location.href = login_page;
                    }else{
                        alert("Error: Issue when registering");
                    }
                }else{
                    alert("Error: no form found");
                }
            });
        }else{
            alert("Error");
        }
    });
});

