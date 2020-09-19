import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';



//Componentes

import Navigation from './components/Navigation'
import Menu from './components/Menu'
import Listado from './components/Listado'
import Personal from './components/Personal'
import Grid from './components/Grid'


function App() {
  return (
    <Router>
            <Route path="/" exact component={Navigation} />
            <Route path="/" exact  component={Menu} />
            <Route path="/grid" exact component={Grid} />
            <Route path="/personal"  component={Personal} />
    </Router>
  );
}

export default App;
