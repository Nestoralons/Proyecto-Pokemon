import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from'react-redux';
import { getallpokemons,filter,gettypes,filtercreate,SortBy,sortbyname} from "../actions/actions";

export default function Nav({Pagina,setValor}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(gettypes())
    },[dispatch])
    const Tipos=useSelector((state)=>state.Tipos)
    function handlesubmit(e){
        e.preventDefault();
        dispatch(getallpokemons());
        
    }

function handleclick(e){
e.preventDefault() 
dispatch(filter(e.target.value))
Pagina(1)
setValor(Math.random)
}
function handleClick(e){
    e.preventDefault()
    dispatch(filtercreate(e.target.value))
    Pagina(1)
    setValor(Math.random)
}function handleSort(e){
    e.preventDefault()
    dispatch(SortBy(e.target.value))
    Pagina(1)
    setValor(Math.random)
}
function handleSortByName(e){
    e.preventDefault()
    dispatch(sortbyname(e.target.value))
    Pagina(1)
    setValor(Math.random)
   
}
    return (
        <div>
        <Link to='/Pokemons/create'>
        <h2>Crear Pokemon</h2>
         </Link>
            <button onClick={handlesubmit}>Refrescar la lista de videojuegos </button>
        <h2>Tipos</h2>
        {
            Tipos?.map(el=><button onClick={handleclick} value={el} key={el}>{el}</button>)
        }
        <div>

        <button value='DB' onClick={handleClick}>CREATED POKEMON</button>
        <button value='API' onClick={handleClick}>API POKEMON</button>
        
        </div>
        <div>
            <h2>SORT BY FUERZA</h2>
        <button value='ASC' onClick={handleSort}>ASCENDENTE</button>
        <button value='DSC' onClick={handleSort}>DESCENDENTE</button>

        </div>
        <div>
            <h2>SORT BY NAME</h2>
        <button value='ASC' onClick={handleSortByName}>ASCENDENTE</button>
        <button value='DSC' onClick={handleSortByName}>DESCENDENTE</button>

        </div>

        </div>
      
    )
}