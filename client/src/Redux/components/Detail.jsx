import React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getdetail } from '../actions/actions';

export default function Detail() {
const {ID}=useParams();
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getdetail(ID))
},[ID,dispatch])
const detail=useSelector((state)=>state.Detail)
    return (
        <div>
          

     <h1>{detail.Nombre}</h1>
            <img src={detail.Imagen} alt='Foto'/>
            <div>
            <h4>Tipo</h4>
            <ul>
                {detail.Tipo && detail.Tipo.map(el=><li key={el}>{el}</li>)}
            </ul>
            </div>
            <h4>{`Número ${detail.ID}`}</h4>
            <div>
                <h4>{`Fuerza ${detail.Fuerza}`}</h4>
                <h4>{`Vida ${detail.Vida}`}</h4>
                <h4>{`Defensa ${detail.Defensa}`}</h4>
                <h4>{`Velocidad ${detail.Velocidad}`}</h4>
                
            </div>
            <h4>{`Altura ${detail.Altura}`}</h4>
            <h4>{`Peso ${detail.Peso}`}</h4>
            
        </div>
    )
}
