import axios from 'axios'

export function getPokemonList(nextUrl){
    return axios.get(nextUrl? nextUrl:'http://pokeapi.co/api/v2/pokemon/?limit=12')
}

export function getSpecificPokemonById(id){
    return axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
}

export function getPokemonType(type){
    return axios.get(`http://pokeapi.co/api/v2/type/?limit=999`)
    
    
}


/*const url = 'http://pokeapi.co/api/v2/type/?limit=999'
axios.get(url)
  .then(response => console.log(response));


  const url1 = 'http://pokeapi.co/api/v2/pokemon/?limit=12'
axios.get(url1)
  .then(response => console.log(response));*/