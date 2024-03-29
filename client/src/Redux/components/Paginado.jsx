import React from 'react'
import {useState} from "react";
import Pokemons from './Pokemons'
import Nav from './Nav';
import styles from './Paginado.module.css'
import Spinner from './Spinner'
export default function Paginado({pokemons,setValor}) {
    const [Page,setPage]=useState(1);
  const count=pokemons.length 
  const AmountPerpage=12
  const end=Page*AmountPerpage;
  const Begin=end -AmountPerpage;
  const Pokemones=pokemons.slice(Begin,end);
  const Pages =[];
  for (let i = 0; i < Math.ceil(count/AmountPerpage); i++) {
      Pages.push(i+1) ;
  }
function handleClick(e,number){
e.preventDefault()
setPage(number)
setValor(Math.random())
}

    return (

        
        <div className={styles.filas}>
            <div className={styles.Navegacion}>

       <Nav Pagina={setPage} setValor={setValor}/>
            </div>
    <div className={styles.pokemones}>
        <div className={styles.paginado}>

           {Pages.map(el=><button className={styles.boton} key ={el} onClick={(e)=>handleClick(e,el)}>{el}</button>)}
        </div>
        <div className={styles.lista}>
      

{   

Pokemones.length? Pokemones.map(elemento=>{
                  return <Pokemons Nombre={elemento.Nombre} Imagen={elemento.Imagen} Tipo={elemento.Tipo} key={elemento.ID} ID={elemento.ID} Effort={elemento.Effort}/>
              } 
                ): <Spinner />
          }
          
        
        </div>
                 
    </div>
       
        </div>
    )
}