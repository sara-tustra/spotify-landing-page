import React from 'react';
import './body.css';

import logo from './assets/logo.png'

export const Header = () =>{
    return (
        <div className="headerContainer">
            <div className="row">
            <img className="logo"src={logo} alt="img" />
            </div>
        </div>
    )
}