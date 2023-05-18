const offset = 0;
const limit= 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <div class="info">
            <h6>#${pokemon.number}</h6>
            <h3>${pokemon.name}</h3>
            <figure>
                <img src="assets/images/cards/grass.png" alt="elemento grama">
                <img src="assets/images/cards/poison.png" alt="elemento veneno">
            </figure>
        </div>
        <figure><img src="${pokemon.photo}" alt="${pokemon.name}" class="pok"></figure>
    </li>
    
    `
}

fetch(url)
    .then(response => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        console.log(pokemonList)

        document
    })
    .catch((error) => console.log(error));