import {getSpecificPokemonById} from './network'
import {getPokemonIdFromUrl} from './helpers'
//import {getPokemonType} from './network'


function createElement({tag, className}){
    const element = document.createElement(tag)
    if(className){
        element.className = className
    }
    return element
}


export function generateCardOfList({name, typeArray, id}){
    const cardBox = createElement({tag:'div', className:'pokemon'})
    cardBox.setAttribute('data-id', id)
    // Img
    const boxForPhoto = createElement({tag:'div', className:'photo-box'})
    const img = createElement({tag: 'img'})
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
    boxForPhoto.appendChild(img)
    // Name
    const nameBox = createElement({tag: 'h4', className:'pokemon-name'})
    nameBox.textContent = name
    // Types
    const typesBox = createElement({tag:'div', className:'types-box'})
    typeArray.forEach(element => {
        const typeName = element.type.name
        const type = createElement({tag:'div', className:'type ' + typeName})
        type.textContent = typeName
        //console.log(typeName);
        
        typesBox.appendChild(type)
    });
    
    cardBox.appendChild(boxForPhoto)
    cardBox.appendChild(nameBox)
    cardBox.appendChild(typesBox)
    
    return cardBox
}

export function generateSpecificPokemon({id, name, statsArray}){
    const pokemonBox = createElement({tag:'div', className:'info-pokemon'})
    //Image
    const photoPokemonBox = createElement({tag:'div', className:'photo-pokemon'}) 
    const img = createElement({tag:'img'})
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
    photoPokemonBox.appendChild(img)
    pokemonBox.appendChild(photoPokemonBox)
    // Name
    const pokemonName = createElement({tag:'h3', className:'name-pokemon'})
    pokemonName.textContent = name
    pokemonBox.appendChild(pokemonName)
    // Table
    const detailTable = createElement({tag: "table", className: "table-about"})
    const thead = createElement({tag:"thead"})
    const tr = createElement({tag:'tr'})
    const thType = createElement({tag:'th'})
    thType.textContent = 'Type'
    const thFire = createElement({tag:'th'})
    thFire.textContent = 'Fire'
    tr.appendChild(thType)
    tr.appendChild(thFire)
    thead.appendChild(tr)
    detailTable.appendChild(thead)
    pokemonBox.appendChild(detailTable)
    // Tbody
const tbody = createElement({tag:'tbody'})
    statsArray.forEach(stat => {
        const fire = stat.base_stat
        const type = stat.stat.name
        const tr = createElement({tag:'tr'})
        const thType = createElement({tag:'th'})
        thType.textContent = type
        const thFire = createElement({tag:'th'})
        thFire.textContent = fire
        tr.appendChild(thType)
        tr.appendChild(thFire)
        tbody.appendChild(tr)
    })
    detailTable.appendChild(tbody)
    



    return pokemonBox

}

export function generatePokemonList(data, rootElement){
    data.results.forEach(pokemon => {
        const pokemonId = getPokemonIdFromUrl(pokemon.url)
        getSpecificPokemonById(pokemonId)
            .then(res => {
                const pokemonCard = generateCardOfList({
                    name : res.data.name,
                    typeArray: res.data.types,
                    id: res.data.id
                })
                rootElement.appendChild(pokemonCard)
            })
    })
}