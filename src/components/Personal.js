import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Personal.css";
import io from "socket.io-client";

const Personal = () => {
  const [insertados, setInsertados] = useState([]);
  const [socket, setSocket] = useState();
  
  
  
  useEffect(() => {
    insertPedidos();
    
  }, []);

 

  useEffect(() => {
    if (socket)
      socket.on('message', (agregados, numerito)=> {
        console.log("estos son los insertados",agregados)
        setInsertados([...insertados, ...agregados]);
       
      })
     else
    {
      setSocket(io('http://localhost:4000'));
    }
  });
   
  const PedidoPersonal = () => (
    insertados.map((insert,i ) => {
      if(insert.cantidad)
      return(
        <li className="list-group-item " key={i}>
          {insert.nombre}---------{insert.cantidad}
        </li>
      )
      else
      return(
        <li className="list-group-item " key={i}>
          {insert.nombre}---------{insert.active}
        </li>
      )
    })
  )

  const insertPedidos = async () => {
    const res = await axios.get("http://localhost:4000/temp");
    setInsertados(res.data);
  };

  

  return (
    <div className="panel">
      <div className="panel_hijo ">
        <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 1</li>
  

                <PedidoPersonal/>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 2</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 3</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 4</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 5</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 6</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 7</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="panel_hijo">
      <div className="row ">
          <div className="container">
            <div className="col-md-12 ">
              <ul className="list-group">
                <li className="list-group-item centrada">Mesa 8</li>

                {insertados.map((insert,i) => (
                  <li className="list-group-item" key={i}>
                    {insert.nombre}---------{insert.active}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Personal;
