const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const timeElem = document.getElementById("time");
const usdElem = document.getElementById("usd");
const euroElem = document.getElementById("euro");
const gbpElem = document.getElementById("gbp");

async function getAPI(url){
   
    const response = await fetch(url);

    var data = await response.json();

    timeElem.textContent = data.time.updated;
    usdElem.textContent = data.bpi.USD.rate_float;
    euroElem.textContent = data.bpi.EUR.rate_float;
    gbpElem.textContent = data.bpi.GBP.rate_float;
    
    
    
    setTimeout(getAPI(url),60000);
    
    
}

getAPI(apiURL);