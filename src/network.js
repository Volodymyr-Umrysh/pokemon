import axios from 'axios'

export function getPokemonList(nextUrl){
    return axios.get(nextUrl? nextUrl:'http://pokeapi.co/api/v2/pokemon/?limit=12')
}

export function getSpecificPokemonById(id){
    return axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
}
