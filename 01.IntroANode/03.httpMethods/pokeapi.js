//VAMOS A TRABAJAR LA POKEAPI : https://pokeapi.co/
//ENDPOINT: https://pokeapi.co/api/v2/pokemon

//*1 VAMOS A TRAER A REQUEST QUE ACABAMOS DE INSTALAR
const request = require('request')

//*2 VAMOS A DECLARAR NUESTRA URI DE MI API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//*3 CREAR UNA FUNCIÓN QUE PIDA UN POKEMON Y ME DEVUELVA SUS TIPOS

function getPokemonByName(name){
    //ES BUENA PRÁCTICA REVISAR SI LA API ES SENSIBLE A MAYÚSCULAS O MINÚSCULAS
    //LA POKEAPI NO LO ES, PODRÍAMOS USAR UN LOWERCASE PARA EL NOMBRE
    request.get(URI + name, function(error, response, body){
        //VALIDAR SI MI PETICIÓN ES EXITOSA, ME VA A DEVOLVER LA DATA
        if(response.statusCode === 200){
            //parse convierte un objeto JSON en un objeto Javascript
            const bodyEnFormatoJs = JSON.parse(body)

            const typePokemon = bodyEnFormatoJs.types.map(
                (objeto) => objeto.type.name)
                console.log(`El tipo de ${name} es ${typePokemon}`)
        }
        else{
            //si el código de estado es cualquier otro muéstrame el mensaje de error
            console.log(`Ocurrió un error ${response.statusCode} ${response.statusMessage}`)
        }
    })
}

getPokemonByName('pikachu')
getPokemonByName('charmander')

