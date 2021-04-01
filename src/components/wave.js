import React from 'react';

import './body.css';
import one from './assets/1.png'





export const Wave = () => {
    return (
        <div className="bigContainer">
            <img className="banner"src={one} alt="img" />
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">

                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>


        </div>
    )
}