const edit_trade_button = document.querySelector(".editTrade");
const value = "editrade";

edit_trade_button.addEventListener("click", () => {
    window.open(`trade_form.php?value=${encodeURIComponent(value)}`, '_blank', "width=1000,height=800");
})