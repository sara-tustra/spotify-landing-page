import React from 'react';
import PropTypes from "prop-types";
import './body.css';


import { Input } from './input';

export const MiddleContainer = (props) => {
    return (
        <div className="middleContainer">
            <div className="row">
                <h1 className="text-white mx-auto my-3">{props.title}</h1>
            </div>
            <div className="row">
                <h2 className="text-white mx-auto font-weight-lighter my-3">{props.subtitle}</h2>
            </div>
            <Input 
            callToAction="Start free trial"
            conditions="Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify." />
                </div>

   

    )
}


MiddleContainer.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
    
};

