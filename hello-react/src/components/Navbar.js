import React, { Component } from 'react'
//import PropTypes from 'prop-types'


import {Link} from 'react-router-dom'
import '../components/style/Navbar.css'
import logo from '../images/logo.svg'

export class Navbar extends Component {
   
    render() {
        return (
            <div className="Navbar">

                <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                <img className="Navbar__Brand-logo" src={logo}/>
                <span  className="font-weight-lignt">Platzi</span>
                <span className="font-weight-bold" >Config</span>
                </Link>
                </div>
            </div>
        )
    }
}

export default Navbar
