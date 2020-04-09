export function getPokemonIdFromUrl(url){
    const startIndex = url.lastIndexOf('pokemon/')
   return url.slice(startIndex + 'pokemon/'.length).slice(0,-1)
}