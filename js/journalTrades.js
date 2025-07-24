//--JournalID
const journalID = localStorage.getItem('journalID');
console.log("Passed journalID: ", journalID);

//--Buttons
const addTrade_button = document.querySelector(".addTrade");

//--Popout Window (x,y)
const popupTop = (screen.height / 2) - (480 / 2);
const popupLeft = (screen.width / 2) - (480 / 2);

//--External Sites
const trade_form = "trade_form.php";

//--Journal Information
const title = document.querySelector(".title");
const titleTxt = "Hello";
title.textContent = titleTxt;


//--Filter Buttons
const all_button = document.querySelector(".all");
const open_button = document.querySelector(".open");
const closed_button = document.querySelector(".closed");


//All Trades
all_button.addEventListener("click", async () => {
  
});


//Open Trades
open_button.addEventListener("click", async () => {
  
});


//Close Trades
closed_button.addEventListener("click", async () => {
  
});

//--Add New Trade
const value = "newtrade";
addTrade_button.addEventListener("click", () => {
    const url = `${trade_form}?value=${encodeURIComponent(value)}&journalID=${encodeURIComponent(journalID)}`;
    window.open(url, "_blank", `width=1000,height=800,left=${popupLeft},top=${popupTop}`);
});