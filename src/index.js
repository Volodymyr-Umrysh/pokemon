import {getPokemonList, getSpecificPokemonById, getPokemonType} from './network'
import {generatePokemonList, generateSpecificPokemon} from './generateHtml'

const listContainer = document.querySelector('.pokemon-list-container')
const loadMoreButton = document.getElementById('load-more')
const specificPokemonContainer = document.querySelector('.detail-info')
let nextUrl = null

getPokemonList()
    .then(res => {
        nextUrl = res.data.next
        generatePokemonList(res.data, listContainer)
    })

 listContainer.addEventListener('click', (e) => {
        const pokemonCardBox = e.target.closest('.pokemon')
        if(pokemonCardBox){
            const pokemonId = pokemonCardBox.dataset.id
            getSpecificPokemonById(pokemonId)
                .then(res => {
                    specificPokemonContainer.innerHTML = ''
                const pokemonCard = generateSpecificPokemon({
                        name : res.data.name,
                        typeArray: res.data.types,
                        id: res.data.id,
                        statsArray:res.data.stats
                    })
                    specificPokemonContainer.appendChild(pokemonCard)
                
                })
        }
 })
 


 loadMoreButton.onclick = function(e){
    getPokemonList(nextUrl)
        .then(res => {
            nextUrl = res.data.next
            generatePokemonList(res.data, listContainer)
        })
 }
