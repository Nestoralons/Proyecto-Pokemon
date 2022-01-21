const axios=require('axios')
const {Pokemon, Tipos,Op}=require('../db.js')
module.exports={
    getInfoApi:async()=>{
    try{
        let array=await axios.get('https://pokeapi.co/api/v2/pokemon')
        // let array2=await axios.get(array.data.next);
        // let lista2= array2.data.results.map(elemento=>axios.get(elemento.url))
        let lista= array.data.results.map(elemento=>axios.get(elemento.url))
        // let variable=[...lista,...lista2]
        let result=await Promise.all(lista)
        .then((data)=>
           data.map(elemento=>{
            return {ID:elemento.data.id,
            Nombre:elemento.data.name,
                  Tipo:elemento.data.types.map(elemento=>elemento.type.name),
                   Imagen:elemento.data.sprites.other.dream_world.front_default,
               Fuerza:elemento.data.stats[1].base_stat,
               Effort:elemento.data.stats[1].effort
            }
               
           })
           
           //     result= data.data.map(info=>
        //         {
        //             ID:info.data.id,
        //             Nombre:info.data.name,
        //             Tipo:info.data.types.map(elemento=>elemento.type.name),
        //             Imagen:info.data.sprites.other.dream_world.front_default,
        //             Fuerza:info.data.stats[1].base_stat
        //     }
        
        // )}
     )
    
    
    return result
    }catch(error){
        return error

    }
},
getinfoDB:async ()=>{
    try {
        const Mapeo=await Pokemon.findAll({
        attributes:['Nombre','Imagen','ID','Fuerza','Effort'],
        include:{
        model:Tipos,
        attributes:['Tipo'],
        through:{
            attributes:[]
        }
    }
        // * * Otra forma de hacerlo un poco mas corta 
        //includes:Genre
    })
    const Result=Mapeo.map(elemento=>{
        return {
        
            ID:elemento.ID,
            Nombre:elemento.Nombre,
            Imagen:elemento.Imagen,
            Fuerza:elemento.Fuerza,
            Tipo:elemento.tipos.map(elemento=>elemento.Tipo),
            Effort:elemento.Effort
            
        }
    })
    return Result
}catch(error){
        return error
    }
    },
    geinfoquery:async(nombre)=>{
        try
        {const data=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const resultado={

            ID:data.data.id,
            Nombre:data.data.name,
            Tipo:data.data.types.map(elemento=>elemento.type.name),
            Imagen:data.data.sprites.other.dream_world.front_default
        }
             console.log(resultado)
        return resultado}catch(error){
           return error}
    },
    getinfoDBquery:async (nombre)=>{
        try {
            const mapeo=await Pokemon.findAll({
                where:{
                    Nombre:nombre
                    
                },
             attributes:['Nombre','Imagen','ID'],
            include:{
            model:Tipos,
            attributes:['Tipo'],
            through:{
                attributes:[]
            }
        }
        
        })
    
    const filtro= {
            ID:mapeo[0].ID,
            Nombre:mapeo[0].Nombre,
            Imagen:mapeo[0].Imagen,
            Tipo:mapeo[0].tipos.map(elemento=>elemento.Tipo)
        
    }
    return filtro
    }catch(error){
            return error
        }
        },
    getInfoApiDetallada:async(id)=>{
        try{
            let array=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            let info=await array.data
            let objeto={
                ID:info.id,
                Nombre:info.name,
                Tipo:info.types.map(elemento=>elemento.type.name),
                Imagen:info.sprites.other.dream_world.front_default,
                Peso:info.weight,
                Altura:info.height,
                Vida:info.stats[0].base_stat,
                Fuerza:info.stats[1].base_stat,
                Defensa:info.stats[2].base_stat,
                Velocidad:info.stats[5].base_stat
            }
                
            return objeto
            
        }catch(error){
            return error
    
        }
    },
    getinfoDBDetallada:async (id)=>{
        try {const mapeo= await Pokemon.findAll({
             where:{
                 ID:id
             },
             attributes:['Nombre','Imagen','ID','Altura','Vida','Fuerza','Defensa','Velocidad','Peso'],
             include:{
             model:Tipos,
             attributes:['Tipo'],
             through:{
                 attributes:[]
             }
         }
             
         })
         
         const filtro= {
            ID:mapeo[0].ID,
            Nombre:mapeo[0].Nombre,
            Tipo:mapeo[0].tipos.map(elemento=>elemento.Tipo),
            Imagen:mapeo[0].Imagen,
            Peso:mapeo[0].Peso,
            Altura:mapeo[0].Altura,
            Vida:mapeo[0].Vida,
            Fuerza:mapeo[0].Fuerza,
            Defensa:mapeo[0].Defensa,
            Velocidad:mapeo[0].Velocidad         
         }
         
         return filtro}catch(error){
             console.log(error)
         }
         },
         postPokemon:async(Nombre,Altura,Peso,Vida,Fuerza,Defensa,Ataque,Imagen,Velocidad)=>{
            return await Pokemon.create({
                Nombre,
                Altura,
                Peso,
                Vida,
                Fuerza,
                Defensa,
                Ataque,
                Imagen,
                Velocidad,
            })
        },
        DBbuscadorTipo:async(Tipo)=>{
            return await Tipos.findAll({
                where:{
                    Tipo:Tipo
                }
            })
        },
        getTipos:async()=>{
            let tipos= await Tipos.findAll({
                attributes:  ['Tipo'],
                order:[['Tipo','ASC']]
            }
            )
            Mapeo=await tipos.map(elemento=>elemento.Tipo)
            return Mapeo
        }


}
