import React, { Component } from 'react';
import './Converter.css';

import axios from 'axios';


class Converter extends Component {
    state = {
        cryptoCurrency: [],
        currencyCount: 0,
        cryptoCurrencyCount: 0,
        cryptoCurrencySelect: { name: 'Bitcoin' },
        currencySelect: { name: 'USD' }
    };

    componentDidMount() {
        this.getCryptoCurrency();
    };

    getCryptoCurrency = () => {
        axios.get('https://api.coinmarketcap.com/v1/ticker/' +
            this.state.cryptoCurrencySelect.name.toLowerCase() + '/', { params: { convert: this.state.currencySelect.name } })
            .then(response => {
                this.setState({ cryptoCurrency: response.data });
            })
    };

    changeCryptoCurrencyCount = (event) => {
        this.setState({ cryptoCurrencyCount: event.target.value }, () => {
        });
    };

    changeCurrencyCount = (event) => {
        this.setState({ currencyCount: event.target.value })
    };

    convertCrypto = () => {
        const crypto = this.state.cryptoCurrencyCount;
        const price = this.state.cryptoCurrency[0].price_usd;
        const total = crypto * price;
        this.setState({ currencyCount: total })
    };

    convertCurrency = () => {
        const currency = this.state.currencyCount;
        const price = this.state.cryptoCurrency[0].price_usd;
        const total = currency / price;
        this.setState({ cryptoCurrencyCount: total });
    };

    cryptoCurrencySelect = (event) => {
        this.setState({ cryptoCurrencySelect: { name: event.target.value } }, () => {
            this.getCryptoCurrency();
        });
    };

    currencySelect = (event) => {
        this.setState({ currencySelect: { name: event.target.value } }, () => {
            this.getCryptoCurrency();
        });
    };

    render() {
        return (
            <div className="converter">
                <div className="container">
                    <div className="converter-wrapper">
                        <h3 className="converter-title">Cryptocurrency Converter Calculator</h3>
                        <div>
                            <div className="row">
                            <div className="converter-left col-sm-5">
                                <input className="converter-input form-control" type="text" value={this.state.cryptoCurrencyCount} onChange={this.changeCryptoCurrencyCount}></input>
                                <select className="converter-select custom-select" value={this.state.cryptoCurrencySelect.name} onChange={this.cryptoCurrencySelect}>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="Ethereum">Ethereum</option>
                                    <option value="Ripple">Ripple</option>
                                    <option value="Bitcoin-Cash">Bitcoin Cash</option>
                                    <option value="Litecoin">Litecoin</option>
                                    <option value="Cardano">Cardano</option>
                                </select>
                            </div>
                            <div className="converter-center col-sm-2">
                                <button type="button" className="btn btn-primary" onClick={this.convertCrypto}>Crypto to Currency</button>
                                <button type="button" className="btn btn-primary" onClick={this.convertCurrency}>Currency to Crypto</button>
                            </div>
                            <div className="converter-right col-sm-5">
                                <input className="converter-input form-control" type="text" value={this.state.currencyCount} onChange={this.changeCurrencyCount}></input>
                                <select className="converter-select custom-select" value={this.state.currencySelect.name} onChange={this.currencySelect}>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="RUB">RUB</option>
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Converter;