import React from "react";
import {Link} from 'react-router-dom'
import styles from './Pokemons.module.css'
import getColorByPokemonType from '../../utils/getColorByPokemonType.js'
const estilo={
    display:'flex',
    flexDirection:'column',
    width: '27%',
    height: '60%',
    padding: '5px 5px',
    borderRadius: '12px',

}
function Pokemons({Nombre,Imagen,Tipo,ID,Effort}) {
    const stylecolor=getColorByPokemonType(Tipo[0])
     const bgStyles = { backgroundColor: stylecolor,...estilo};
    
    return (
        <div style={bgStyles}>
            <h1   className={styles.h1}>{Nombre? Nombre[0].toUpperCase()+Nombre.slice(1):''}</h1>
            
            <div className={styles.imagen}>
            <Link to={`/Pokemons/${ID}`}>

            <img className={styles.foto}src={Imagen} alt={Nombre} />
            </Link>
            </div>
          

            
            
            <div className={styles.cuadro}>


            <h2 className={styles.h}>Type</h2>
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
