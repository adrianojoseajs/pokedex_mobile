import axios from "axios";

const bancoDeDadosPokemons = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})



export default bancoDeDadosPokemons;