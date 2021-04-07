import React from 'react';



import './button.css';

function Button(props) {
    return (

        <div className="container">
            <div className="row  text-center mt-5 mb-5">
                <div className="col-12 mb-5">
                <button type="button" className=" boton btn py-3 px-4 ">{props.textBoton}</button>

                </div>
            </div>

        <div className="row  mt-5">
            <div className="col-12">
        <h6 className="h6 d-flex justify-content-end">   
        <a className="pl-4 pr-4 enlace" href="#">{props.link1}</a>
        <a className="enlace" href="#">{props.link2}</a>   
        </h6>
            </div>

        </div>


        </div>

        
    );
}

export default Button;