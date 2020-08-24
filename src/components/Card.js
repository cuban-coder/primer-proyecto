import React from "react";
import "./Pedido.css";
import Cantidad from './Cantidad'

export const Card = (props) => (
  <div className="colPlato" key={props.plato.id}>
    <div className="cardPlato">
      <div className="caja-imagen">
        <img src={props.plato.image} alt="" />
      </div>
      <div className="info">
        <div className="platoName">
          <div>
            <h1 className="big"> {props.plato.nombre} </h1>
            <span className="new">new</span>
          </div>
          <h3 className="small">algo sobre el plato que quiearas decir</h3>
        </div>

        <div className="size-container">
          <h3 className="title">cantidad</h3>
          <Cantidad
          cards= {props.cards}
          plato= {props.plato}
          handleClick={props.handleClick}
          aumentarCantidad = {props.aumentarCantidad}
          disminuirCantidad = {props.disminuirCantidad}
          cardOne = {props.cardOne}

          />

          <div className="buy-price">
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <h2>${props.plato.precio} cuc</h2>
            </div>
            <button className="btn btn-danger" onClick={() => props.agregarPedido(props.plato)}>
              Agregar
            </button>
          </div>
        </div>

        <div className="description">
          <h3 className="title">Product info</h3>
          <p className="text">{props.plato.descripcion}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
