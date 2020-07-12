import React, { Component } from "react";

import "./Menu.css";

import Listado from "./Listado";
import Pedido from "./Pedido";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu-padre">
          <div className="container-menu">
            <div className="box caja1"></div>
            <div className="box caja2"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
            <div className="box caja3"></div>
          </div>
          <Listado />
        </div>
        <Pedido/>
      </div>
    );
  }
}
