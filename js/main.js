const pokemonButton = document.getElementById("js--pokémon-button");
const BASE_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

pokemonButton.onclick = (event) => {
    let randomNumber = Math.floor(Math.random() * 151);
    fetch(BASE_URL_POKEMON + randomNumber)
        .then( response => response.json() )
        .then(data => document.getElementById("js--pokemon-image").setAttribute("src",data.sprites.front_default));
} 

const nameField = document.getElementById("js--age-field");
const BASE_URL_AGE = "https://api.agify.io/?name=";

nameField.onkeyup = (event) => {
    if(event.keyCode === 13){
        console.log(event);
        let name = nameField.value;
        fetch(BASE_URL_AGE + name)
        .then( response => response.json() )
        .then(data => {
            document.getElementById("js--age").innerHTML = data.age;
            document.getElementById("js--name").innerHTML = data.name;
        });
    }
}

const newActivityButton = document.getElementById("js--activity-button");
const BASE_URL_ACTIVITY = "https://www.boredapi.com/api/activity";

newActivityButton.onclick = (event) =>{
    fetch(BASE_URL_ACTIVITY)
        .then(response => response.json())
        .then(data => document.getElementById("js--activity").innerHTML = data.activity);
}

const dogImage = document.getElementById("js--dog");
const BASE_URL_DOG = "https://dog.ceo/api/breeds/image/random";
dogImage.onclick = (event) => {
    fetch(BASE_URL_DOG)
        .then(response => response.json())
        .then(data => document.getElementById("js--dog").setAttribute("src", data.message));
}

pokemonButton.dispatchEvent(new Event('click'));
newActivityButton.dispatchEvent(new Event('click'));
dogImage.dispatchEvent(new Event('click'));
