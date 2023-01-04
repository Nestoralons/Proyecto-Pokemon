import React  from "react";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {getpokemonname} from '../actions/actions';
import styles from './SearchBar.module.css';
import { Link } from "react-router-dom";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [nombre,setNombre]=useState('')
    function handleChange(e){
        setNombre(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getpokemonname(nombre))
        setNombre('')
    }
    return (
        <div className={styles.barra}>
            <div className={styles.margen}>
           <Link to='/'>
            <button className={styles.boton}>Go Back</button>
           </Link>
            </div>
          <div className={styles.margen}> 

            <input className={styles.input} type='text' placeholder='Search' onChange={handleChange} value={nombre}/>
            <button className={styles.boton1} type='submit' onClick={handleSubmit}>SEARCH</button>
          </div>
        </div>
    )
}