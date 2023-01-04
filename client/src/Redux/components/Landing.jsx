import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getallpokemons, gettypes } from '../actions/actions';
import styles from './Landing.module.css';
import imagen1 from '../imagen/pokeball.png'
export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getallpokemons())
      dispatch(gettypes())
  },[dispatch])
  

    return (
        <div className={styles.portada}>
        


      <div className={styles.position}>
        <Link to='/Pokemons'>
            {/* <button className={styles.boton}>WELCOME</button> */}
            {/* <div className={styles.botonf}> */}
                                
                                 <input className={styles.bola} type='image' src={imagen1} alt='submitButoon' />
                                 {/* </div> */}
          </Link>
        </div>
        </div>
    )
}
