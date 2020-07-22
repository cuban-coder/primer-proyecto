import React, { Component } from "react";
import { Link } from "react-router-dom";

import plat from "../img/imagen9.jpg";
import plat2 from "../img/imagen7.jpg";

import "./Listado2.css";
import cards from "./sample/cards.json";

export default class Listado extends Component {
  state = {
    opciones: [1, 2, 3, 4],
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

  handleClick = async (id) => {
    await this.setState({
      cards: this.state.cards.map((c) =>
        c.id === id ? { ...c, active: !c.active } : c
      ),
    });
    console.log("Probando id activo", this.state.cards);
  };
  handleClick2 = async (idCard, id) => {
    console.log("Aqui van los id", idCard, id)
    await this.setState({ active: id });

  };

  render() {
    const { opciones, active } = this.state;

    return (
      <div>
        <div className="containerPlato">
          <div className="rowPlato">
            {this.state.cards.map((card) => (
              <div className="colPlato"  key={card.id}>
                <div className="cardPlato">
                  <div className="caja-imagen">
                    <img src={plat2} alt="" />
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In vel praesentium corporis iure? Blanditiis ipsa
                        voluptates quo. Ex.
                      </p>
                    </div>
                    <div className="size-container">
                      <h3 className="title">cantidad</h3>
                      <div className="sizes">
                        {this.state.cards.map((c) => (
                          <span
                            className={
                              "size " + (card.active === c.id ? "active" : "")
                            }
                            key={c.id}
                            onClick={() => this.handleClick2(card.id, c.id)}
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
                    </p>
                  </div>
                  <div className="size-container">
                    <h3 className="title">cantidad</h3>
                    <div className="sizes">
                      {this.state.cards.map((c) => (
                        <span
                          className={
                            "size " + (c.active === active ? "active" : "")
                          }
                          key={c.id}
                          onClick={() => this.handleClick(c.id)}
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
                    </p>
                  </div>
                  <div className="size-container">
                    <h3 className="title">cantidad</h3>
                    <div className="sizes">
                      {this.state.opciones.map((opcion) => (
                        <span
                          className={
                            "size " + (opcion === active ? "active" : "")
                          }
                          key={opcion}
                          onClick={() => this.handleClick2(opcion)}
                        >
                          {opcion}
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
                    </p>
                  </div>
                  <div className="size-container">
                    <h3 className="title">cantidad</h3>
                    <div className="sizes">
                      {this.state.opciones.map((opcion) => (
                        <span
                          className={
                            "size " + (opcion === active ? "active" : "")
                          }
                          key={opcion}
                          onClick={() => this.handleClick2(opcion)}
                        >
                          {opcion}
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
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

            <div className="colPlato">
              <div className="cardPlato">
                <div className="caja-imagen">
                  <img src={plat} alt="" />
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In vel praesentium corporis iure? Blanditiis ipsa
                      voluptates quo. Ex.
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
        </div>
      </div>
    );
  }
}
