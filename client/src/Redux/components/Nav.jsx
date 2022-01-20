import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from'react-redux';
import { getallpokemons,filter,gettypes,filtercreate,SortBy,sortbyname} from "../actions/actions";
import styles from './Nav.module.css'
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
            
        <h2 className={styles.h2}>TIPOS</h2>
        <div className={styles.tipos}>

        {
            Tipos?.map(el=><button className={styles.boton1} onClick={handleclick} value={el} key={el}>{el[0].toUpperCase()+el.slice(1)}</button>)
        }
        </div>
        <div>
        <h2 className={styles.h2} >FILTRAR </h2>
        <div className={styles.filtro} >
        <button  className={styles.boton} value='DB' onClick={handleClick}>DB</button>
        <button className={styles.boton} value='API' onClick={handleClick}>API</button>
        </div>
        </div>
        <div>
            <h2 className={styles.h2}>FILTRAR POR FUERZA</h2>
            <div className={styles.filtro}>

        <button className={styles.boton} value='ASC' onClick={handleSort}>ASCENDENTE</button>
        <button className={styles.boton} value='DSC' onClick={handleSort}>DESCENDENTE</button>
            </div>

        </div>
        <div>
            <h2 className={styles.h2}>FILTRAR POR NOMBRE</h2>
            <div className={styles.filtro}>

        <button className={styles.boton}value='ASC' onClick={handleSortByName}>ASCENDENTE</button>
        <button className={styles.boton}  value='DSC' onClick={handleSortByName}>DESCENDENTE</button>
            </div>

        </div>

        </div>
      
    )
}