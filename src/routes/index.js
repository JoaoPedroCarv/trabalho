import { Routes, Route,  } from 'react-router-dom'


import Login from '../pages/login';
import Inicio from '../pages/inicio';


import Private from './private'

function RoutesApp(){
  return(
   
    
    <Routes>
      
      <Route path="/" element={ <Login/> } />
      <Route path="/inicio" element={ <Inicio/> } />
     
      

    </Routes>
  
  )
}

export default RoutesApp;