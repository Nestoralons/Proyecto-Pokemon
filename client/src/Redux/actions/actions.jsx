import axios from 'axios'
export const GET_ALL_POKEMONS='GET_ALL_POKEMONS';
export const GET_DETAIL='GET_DETAIL';
export const GET_TYPES='GET_TYPES';
export const FILTER='FILTER';
export const FILTER_CREATED='FILTER_CREATED';
export const SORT_BY='SORT_BY';
export const SORT_BY_NAME='SORT_BY_NAME';
export const GET_POKEMON_NAME='GET_POKEMON_NAME'
export const POST='POST';
export const DELETE='DELETE'


export function getallpokemons() {
    return async function(dispatch){
        let info=await axios.get('http://localhost:3001/pokemons');
        return dispatch({
        type:GET_ALL_POKEMONS,payload:info.data
        })
    }
}
export  function getdetail(ID) {
    return async function(dispatch){
        let info=await axios.get(`http://localhost:3001/pokemons/${ID}`);
        return dispatch({
        type:GET_DETAIL,payload:info.data
        })
    }
}
export function gettypes() {
    return async function(dispatch){
let tipos=await axios.get(`http://localhost:3001/types`)
        return dispatch({
            type:GET_TYPES,
            payload:tipos.data
        })
    }
}
export function getpokemonname(name){
    return async function(dispatch){
        let info=await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
        type:GET_POKEMON_NAME,payload:info.data
        })
    }
}
export function filter(payload){
    return{
type:FILTER,
payload:payload        
    }
}
export function filtercreate(payload){
    return{
type:FILTER_CREATED,
payload:payload        
    }
}
export function SortBy(payload){
    return{
type:SORT_BY,
payload:payload        
    }
}
export function sortbyname(payload){
    return{
type:SORT_BY_NAME,
payload:payload        
    }
}
export function Post(payload){
    return async function(dispatch){
        let info=await axios.post('http://localhost:3001/pokemons',payload);
        console.log(info)
        return info
    }
}
export function borrardetalle(payload){
    return {
        type:DELETE,
    payload:payload
    }
}

