import React  from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { gettypes } from "../actions/actions";
import { Post ,getallpokemons } from "../actions/actions";
import imagen from '../imagen/pokemondefault.jpg'
import {Link} from 'react-router-dom';
import styles from './Create.module.css'
export default function Create() {
    const [Data,setData]=useState({
                Nombre:'',
                Altura:0,
                Peso:0,
                Vida:0,
                Fuerza:0,
                Defensa:0,
                Ataque:0,
                Imagen:'',
                Velocidad:0,
                Tipo:[]
    })
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( gettypes()) 
    },[dispatch])
    const Tipos=useSelector(state=>state.Tipos)
    function handlechange(e){
setData({

    ...Data,
    [e.target.name]:e.target.value,


    
}
)


    }
    function handletipos(e){
      
        if(!e.target.checked && Data.Tipo.includes(e.target.value)){
            let indice=Data.Tipo.indexOf(e.target.value)
            if(indice===0){
           setData({
               ...Data,
               Tipo:Data.Tipo.slice(1)
           })}else if(indice+1===Data.Tipo.length){
               setData({
                   ...Data,
                   Tipo:Data.Tipo.slice(0,indice)
               })
           }else{
            setData({
                ...Data,
                Tipo:[...Data.Tipo.slice(0,indice),...Data.Tipo.slice(indice+1)]
            })
           }

        }else{

            setData({
                ...Data,
                Tipo:[...Data.Tipo,e.target.value]
            })
        }
        
        }
        
        function handlesubmit(e){
            e.preventDefault()
            if (Data.Tipo.length>0){
                if(Data.Imagen===''){
                    
                    dispatch(Post({
                      ...Data,
                      Imagen:imagen
                  }))
                   dispatch(getallpokemons())
                    setData({
                         Nombre:'',
                    Altura:0,
                    Peso:0,
                    Vida:0,
                    Fuerza:0,
                    Defensa:0,
                    Ataque:0,
                    Imagen:'',
                    Velocidad:0,
                    Tipo:[]
                        
                    })
                    
                    alert('¡POKEMON CREADO EXITOSAMENTE!')
                }else{
                  dispatch(Post(Data))
                  dispatch(getallpokemons())
                  setData({
                    Nombre:'',
               Altura:0,
               Peso:0,
               Vida:0,
               Fuerza:0,
               Defensa:0,
               Ataque:0,
               Imagen:'',
               Velocidad:0,
               Tipo:[]
                   
               })
               alert('¡POKEMON CREADO EXITOSAMENTE!')
                }
                
            
            }else{
                alert('Seleccione al menos un Tipo')
            }
        }
        
    return (
        <div className={styles.portada}>
          <div className={styles.margen
          }>
           <Link to='/Pokemons'>
            <button className={styles.boton}>Regresar a home</button>
           </Link>
            </div>
           
       <form onSubmit={handlesubmit}>
<fieldset className={styles.texto}>
<legend className={styles.label}>Creación de Pokemon</legend>
<br/>
          <div className={styles.datos}>

        
    <div className={styles.separacion}>
      <label htmlFor="Nombre">Nombre</label>
      <input className={styles.input} type="text" name="Nombre" id="Nombre"  required  value={Data.Nombre} onChange={handlechange}/>
      
    </div >

    <div className={styles.separacion}>
      <label htmlFor="Imagen">Imagen</label>
      <input className={styles.input}  type='url' name="Imagen" id="Imagen"  value={Data.Imagen} onChange={handlechange}/>
      
    </div>

    <div className={styles.separacionn1}>
      <label htmlFor="Altura">Altura</label>
      <input className={styles.input1}  type="number" name="Altura" id="Altura" min='0' max='200' required value={Data.Altura} onChange={handlechange}/>
    </div>
  
    <div className={styles.separacionn2}>
      <label htmlFor="Peso">Defensa</label>
      <input  className={styles.input1}  type="number" name="Peso" id="Peso" min='0' max='200' required value={Data.Peso} onChange={handlechange}/>
    </div>
    <br/>
    </div>
    <fieldset className={styles.estadisticas}>
        <legend className={styles.label}>Estadisticas</legend>
        <div className={styles.s}>
        <div className={styles.sep} >
      <label htmlFor="Fuerza">Fuerza</label>
      <input className={styles.input1}   type="number" name="Fuerza" id="Fuerza" min='0' max='200' required value={Data.Fuerza} onChange={handlechange}/>
    
    </div>
    <div className={styles.sep}>
      <label htmlFor="Vida">Vida</label>
      <input className={styles.input1}  type="number" name="Vida" id="Vida" min='0' max='200' required value={Data.Vida} onChange={handlechange}/>
    </div>
    <div className={styles.sep}>
      <label htmlFor="Velocidad">Velocidad</label>
      <input className={styles.input1}  type="number" name="Velocidad" id="Velocidad" min='0' max='200' required value={Data.Velocidad} onChange={handlechange}/>
    </div>
    <div className={styles.sep}>
      <label htmlFor="Defensa">Defensa</label>
      <input className={styles.input1}  type="number" name="Defensa" id="Defensa" min='0' max='200' required value={Data.Defensa} onChange={handlechange}/>
    </div>
    </div>
        </fieldset>

    <fieldset className={styles.tipos}>
    <legend>Tipos</legend>
    {Tipos?.map((elemento)=>(<label key={elemento}><input className={styles.circulo} type='checkbox' name="Tipo" id="Tipo" key={elemento}  value={elemento}  onChange={handletipos}  />{elemento}</label>))
    }
    </fieldset>


    
    <button className={styles.boton}>Crear</button>
</fieldset>
</form>


        </div>
    )
}
