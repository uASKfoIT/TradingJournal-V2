//Company Logo
var company_logo_url = "https://i.ibb.co/qtPLx3R/company-logo-focused.png";
var icon_url = "https://i.ibb.co/kgXxb2H6/icon-image.png";

var company_logo = document.getElementById("company-logo__image");
var account_icon = document.getElementById("account-icon__image");

company_logo.src = company_logo_url;
account_icon.src = icon_url;

//Account Button 
document.addEventListener("DOMContentLoaded", ()=>{
    const user = localStorage.getItem('username');
    console.log(user);

    //Retreive Buttons
    const account_button = document.querySelector(".account-button");
    const company_logo_button = document.querySelector(".company-logo");

    //Redirected Pages
    const login_page = 'login.php';
    const account_page = 'account.php';
    const index_page = 'index.php';
    const homepage = 'homepage.php';

    if(user && user !== 'null' && user !== 'undefined'){
        account_button.onclick = () => {
            window.location.href = account_page;
        };

        company_logo_button.onclick = () => {
            window.location.href = homepage;
        }
    } else {//User not logged in
        account_button.onclick = () => {
            window.location.href = login_page;
        };

        company_logo_button.onclick = () =>{
            window.location.href = index_page;
        }
    }
});