import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

export default class Navigation extends Component {


    state = {
        hidden: true,
    }

    showMenu = () => {
        this.setState({hidden: this.state.hidden ? false : true})
        console.log("Probando estadoooo",this.state.hidden)
    }
    StyleCompleted(){
        if(!this.state.hidden){
            return{
                display: 'block',
                transition: '1s'
             }
        }
    }
    render() {
        return (
            <nav   className="navbar navbar-expand-lg navbar-dark bg-dark alineacion">
                <div className="container">
                    <Link className="nav-link" to="/">NotesApp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={this.showMenu}></span>
                    </button>
                    <div style={this.StyleCompleted()} className= "collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/listado" className="nav-link">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
