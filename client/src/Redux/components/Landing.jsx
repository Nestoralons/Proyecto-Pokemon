import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getallpokemons, gettypes } from '../actions/actions';
import styles from './Landing.module.css';
export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getallpokemons())
      dispatch(gettypes())
  },[dispatch])
  

    return (
        <div className={styles.portada}>
        <div className={styles.bkg}/>
          <div className={styles.container}>
              




              <div className={styles.spinner}>
                </div>
                <div className={styles.fondo}>
                <h1 className={styles.texto}>Find</h1>
                <h1 className={styles.texto}>Your</h1>
                <h1 className={styles.texto}>Pokemon</h1>
            </div>
            <div className={styles.entrada}>
            
              

          <Link to='/Pokemons'>
            <button className={styles.boton}>
            
              Ingresar</button>
          </Link>



            </div>
          </div>


         
        </div>
    )
}
