import React  from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { gettypes } from "../actions/actions";
import { Post } from "../actions/actions";
import imagen from '../imagen/pokemondefault.jpg'
import {Link} from 'react-router-dom';
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
                }else{
                  dispatch(Post(Data))
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
               alert('¡POKEMON CRADO EXITOSAMENTE!')
                }
                
            
            }else{
                alert('Seleccione al menos un Tipo')
            }
        }
        
    return (
        <div>
           <Link to='/Pokemons'>
            <p>Regresar a home</p>
           </Link>
       <form onSubmit={handlesubmit}>
<fieldset>
<legend>Creación de Pokemon</legend>

    <div>
      <label htmlFor="Nombre">Nombre</label>
      <input type="text" name="Nombre" id="Nombre"  required  pattern="[a-zA-Z]+" value={Data.Nombre} onChange={handlechange}/>
      
    </div>
    <br/>
    <div>
      <label htmlFor="Imagen">Imagen</label>
      <input type='url' name="Imagen" id="Imagen"  value={Data.Imagen} onChange={handlechange}/>
      
    </div>
    <br/>
    <div>
      <label htmlFor="Altura">Altura</label>
      <input type="number" name="Altura" id="Altura" min='0' max='200' required value={Data.Altura} onChange={handlechange}/>
    </div>
    <br/>
    <div>
      <label htmlFor="Peso">Defensa</label>
      <input type="number" name="Peso" id="Peso" min='0' max='200' required value={Data.Peso} onChange={handlechange}/>
    </div>
    <br/>
    <fieldset>
        <legend>Estadisticas</legend>
        <div>
      <label htmlFor="Fuerza">Fuerza</label>
      <input type="number" name="Fuerza" id="Fuerza" min='0' max='200' required value={Data.Fuerza} onChange={handlechange}/>
    
    </div>
    <div>
      <label htmlFor="Vida">Vida</label>
      <input type="number" name="Vida" id="Vida" min='0' max='200' required value={Data.Vida} onChange={handlechange}/>
    </div>
    <div>
      <label htmlFor="Velocidad">Velocidad</label>
      <input type="number" name="Velocidad" id="Velocidad" min='0' max='200' required value={Data.Velocidad} onChange={handlechange}/>
    </div>
    <div>
      <label htmlFor="Defensa">Defensa</label>
      <input type="number" name="Defensa" id="Defensa" min='0' max='200' required value={Data.Defensa} onChange={handlechange}/>
    </div>
        </fieldset>

    <fieldset>
    <legend>Tipos</legend>
    {Tipos?.map((elemento)=>(<label key={elemento}><input type='checkbox' name="Tipo" id="Tipo" key={elemento}  value={elemento}  onChange={handletipos}  />{elemento}</label>))
    }
    </fieldset>


    
    <button>Enviar</button>
</fieldset>

  {/* <fieldset>
    <legend>Tamaño del zumo de fruta</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small"/>
      <label htmlFor="size_1">Pequeño</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium"/>
      <label htmlFor="size_2">Mediano</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large"/>
      <label htmlFor="size_3">Grande</label>
    </p>
  </fieldset>
  <fieldset>
  <legend>Información Personal</legend>
  Nombre: <input name='nombre' type='text' tabindex='1'/>
  Apellidos: <input name='apellidos' type='text' tabindex='2'/>
 </fieldset>

 <fieldset>
  <legend>edad</legend>
  <input type='checkbox' tabindex='20'
            name='edad' value='20-39' /> 
  <input type='checkbox' tabindex='21'
            name='edad' value='40-59' /> 
  <input type='checkbox' tabindex='22'
            name='edad' value='60-79' />
 </fieldset>

 <form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry"/>
    <label for="taste_1">Me gustan las cerezas</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana"/>
    <label for="taste_2">Me gustan los plátanos</label>
  </p>
</form>

<p>Los campos obligatorios se marcan con un <abbr title = "required">*</abbr>.</p>


<div>
  <label for="username">Nombre:</label>
  <input type="text" name="username"/>
  <label for="username"><abbr title="required" aria-label="required">*</abbr></label>
</div>


<div>
  <label for="username">
    <span>Nombre:</span>
    <input id="username" type="text" name="username"/>
    <abbr title="required" aria-label="required">*</abbr>
  </label>
</div>


<div>
  <label for="username">Nombre: <abbr title="required" aria-label="required">*</abbr></label>
  <input id="username" type="text" name="username"/>
</div>







<section>
    <h2>Información de contacto</h2>
    <fieldset>
      <legend>Título</legend>
      <ul>
          <li>
            <label for="title_1">
              <input type="radio" id="title_1" name="title" value="K" />
              Rey
            </label>
          </li>
          <li>
            <label for="title_2">
              <input type="radio" id="title_2" name="title" value="Q"/>
              Reina
            </label>
          </li>
          <li>
            <label for="title_3">
              <input type="radio" id="title_3" name="title" value="J"/>
              Bufón
            </label>
          </li>
      </ul>
    </fieldset>
    <p>
      <label for="name">
        <span>Nombre:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="name" name="username"/>
    </p>
    <p>
      <label for="mail">
        <span>Correo electrónico:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="email" id="mail" name="usermail"/>
    </p>
    <p>
      <label for="pwd">
        <span>Contraseña:</span>
        <strong><abbr title="required">  *  </abbr></strong>
      </label>
      <input type="password" id="pwd" name="password"/>
    </p>
</section>


<section>
    <h2>Información de pago</h2>
    <p>
      <label for="card">
        <span>Tipo de tarjeta:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>
    <p>
      <label for="number">
        <span>Número de tarjeta:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="tel" id="number" name="cardnumber"/>
    </p>
    <p>
      <label for="date">
        <span>Fecha de caducidad:</span>
        <strong><abbr title="required">*</abbr></strong>
        <em>el formato mm/aa</em>
      </label>
      <input type="date" id="date" name="expiration"/>
    </p>
</section>
<p> <button type="submit">Validar el pago</button> </p> */}
</form>

        </div>
    )
}
