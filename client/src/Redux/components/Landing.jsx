import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getallpokemons } from '../actions/actions';
import styles from './Landing.module.css';
export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getallpokemons())
  },[dispatch])
  

    return (
        <div className={styles.portada}>
          <div >
         
          </div>
            <h2 className={styles.texto}>Bienvenido</h2>
            
          <Link to='/Pokemons'>
            <button>Ingresar</button>
          </Link>
         
        </div>
    )
}