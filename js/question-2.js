const containerDiv = document.querySelector(".containerDiv");
const loading = document.querySelector(".loading");

// const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const CORS_URL = "https://noroffcors.herokuapp.com/";
const CORS_API_FIX = CORS_URL + API_URL;

const options = { "headers": {
    "x-rapidapi-key": "67f32ab14cmsh1b70c4982c0f023p1d66cfjsn8cc306174a31", 
}};

async function getTheApi() {
        
    try {
        const response = await fetch(CORS_API_FIX, options);
        const result = await response.json();
        const theResults = result.results;

        console.log(theResults);
        containerDiv.innerHTML = "";

        for(i = 0; i < theResults.length; i++) {
            
            if(i === 8) {
                break;
            }
    
            containerDiv.innerHTML += `<div class="allresults result${i+1}">
                                        <h1>${theResults[i].name}</h1>
                                        <p>${theResults[i].rating}</p>
                                        <p>${theResults[i].tags.length}</p>
                                      </div>`
        }

    }
    catch(error) {
        containerDiv.innerHTML = "We encountered an error with the API"
    }
    finally {
        console.log("I wanted to be in the console!");
    }
    
}

getTheApi();