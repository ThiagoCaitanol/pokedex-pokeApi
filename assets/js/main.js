const maxRecords = 151;
let offset = 0;
const limit= 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


function convertPokemonToLi(pokemon) {
    return `
    <li>
        <div class="info">
            <h6>#${pokemon.number}</h6>
            <h3>${pokemon.name}</h3>
            <figure>             
                ${pokemon.types.map((type) => `<img src="assets/images/cards/${type}.png" alt="${type}">`).join('')}
            </figure>
            
                    
            
        </div>
        <figure><img src="${pokemon.photo}" alt="${pokemon.name}" class="${pokemon.type}"></figure>
    </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
})