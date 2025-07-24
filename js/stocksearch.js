//--Global Varibales
const suggestion_container = document.querySelector(".suggestion-container");
const apiKey = "cuh88mpr01qva71t6ubgcuh88mpr01qva71t6uc0";  

//--Search Box
const search_input = document.querySelector(".search-box__input");
      //const search_input_defaultValue = search_input.value;

search_input.addEventListener("click", () => {
  search_input.value = "";
})

search_input.addEventListener("input", () => {
  fetchStockData(search_input.value);
});

//--Fetch Stock Suggestions
async function fetchStockData(symbol) {
  const url = `https://finnhub.io/api/v1/search?q=${symbol}&token=${apiKey}`;

  //Search Container DNE
  if (!suggestion_container) return;

  //Fetch Stocks
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result.length > 0) {
      //Dislay Results
      displaySuggestions(data.result);
    } else {
      stockElements.suggestion_container.innerHTML = "<h1>No results found</h1>";
    }
  } catch (error) {
    console.error("Error fetching stock symbols:", error);
  }
}

//--Populate Suggestions 
function displaySuggestions(results) {
  
  //Clear Suggestion Box
  suggestion_container.innerHTML = ""; 
  
  //Display top 4 results
  results.slice(0, 4).forEach(stock => { 
    var suggested_stock = `${stock.symbol} - ${stock.description}`;

    const suggestion = document.createElement("div");
    const suggestion_info = document.createElement("p");

    suggestion.className = "suggestion";
    suggestion_info.className = "TNR-small__black";
    suggestion_info.textContent = suggested_stock;

    suggestion.appendChild(suggestion_info);

    suggestion_container.appendChild(suggestion);

    //Suggestion selected
    suggestion.addEventListener("click", () => {
      console.log(`${stock.symbol}`);
    });

  });
}
