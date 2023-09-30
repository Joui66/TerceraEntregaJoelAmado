class Pokemons{
    constructor(id, nombre, tipo, rareza){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.rareza = rareza;
}
infoPokedex(){
console.log(`${this.nombre} es un Pokemon de tipo ${this.tipo} su numero en la Pokedex mundial es el ${this.id} y segun los juegos su rareza es ${this.rareza}`);}
}

const Pokemon1 = new Pokemons(1, "Bulbasaur", "Planta/Veneno", "Inicial")

const Pokemon2 = new Pokemons(4, "Charmander", "Fuego", "Inicial")

const Pokemon7 = new Pokemons(7, "Squirtle", "Agua", "Inicial")

const Pokemon10 = new Pokemons(10, "Caterpie", "Bicho", "Comun")

const Pokemon25 = new Pokemons(25, "Pikachu", "Eléctrico", "Comun/Insignia")

const Pokemon90 = new Pokemons(90, "Shellder", "Agua", "Comun")

const Pokemon94 = new Pokemons(94, "Gengar", "Fantasma/Veneno", "Comun")

const Pokemon113 = new Pokemons(113, "Chansey", "Normal", "Raro")

const Pokemon131 = new Pokemons(131, "Lapras", "Agua/Hielo", "Raro")

const Pokemon143 = new Pokemons(143, "Snorlax", "Normal", "Raro")

const Pokemon144 = new Pokemons(144, "Articuno", "Hielo/Volador", "Legendario")

const Pokemon145 = new Pokemons(145, "Zapdos", "Eléctrico/Volador", "Legendario")

const Pokemon146 = new Pokemons(146, "Moltres", "Fuego/Volador", "Legendario")

const Pokemon149 = new Pokemons(149, "Dragonite", "Dragón/Volador", "PseudoLegendario")

const Pokemon150 = new Pokemons(150, "Mewtwo", "Psíquico", "Legendario")

const Pokemon151 = new Pokemons(151, "Mew", "Psíquico", "Mitico")


const Pokedex = [Pokemon1,Pokemon2,Pokemon7,Pokemon10,Pokemon25,Pokemon90,Pokemon94,Pokemon113,Pokemon131,Pokemon143,Pokemon144,Pokemon145,Pokemon146,Pokemon149,Pokemon150,Pokemon151]


alert(`Bienvenidos a la Pokeden en Js *Version beta*
        Actualmente esta actualizado con los siguientes pokemon:
        1 - Bulbasaur - Planta/Veneno - Inicial
        4 - Charmander - Fuego - Inicial
        7 - Squirtle - Agua - Inicial
        10 - Caterpie - Bicho - Normal
        25 - Pikachu - Eléctrico - Normal/Insignia
        90 - Shellder - Agua - Normal
        94 - Gengar - Fantasma/Veneno - Normal
        113 - Chansey - Normal - Raro
        131 - Lapras - Agua/Hielo - Raro
        143 - Snorlax - Normal - Raro
        144 - Articuno - Hielo/Volador - Legendario
        145 - Zapdos - Eléctrico/Volador - Legendario
        146 - Moltres - Fuego/Volador - Legendario
        149 - Dragonite - Dragón/Volador - Pseudo Legendario
        150 - Mewtwo - Psíquico - Legendario
        151 - Mew - Psíquico - Mitico`)

function menu (){
    let salirmenu = false
    do{
        let opcionIngresada = parseInt(prompt(`Ingrese la opcion a elegir
        1 - Caracteristicas del Pokemon
        2 - Tipo de Pokemon buscado
        3 - Rareza del pokemon
        4 - Ver Pokedex completa
        0 - Cerrar Pokedex`))
        switch(opcionIngresada){
            case 1: 
                const nombrepokemon = prompt(`Ingrese el nombre del Pokemon`)
                const buscarpokemon = Pokedex.find(pokemon => pokemon.nombre.toLowerCase() === nombrepokemon.toLowerCase());
                if(buscarpokemon){
                    buscarpokemon.infoPokedex();
                } else{
                    console.log(`No se a encontrado en la pokedex, el pokemon no existe o falta por registrar`)
                }
                break;

            case 2:
                const tipopokemon = prompt(`Ingrese el Pokemon para saber su tipo`)
                const tipodepokemon = Pokedex.filter(pokemon => pokemon.tipo.toLowerCase().includes(tipopokemon.toLocaleLowerCase())/*  === tipopokemon.toLowerCase() */);
                if(tipodepokemon.length > 0){
                    console.log(`Pokemon de tipo ${tipopokemon}:`)
                    tipodepokemon.forEach(pokemon => pokemon.infoPokedex())
                } else{
                    console.log(`No se a encontrado en la pokedex el tipo ${tipopokemon}`)
                }
                break;

            case 3:
                const rarezapokemon = prompt(`Indique el tipo de rareza que desea saber:        Inicial/Comun/PseudoLegendario/Legendario/Mitico`)
                const rarezadepokemon = Pokedex.filter(pokemon => pokemon.rareza.toLowerCase() === rarezapokemon.toLowerCase());
                if(rarezapokemon.length > 0){
                    console.log(`Pokemon con rareza ${rarezapokemon}:`)
                    rarezadepokemon.forEach(pokemon => pokemon.infoPokedex())
                } else{
                    console.log(`No se a Pokemon con rareza ${rarezapokemon}`)
                break;
                }
            break

            case 4:
                console.log(`Pokedex Completa:`)
                Pokedex.forEach(pokemon => console.log(`${pokemon.id} - ${pokemon.nombre}`))
            break;

            case 0:
                console.log(`Gracias por utulizar la Pokedex!`)
                salirmenu = true
            break
            default:
                console.log(`Dato incorrecto`)
            break
        }
    }while(!salirmenu)
}
menu()