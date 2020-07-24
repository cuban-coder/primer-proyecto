import React, { Component } from "react";
import { Link } from "react-router-dom";

import plat from "../img/imagen9.jpg";
import plat2 from "../img/imagen7.jpg";

import axios from "axios";

import "./Listado2.css";
import cards from "./sample/cards.json";

export default class Listado extends Component {
  state = {
    opciones: [1, 2, 3, 4],
    platos: [],
    active: 0,

    cards: [
      {
        id: 1,
        active: 4,
        name: "active",
      },
      {
        id: 2,
        active: 2,
        name: "active",
      },
      {
        id: 3,
        active: 1,
        name: "active",
      },
      {
        id: 4,
        active: 4,
        name: "active",
      },
    ],
  };
  async componentDidMount() {
    await this.getPlatos();
  }
  
  getPlatos = async () => {
    const res = await axios.get("http://localhost:4000/users");
    this.setState({ platos: res.data });
    console.log(this.state.platos)
  };

  handleClick = async (id) => {
    await this.setState({
      cards: this.state.cards.map((c) =>
        c.id === id ? { ...c, active: !c.active } : c
      ),
    });
    console.log("Probando id activo", this.state.cards);
  };
  handleClick2 = async (idCard, id) => {

    await this.setState({
      platos: this.state.platos.map((plato) =>
        plato.id === idCard ? { ...plato, active: id } : plato
      ),
    });
    console.log("Aqui van los id", idCard, id)

  };

  render() {
    const platos = this.state.platos;

    return (
      <div>
        <div className="containerPlato">
          <div className="rowPlato">
            {this.state.platos.map((plato) => (
              <div className="colPlato"  key={plato.id}>
                <div className="cardPlato">
                  <div className="caja-imagen">
                    <img src={plato.image} alt=""/>
                  </div>
                  <div className="info">
                    <div className="platoName">
                      <div>
                        <h1 className="big"> {plato.nombre} </h1>
                        <span className="new">new</span>
                      </div>
                      <h3 className="small">
                        algo sobre el plato que quiearas decir
                      </h3>
                    </div>
                    <div className="description">
                      <h3 className="title">Product info</h3>
                      <p className="text">
                        {plato.descripcion}
                      </p>
                    </div>
                    <div className="size-container">
                      <h3 className="title">cantidad</h3>
                      <div className="sizes">
                        {this.state.cards.map((c) => (
                          <span
                            className={
                              "size " + (plato.active === c.id ? "active" : "")
                            }
                            key={c.id}
                            onClick={() => this.handleClick2(plato.id, c.id)}
                          >
                            {c.id}
                          </span>
                        ))}
                        <span className="size">+</span>
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
            ))}




          </div>
        </div>
      </div>
    );
  }
}
