import React from "react";
import {Link} from 'react-router-dom'
import styles from './Pokemons.module.css'

function Pokemons({Nombre,Imagen,Tipo,ID,Effort}) {
    return (
        <div className={styles.div}>
            <div className={styles.imagen}>
            <Link to={`/Pokemons/${ID}`}>

            <img className={styles.foto}src={Imagen} alt={Nombre} />
            </Link>
            </div>
            <h1>{Nombre? Nombre[0].toUpperCase()+Nombre.slice(1):''}</h1>
            
            <div className={styles.cuadro}>

            <h2 className={styles.h}>Tipo</h2>
      <div className={styles.tipos}>

        {Tipo &&Tipo.map(elemento=>{
            return <p className={styles.techo} key={ID+elemento}>{elemento[0].toUpperCase()+elemento.slice(1)}</p> 
        }    )}
      </div>
            </div>

        
    
        </div>
    )
}

export default Pokemons
