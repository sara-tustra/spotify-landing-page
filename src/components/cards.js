import React from 'react'
import Card from './Card';
import '@fortawesome/fontawesome-free/css/all.min.css'

const cards = [
    {
        id: 1,
        icon: 'fas fa-laptop fa-2x',
        title: 'Beautiful themes that are responsive and customizable' ,
        text: 'No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.',
    },
    {
        id: 2,
        icon: 'fas fa-money-bill fa-2x',
        title: 'Pricing as low as $9/month',
        text: 'Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $9/month.',
    },
    {
        id: 3,
        icon: 'fas fa-user-friends fa-2x',
        title: 'Trusted by over 800,000 businesses worldwide',
        text: 'Shopify handles everything from marketing and payments, to secure checkout and shipping',
    }
]


function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} icon={card.icon} text={card.text}/>
                    </div>
                ))
                }
            
            </div>
        </div>
    )
}

export default Cards;
