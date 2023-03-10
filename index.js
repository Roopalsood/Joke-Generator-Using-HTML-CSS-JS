const btnEle = document.getElementById("btn");
const jokeEle = document.getElementById("joke"); 

const apiKey = "yi1hhzJ0ZTKm/HmXLqKwMw==49QAgCjApI8vdMTH";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function genJoke(){     // it waits for the api to respond and we add await for that

    // try and catch shows an error in console
    try {
    jokeEle.innerText = "Updating...";
    btnEle.disabled = true;
    btnEle.innerText = "Loading...";

    const response =  await fetch(apiURL, options);
    const data = await response.json(); // to convert it into json

    btnEle.disabled = false;
    btnEle.innerText = "Generate a joke";

    jokeEle.innerText = data[0].joke;
    } catch (error) {
        jokeEle.innerText = "An Error happened, try again later !";
        btnEle.disabled= false;
        btnEle.innerText = "Generate a joke";
        console.log(error);
    }

}

btnEle.addEventListener("click", genJoke);