import React from 'react';
import clients from './images';


import '../App.css';
import './button.css';


function Footer(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className=" d-flex justify-content-center list-group list-group-horizontal-md my-5">
                        {
                            clients.map((client, i) =>{
                                return <li key={i} className="list-group-item p-1 py-5  border border-right-0 border-left-0"> <img src={client} alt="" /> </li>
                            }
                            
                            
                            )



                        }
                    </ul>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">

                <div className="col-8  ">
                    <h3 className="parrafo text-center h3 ">{props.paragraph1}</h3>
                    <h4 className="sub text-center mt-4 text-secondary h6">{props.subparagraph}</h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;