import React, { Component } from "react";
import { Link } from "react-router-dom";

import plat from "../img/imagen9.jpg";
//import './responsive/responsive.js';

import "./Listado2.css";

export default class Listado extends Component {

  state = {
    style: document.querySelectorAll('.size')
  };

 componentDidMount() {
   console.log("aqui va eso",this.state.style)
}

  render() {
    return (
      <div>
        <div className="lista">          
            <div className="cardPlato">
              <div className="platoImagen">
                <img src={plat} alt=""/>
              </div>
              <div className="info">
              <div className="platoName">
                <div>
                  <h1 className="big">Enchilada Italiana</h1>
                  <span className="new">new</span>
                </div>
                <h3 className="small">
                  algo sobre el plato que quiearas decir
                </h3>
              </div>
              <div className="description">
                <h3 className="title">Product info</h3>
                <p className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  vel praesentium corporis iure? Blanditiis ipsa voluptates quo.
                  Ex.
                </p>
              </div>
              <div className="size-container">
                <h3 className="title">cantidad</h3>
                <div className="sizes">
                  <span className="size">1</span>
                  <span className="size">2</span>
                  <span className="size active">3</span>
                  <span className="size">4</span>
                  <span className="size">5</span>
                </div>
              </div>
              <div className="buy-price">
                <Link to="#" className="buy">
                  <i className="fas fa-shopping-cart"></i>Add to card
                </Link>
                <div className="price">
                  <i className="fas fa-dollar-sign"></i>
                  <h1>189.99</h1>
                </div>
              </div>
            </div>
            </div>          
        </div>
      </div>
    );
  }
}
