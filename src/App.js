import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Converter from './Converter/Converter';
import BitcoinChart from './BitcoinChart/BitcoinChart';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Converter/>
      <BitcoinChart/>
      </div>
    );
  }
}

export default App;
