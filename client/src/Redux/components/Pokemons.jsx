import React from "react";
import {Link} from 'react-router-dom'

function Pokemons({Nombre,Imagen,Tipo,ID}) {
    return (
        <div>
            <Link to={`/Pokemons/${ID}`}>

            <img src={Imagen} alt={Nombre} />

            </Link>
            <h2>{Nombre}</h2>
            <h3>Tipos</h3>
      
        {Tipo &&Tipo.map(elemento=>{
            return <li key={ID+elemento}>{elemento}</li> 
        }    )}
        
    
        </div>
    )
}

export default Pokemons
