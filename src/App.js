import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';

//Componentes
import Navigation from './components/Navigation'
import Menu from './components/Menu'



function App() {
  return (
    <Router>
      
        <Navigation />
        <div className='route-flex'>
          <div className='box1'>
            <Route path="/" exact component={Menu} />
          </div>
        </div>

    </Router>
  );
}

export default App;
