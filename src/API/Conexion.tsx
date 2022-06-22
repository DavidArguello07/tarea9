import axios from 'axios'

export const conexionAPI = axios.create ({
    baseURL : "https://pokeapi.co/api/v2/pokemon"
})

