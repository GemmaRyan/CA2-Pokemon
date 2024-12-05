const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
try {
    fetch(baseUrl)
    .then(response => {
        const responseJson = response.json()
        return responseJson
    })
    .then(data => {
        const pokemons = data.results
        pokemons.forEach(pokemon => {
        document.getElementById('pokemons')
            .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`)     //this Lets the url insde the json to open and become accessible 
        }) 
    })
    .catch(error => {
        console.error(error)
    })
} catch (error) {
    console.error(error)
}

const detail = (url) => {
    try {
    fetch(url)
    
        .then(response => response.json())
        .then(pokemon => {
        document.getElementById('detail').innerHTML = ''
        document.getElementById('detail')
            .insertAdjacentHTML('beforeend', 
            `
                <h1>${pokemon.name}</h1>
                <img src="${pokemon.sprites.front_default}" />
                <p>Type : ${pokemon.types[0].type.name}</p>

                <img id = shiny src="${pokemon.sprites.front_shiny}" />

            `
            )
            console.log(pokemon.types)
        })
        .catch(error => {
        console.error(error)
        })
    } catch (error) {
    console.error(error)
    }
}