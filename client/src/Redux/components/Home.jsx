import React from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getallpokemons } from "../actions/actions";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styles from './Paginado.module.css'

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallpokemons())
    }, [dispatch])
    const [Valor,setValor]=useState(500)
    const pokemons=useSelector(state=>state.Pokemons)
  
    
    return (
        <div className={styles.portada}>
            <h1>
              POKEMONS
          </h1>
        <SearchBar/>
        
          <Paginado pokemons={pokemons} setValor={setValor}/>
          

        </div>
    )
}

export default Home

