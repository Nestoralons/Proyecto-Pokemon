import React  from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { gettypes } from "../actions/actions";
import { Post ,getallpokemons } from "../actions/actions";
import {Link, useNavigate } from 'react-router-dom';
import styles from './Create.module.css'
import imagen1 from '../imagen/pokeball.png'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Create() {
    const MySwal = withReactContent(Swal);
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
    const navigate=useNavigate()
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
                      Imagen:imagen1
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
                    
                    MySwal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Created Pokemon!",
                        showConfirmButton: false,
                        timer: 3500,
                      });
                     setTimeout(()=>{
                        MySwal.fire({
                            position: "center",
                            icon: "warning",
                            title: "Redirecting to Home!",
                            showConfirmButton: false,
                            timer: 2000,
                          });
                        setTimeout(()=>{navigate("/Pokemons")},1500)},3500)
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
//         <div className={styles.portada}>
//           <div className={styles.margen
//           }>
//            <Link to='/Pokemons'>
//             <button className={styles.boton}>GO BACK</button>
//            </Link>
//             </div>
       
           
//        <form className={styles.form}onSubmit={handlesubmit}>
// <fieldset className={styles.texto}>
// <legend className={styles.h4}>Creación de Pokemon</legend>

//           <div className={styles.datos}>

        
//     <div className={styles.separacion}>
//       <h4 htmlFor="Nombre">Name</h4>
//       <input className={styles.input} type="text" name="Nombre" id="Nombre"  required  value={Data.Nombre} onChange={handlechange}/>
      
//     </div >

//     <div className={styles.separacion}>
//       <h4 htmlFor="Imagen">IMAGE</h4>
//       <input className={styles.input}  type='url' name="Imagen" id="Imagen"  value={Data.Imagen} onChange={handlechange}/>
      
//     </div>

//     <div className={styles.separacionn1}>
//       <h4 htmlFor="Altura">HEIGHT</h4>
//       <input className={styles.input1}  type="number" name="Altura" id="Altura" min='0' max='200' required value={Data.Altura} onChange={handlechange}/>
//     </div>
  
//     <div className={styles.separacionn2}>
//       <h4 htmlFor="Peso">WEIGHT</h4>
//       <input  className={styles.input1}  type="number" name="Peso" id="Peso" min='0' max='200' required value={Data.Peso} onChange={handlechange}/>
//     </div>
//     <br/>
//     </div>
//     <fieldset className={styles.estadisticas}>
//         <legend className={styles.h4}>STATISTICS</legend>
//         <div className={styles.s}>
//         <div className={styles.sep} >
//       <h4 htmlFor="Fuerza">FORCE</h4>
//       <input className={styles.input1}   type="number" name="Fuerza" id="Fuerza" min='0' max='200' required value={Data.Fuerza} onChange={handlechange}/>
    
//     </div>
//     <div className={styles.sep}>
//       <h4 htmlFor="Vida">LIFE</h4>
//       <input className={styles.input1}  type="number" name="Vida" id="Vida" min='0' max='200' required value={Data.Vida} onChange={handlechange}/>
//     </div>
//     <div className={styles.sep}>
//       <h4 htmlFor="Velocidad">SPEDD</h4>
//       <input className={styles.input1}  type="number" name="Velocidad" id="Velocidad" min='0' max='200' required value={Data.Velocidad} onChange={handlechange}/>
//     </div>
//     <div className={styles.sep}>
//       <h4 htmlFor="Defensa">DEFENSE</h4>
//       <input className={styles.input1}  type="number" name="Defensa" id="Defensa" min='0' max='200' required value={Data.Defensa} onChange={handlechange}/>
//     </div>
//     </div>
//         </fieldset>

//     <fieldset className={styles.tipos}>
//     <legend>TYPES</legend>
//     {Tipos?.map((elemento)=>(<h4 key={elemento}><input className={styles.circulo} type='checkbox' name="Tipo" id="Tipo" key={elemento}  value={elemento}  onChange={handletipos}  />{elemento}</h4>))
//     }
//     </fieldset>


    
//     <button className={styles.boton}>Crear</button>
// </fieldset>
// </form>
//</div> 


<div className={styles.portada}>
          <div className={styles.principal}>
            <div className={styles.margen
          }>
                <Link to='/Pokemons'>
            <button className={styles.boton}>GO BACK</button>
              </Link>
           </div>
           <h1 className={styles.h1}>Create your Pokemon</h1>
           <form className={styles.bkg} onSubmit={handlesubmit}>
             
            <div className={styles.container}>
                <div className={styles.nuevo}>

                         <div className={styles.tamaño}>
                            <div className={styles.estiloc}>
                                    <div className={styles.separacion}>
                                            <h4 >Name</h4>
                                        <input className={styles.input} type="text" name="Nombre" id="Nombre"  required  value={Data.Nombre} onChange={handlechange}/>
                        
                                    </div >
                                    <div className={styles.separacion}>
                                    <h4>Image</h4>
                                        <input className={styles.input}  type='url' name="Imagen" id="Imagen"  value={Data.Imagen} onChange={handlechange}/>
                        
                                    </div>
                
                                    <div className={styles.cajita}>
                                            <div className={styles.separacionn1}>

                                            <h4>
                                                Height
                                            </h4>
                                            <input className={styles.input1}  type="number" name="Altura" id="Altura" min='0' max='200' required value={Data.Altura} onChange={handlechange}/>
                                            </div>

                                            < div className={styles.separacionn2}>
                                                    <h4>Weight</h4>      
                                                <input  className={styles.input1}  type="number" name="Peso" id="Peso" min='0' max='200' required value={Data.Peso} onChange={handlechange}/>
                                            </div>
                                    </div>
                                    <div className={styles.estadisticas}>
                                    <h3 className={styles.h4}>STATISTICS</h3>
                                            <div className={styles.s}>
                                                        <div className={styles.sep} >
                                                            <h4>Force</h4>
                                                        <input className={styles.input1}   type="number" name="Fuerza" id="Fuerza" min='0' max='200' required value={Data.Fuerza} onChange={handlechange}/>
                                            
                                                        </div>
                                                    <div className={styles.sep}>
                                                        <h4 >Life</h4>
                                                        <input className={styles.input1}  type="number" name="Vida" id="Vida" min='0' max='200' required value={Data.Vida} onChange={handlechange}/>
                                                    </div>
                                                    <div className={styles.sep}>
                                                        <h4 >Speed</h4>       
                                                         <input className={styles.input1}  type="number" name="Velocidad" id="Velocidad" min='0' max='200' required value={Data.Velocidad} onChange={handlechange}/>
                                                    </div>
                                                    <div className={styles.sep}>
                                                            <h4 >Defense</h4>
                                                            <input className={styles.input1}  type="number" name="Defensa" id="Defensa" min='0' max='200' required value={Data.Defensa} onChange={handlechange}/>
                                                    </div>
                                        </div>


                                    </div>
                            </div>
                                    </div>
                                 <div className={styles.tamaño1}>
                                    <h3>TYPES</h3>
                                    <div className={styles.tipos}>
                                         {Tipos?.map((elemento)=>(<div key={elemento} className={styles.tiposmar}><input className={styles.circulo} type='checkbox' name="Tipo" id="Tipo" key={elemento}  value={elemento}  onChange={handletipos}  /><h4>{elemento[0].toUpperCase()+elemento.slice(1)}</h4></div>))
                                              }
                                    </div>
                                 </div>
                        </div>
                                 </div>
                                 <div className={styles.botonf}>
                                 {/* <button className={styles.poke}>
                                 <img className={styles.bola} src={imagen1} alt='Create button'/>
                                 </button> */}
                                 <input className={styles.bola} type='image' src={imagen1} alt='submitButoon' />
                                 </div>
           </form>
            </div>
</div>
    
   
    )
}
