import React from 'react';
import PropTypes from 'prop-types';
import './cards.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Card ({title, icon, text}) {
    return (
        <div className="card border-0" >
            <div className="card-body">
                <i className={icon}></i>
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo qui voluptates autem voluptatibus dolores dolore, ipsam ipsum doloribus non voluptatem laboriosam quod consequatur. Cum ad nobis quibusdam rerum, perspiciatis nihil.'
                    }
                </p>

            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
}

export default Card;



/* style="width: 18rem;" */