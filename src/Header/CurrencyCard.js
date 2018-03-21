import React from 'react';

import './CurrencyCard.css'

const CurrencyCard = (props) => {
    return (
        <div className="currency-card">
            <p>{props.name}</p>
            <p>{props.value}</p>
        </div>
    )
}

export default CurrencyCard;