import React, {Component} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

class BitcoinChart extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then(response => {
            this.setState({data: response.data.bpi});
        })
    };


    render() {
        return(
            <div></div>
        )
    }
}

export default BitcoinChart;
