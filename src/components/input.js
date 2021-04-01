import React from 'react';
import PropTypes from "prop-types";
import './body.css';

export const Input =(props) => {
    return (
        <form>
                <div className="row justify-content-center my-3">
                    <div className="col-4 mx-0">
                        <input type="email" className="form-control p-4" placeholder="Enter your email Address" />
                    </div>
                    <div className="col-auto mx-0">
                        <button id="freeTrial" type="button" className="btn btn-dark">{props.callToAction}</button>
                    </div>
                </div>
                    <div className="row justify-content-center py-2">
                        <div className="col-6">
                            <small id="emailHelp" class="form-text text-center text-light font-weight-lighter">{props.conditions}</small>
                        </div>
                    </div>
            </form>
    )
}

Input.propTypes = {
    callToAction: PropTypes.string,
    conditions: PropTypes.string
}