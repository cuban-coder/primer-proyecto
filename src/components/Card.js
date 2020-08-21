import React from "react";
import "./Pedido.css";

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
          <div className="sizes">
            {props.cards.map((c) => (
              <span
                className={"size " + (props.plato.active === c ? "active" : "")}
                key={c}
                onClick={() => props.handleClick(props.plato.id, c)}
              >
                {c}
              </span>
            ))}

            <span className="size">+</span>
          </div>

          <div className="buy-price">
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <h2>${props.plato.precio}</h2>
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
