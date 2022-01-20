import React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getdetail,borrardetalle } from '../actions/actions';
import styles from './Detail.module.css'
import { Link } from 'react-router-dom';

export default function Detail() {
const {ID}=useParams();
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getdetail(ID))
},[ID,dispatch])
const detail=useSelector((state)=>state.Detail)
function handleborrador(){
    dispatch(borrardetalle())
}
    return (
        <div className={styles.portada}>
            <div className={styles.margen}>
           <Link to='/Pokemons'>
            <button className={styles.boton} onClick={handleborrador} >Regresar a home</button>
           </Link>
            </div>
          
                
        <div className={styles.caja}>
          
                    <div className={styles.imagen}>

                    <img className={styles.foto} src={detail.Imagen} alt='Foto'/>
                 
                    </div>
                    <div className={styles.datos}>
                        <h1>{detail.Nombre? detail.Nombre[0].toUpperCase()+detail.Nombre.slice(1): ''}</h1>
            
                         <h3 className={styles.casilla}>{`Número  ${detail.ID}`}</h3>
                        <h3 className={styles.casilla}>{`Altura   ${detail.Altura}`}</h3>
                        <h3 className={styles.casilla}>{`Peso   ${detail.Peso}`}</h3>
                        <div className={styles.cajatipo}>

                        <h3 className={styles.casilla}>Tipo</h3>
                         <div className={styles.tipos}>
                             {detail.Tipo && detail.Tipo.map(el=><p key={el}>{el[0].toUpperCase()+el.slice(1)}</p>)}
                        </div>
                        </div>
                        <div className={styles.cajita}>
                            <h2 className={styles.titulo}>Estadísticas</h2>
                            <div className={styles.fila}>
                            <h3>{`Fuerza: ${detail.Fuerza}`}</h3>
                            <h3>{`Vida: ${detail.Vida}`}</h3>
                             <h3>{`Defensa: ${detail.Defensa}`}</h3>
                            <h3>{`Velocidad: ${detail.Velocidad}`}</h3>
                            </div>
                        </div>
                     </div>
        </div>
</div>
    )
}
