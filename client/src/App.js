import './App.css';
import {Routes,Route} from 'react-router-dom';
import Landing from '../src/Redux/components/Landing'
import React from 'react';
import Home from './Redux/components/Home';
import Detail from './Redux/components/Detail';
import Create from './Redux/components/Create';

function App() {
  return (
    <div className="App">
       <Routes>
     <Route exact path="/" element={<Landing/>}/>
    <Route path='/Pokemons' element={<Home/>}/>
    <Route path='/Pokemons/:ID' element={<Detail/>}/>
    <Route path='Pokemons/create' element={<Create/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
