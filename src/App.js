
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import VegPizza from './components/VegPizza'
import NonvegPizza from './components/NonvegPizza'
import Crust from './components/Crust'
import Sides from './components/Sides'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/vegpizza'>Vegetarian Pizza</Link>
          </li>
          <li>
            <Link to='/nonvegpizza'>Non Vegetarian Pizza</Link>
          </li>
          <li>
            <Link to='/crust'>Crust</Link>
          </li>
          <li>
            <Link to='/sides'>Sides</Link>
          </li>
        </ul>

        <hr/>
        <Routes>
          <Route path='/vegpizza' element={<VegPizza/>} />
              
          <Route path='/nonvegpizza' element={<NonvegPizza/>} />
              
         
          <Route path='/crust' element={<Crust/>} />
              
         
          <Route path='/sides' element={<Sides/>} />
              
        
  </Routes> 
      </div>
    </Router>
  );
}

export default App;
