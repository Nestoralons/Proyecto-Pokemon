import { GET_ALL_POKEMONS,
    GET_DETAIL,
    GET_TYPES,
    FILTER, 
     FILTER_CREATED,
     SORT_BY,
     SORT_BY_NAME,
     GET_POKEMON_NAME,
     POST,
     DELETE
} from "../actions/actions";
const initialState={
    AllPokemons:[],
    Pokemons:[],
    Detail:{},
    Tipos:[]

}
export default function rootReducer(state=initialState,action) {
    switch(action.type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                Pokemons:action.payload,
                AllPokemons:action.payload

        }
        case GET_DETAIL:
            return {
            ...state,
            Detail:action.payload
            }
            case GET_TYPES:
                return {
                    ...state,
                    Tipos:action.payload
                }
            case FILTER:{
                    let filtrado=state.AllPokemons;
                    let filtro
                    if (action.payload==='no-category'){
                          filtro=filtrado}
                         else{
                            filtro=filtrado.filter(el=>el.Tipo.includes(action.payload))
                         }
        
                    return {
                        ...state,
                        Pokemons:filtro
        
                    }
                }
            case  FILTER_CREATED:
                let filtrado=state.AllPokemons;
                let valor=action.payload
                let filtrogenero= valor==='API'? filtrado.filter(el=>typeof(el.ID)==='number'
                ): filtrado.filter(el=>typeof(el.ID)==='string')
                return {
                ...state,
                Pokemons:filtrogenero
                }
        case SORT_BY:{
            let sort=state.AllPokemons;
            let sortby=action.payload==='ASC'? sort.sort((a,b)=>a.Fuerza-b.Fuerza):sort.sort((a,b)=>b.Fuerza-a.Fuerza);
            return {
                ...state,
                Pokemons:sortby
            }
        }case SORT_BY_NAME:{
            let sort=state.AllPokemons;
            let sortbyname=action.payload==='ASC'? sort.sort((a,b)=>{
                if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) {
                      return 1;
                    }
                    if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;}
                  
        
            ):sort.sort((a,b)=>{
                if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) {
                      return -1;
                    }
                    if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;}
                  
        
            );
            return {
                ...state,
                Pokemons:sortbyname
            }
        }
        case GET_POKEMON_NAME:{
            return {
                ...state,
               Pokemons:[action.payload]
            }
        }
        case POST:
        return {
            ...state
        } 
        case DELETE:
            return {
                ...state,
                Detail:{}
                
            }
        default:
            return state
    }
}
