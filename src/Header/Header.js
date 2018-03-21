import React, { Component } from 'react';
import './Header.css';

import axios from 'axios';

import CurrencyCard from './CurrencyCard';


class Header extends Component {

    state = {
        currency: {
            name: 'USD'
        },
        cryptoCurrency: []
    }

    componentDidMount() {
        this.getCryptoCurrency();
    }

    currencySelectHandler = (event) => {
        this.setState({currency: {name: event.target.value}}, () => {
            this.getCryptoCurrency();
        });
    }

    getCryptoCurrency = () => {
        axios.get('https://api.coinmarketcap.com/v1/ticker/', { params: { limit: 6, convert: this.state.currency.name } })
            .then(response => {
                this.setState({ cryptoCurrency: response.data });
            })
    }

    getPrice(item) {
       return item['price_' + this.state.currency.name.toLowerCase()];
    }


    render() {

        const CurrencyCards = this.state.cryptoCurrency.map(item => {
            return (
                <CurrencyCard key={item.id} name={item.name} value={this.getPrice(item)} />
            )
        })

        return (
            <div className="container">
                <div className="header">
                <select className="header-select custom-select" value={this.state.currency.name} onChange={this.currencySelectHandler}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                </select>
                <div className="currency-cards">
                    {CurrencyCards}
                </div>
                </div>
            </div>
        )
    }
}

export default Header;