import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';



//Componentes
import {TaskRow} from './components/Nav';
import Navigation from './components/Navigation'
import Menu from './components/Menu'
import Listado from './components/Listado'



function App() {
  return (
    <Router>
        <Navigation />
            <Route path="/" exact component={Menu} />
    </Router>
  );
}

export default App;
