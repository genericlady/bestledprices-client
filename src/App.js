import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/';
import PriceTable from './components/PriceTable/';
import { isEmpty } from 'lodash';

class App extends Component {
  state = {
    priceList: [],
    query: '',
  }

  getPrices = () => {
    const {
      query = '',
    } = this.state;

    fetch(`http://localhost:3000/search/#{query}`)
      .then(response => response.json())
      .then(({ priceList }) => this.setState({ priceList }));
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  render() {
    const {
      priceList = [],
    } = this.state;

    return (
      <div className="App">
        <Navigation getPrices={this.getPrices} handleChange={this.handleChange}/>
        {
          !isEmpty(priceList) &&
            <PriceTable priceList={priceList} />
        }
      </div>
    );
  }
}

export default App;
