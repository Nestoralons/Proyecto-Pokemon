import React from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getallpokemons } from "../actions/actions";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";


function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallpokemons())
    }, [dispatch])
    const [Valor,setValor]=useState(500)
    const pokemons=useSelector(state=>state.Pokemons)
    // const [Page,setPage]=useState(1) 
    // const [orden,setOrden]=useState('')
    // let Count=pokemons.length;
    // let AmountPerpage=12;
    // let end=AmountPerpage*Page;
    // let Begin=end-AmountPerpage;
    // let Pages=[];
    // for(let i=0;i<Math.ceil(Count/AmountPerpage);i++){
    //             Pages.push(i+1)
    //         }
    // let ChangePage=(Pagenumber)=>{
    //  setPage(Pagenumber)
    // setOrden(`Orden:${Pagenumber*Math.random()}`)
    // }
    
    return (
        <div>
            <h1>
              POKEMONS
          </h1>
        <SearchBar/>
        
          <Paginado pokemons={pokemons} setValor={setValor}/>
          {/* {
              array?.map(elemento=>{
                  return <Pokemons Nombre={elemento.Nombre} Imagen={elemento.Imagen} Tipo={elemento.Tipo} key={elemento.ID} ID={elemento.ID}/>
              }
                )
          } */}

        </div>
    )
}

export default Home

