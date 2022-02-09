// const pokemonContainer = document.querySelector('.pokemon-container')

// const pokemon_count = 150
// const colors = {
//     fire: '#FDDFDF',
//     grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#f4e7da',
// 	rock: '#d5d5d4',
// 	fairy: '#fceaff',
// 	poison: '#98d7a5',
// 	bug: '#f8d5a3',
// 	dragon: '#97b3e6',
// 	psychic: '#eaeda1',
// 	flying: '#F5F5F5',
// 	fighting: '#E6E0D4',
// 	normal: '#F5F5F5'
// }

// for(let i = 1; i < pokemon_count; i++) {
//     getPokemons(i)
// }

// function getPokemons(id) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(response => response.json())
//         .then(data => createPokemon(data));
// }

// function createPokemon(pokemon) {
//     const name = pokemon.name
//     const id = pokemon.id
//     let type = pokemon.types.map(type => type.type.name)[0]
//     // type = Object.values(type)[1].name
//     let img = pokemon.sprites.front_default
//     const color = colors[type]

//     const pokemonCard = document.createElement('div')
//     pokemonCard.classList.add('pokemon')
//     pokemonCard.style.backgroundColor = color

//     pokemonCard.innerHTML = `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
//     </div>
//     <div class="info">
//         <span class="number">#${id}</span>
//         <h3 class="name">${name}</h3>
//         <small class="type">Type: <span>${type}</span> </small>
//     </div>
//     `

//     pokemonContainer.appendChild(pokemonCard)
// }




const pokemonContainer = document.querySelector('.pokemon-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    pokemonContainer.appendChild(pokemonEl)
}

fetchPokemons()