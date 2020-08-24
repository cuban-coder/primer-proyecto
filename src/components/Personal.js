
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Personal.css';




const Personal = () => {

    const [insertados, setInsertados] = useState([]);

    useEffect(() => {
        insertPedidos();
      }, []);

    const insertPedidos = async ()  => {
        const res = await axios.get("http://localhost:4000/temp");
        setInsertados(res.data);
    }

    return (
        <div className="panel">
           
           <div className="panel_hijo ">
           
                   <div className="row ">
               <div className="container">
                        <div className="col-md-12 ">
                            <ul className="list-group">
                                <li className="list-group-item centrada">Mesa 1</li>

                                    {insertados.map((insert)=> (
                                        <li className="list-group-item">{insert.nombre}---------{insert.cantidad}</li>
                                    ))}

                            </ul>
                        </div>
                   </div>
               </div>
           </div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
           <div className="panel_hijo"></div>
        </div>
    )
}
export default Personal;