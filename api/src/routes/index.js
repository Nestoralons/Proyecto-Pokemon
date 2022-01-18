const { Router } = require('express');
const {getInfoApi,
    getinfoDB,
    geinfoquery,
    getinfoDBquery,
    getInfoApiDetallada,
    getinfoDBDetallada,
    postPokemon,
    DBbuscadorTipo,
    getTipos,

}=require('./Modelos')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getAllPokemones= async()=>{
     const API=await getInfoApi();
    //console.log(API)
    const DB=await getinfoDB();
  
    


    // ** Unimos los datos de la api y de la base de datos 
    let Info
    if(DB.length>0){
     Info=[...DB,...API];
    }else{
     Info=API;
    } 
   
    return Info
}
const getAllPokemonesquery = async(nombre)=>{
    try {
    const API=await geinfoquery(nombre);
    const DB=await getinfoDBquery(nombre);
    let Info
    if(DB.Nombre!==undefined ){
    Info=DB
    console.log('entre en DB')
    }
 else if (API.Nombre!==undefined){
     Info=API;
     console.log('entre en API')

    } else{
        Info=null
    
    }
   return Info
}catch(error){
    return error 
}
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//**---------RUTA VIDEOGAMES Y POR BUSQUEDA CON QUERY --------*/
router.get('/pokemons',async(req,res)=>{
    try{
        const {name}=req.query;   
     
        if(name){
            let base=await getAllPokemonesquery(name);
            //console.log(base)
            
            base?res.status(200).send(base):res.status(200).send('Pokemon No Encontrado, lo sentimos. Intente con otro nombre ');        
            
        }else{
            let pokemones=await getAllPokemones();
        res.status(200).send(pokemones);
    }
         
    }catch(error){
       console.log(error)

    }

})
/**------ RUTA CON BUSQUEDA POR ID---------------- */
router.get('/pokemons/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        if (!Number(id)){

         const Detalles =await getinfoDBDetallada(id);
         Detalles? res.status(200).send(Detalles): res.status(404).send('Algo ha salido mal, verifique el id suministrado')
        }
        if(Number(id)){
        const Detalles= await getInfoApiDetallada(id);
        Detalles? res.status(200).send(Detalles): res.status(404).send('Algo ha salido mal, verifique el id suministrado')
        }
    }catch(error){
        console.log(error)
    }
})
router.post('/pokemons',async(req,res)=>{
    try{
    const{
        Nombre,Altura,Peso,Vida,Fuerza,Defensa,Ataque,Imagen,Velocidad,Tipo
    }=req.body;

    let Pokemon=await postPokemon( Nombre,Altura,Peso,Vida,Fuerza,Defensa,Ataque,Imagen,Velocidad)
    let TiposDB=await DBbuscadorTipo(Tipo);
    Pokemon.addTipos(TiposDB);
       // console.log(GenreDB)
    res.status(200).send('Pokemon creado exitosamente')
    }catch(error){
        console.log(error)
    }
})

router.get('/types',async(req,res)=>{
    try{
    let Tipos=await getTipos();
    

    if(Tipos.length){
        res.status(200).send(Tipos);
    }else{
        res.status(404).send('Algo ha salido mal')
    }

    }catch(error){

    }
})

module.exports = router;
