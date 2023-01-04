import React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getdetail,borrardetalle } from '../actions/actions';
import styles from './Detail.module.css'
import { Link } from 'react-router-dom';
import Spinner from './Spinner'


export default function Detail() {
const {ID}=useParams();
const dispatch=useDispatch();
useEffect(()=>{
    (async ()=>await dispatch(getdetail(ID)))()
},[ID,dispatch])
const detail=useSelector((state)=>state.Detail)
function handleborrador(){
    dispatch(borrardetalle())
}
const array=detail&&[{
    name:'Height',
    valor:detail.Altura
},{
    name:'Health',
    valor:detail.Vida
},{
    name:'Defense',
    valor:detail.Defensa
},{
    name:'Attack',
    valor:detail.Fuerza
},{
    name:'Speed',
    valor:detail.Velocidad
},{
    name:'Weight',
    valor:detail.Peso
}]
console.log(detail)
const estilos={height: '100%',
    borderRadius: '15px',}
const barStyles = (num,nombre) => {
    let color=''
    if (nombre==='Weight'){
        
        if( num > 499){
             color = "#00ac17"  
            num=Math.round(num/10)
        }else{
             color="#ff3e3e"
             num=Math.round(num/10)
        }
    }else if(nombre==='Height'){
        if( num > 15){
             color = "#00ac17"  
            num=Math.round(num*3.4)
        }else{
            num=Math.round(num*3.4)
             color="#ff3e3e"

        }
    }
    else{
        color = num > 49 ? "#00ac17" : "#ff3e3e";
    }

        console.log(color)
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  }
    return (
        <div className={styles.portada}>
            <div className={styles.margen}>
           <Link to='/Pokemons'>
            <button className={styles.boton} onClick={handleborrador} >Regresar a home</button>
           </Link>
            </div>
        {detail.Altura? (<div className={styles.focus}>
            <h2>Stats</h2>
            <div className={styles.fila}>
            <div className={styles.ancho}>
            {array.map((item,index)=>{return(
                <div key={index} className={styles.block}>
                    <div className={styles.blockTitle} >
                      <h4 className={styles.statName}>{item.name}</h4>  
                    </div>
                    <div className={styles.blockInfo}>
                        <h4 className={styles.statName}>{item.valor}</h4>
                        <div className={styles.bgBar}>
                            <div style={{...estilos,...barStyles(item.valor,item.name)}}/>
                        </div>
                    </div>
                    
                </div>
            )})}
            </div>
            <div className={styles.imagen}>
            <img className={styles.foto} src={detail.Imagen} alt={`${detail.Nombre}`}/>
            </div>
            </div>

        </div>)
    :<div><Spinner/></div>}
</div>
    )
}
