import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/';
import PriceList from './components/PriceList/';
import { isEmpty } from 'lodash';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
  state = {
    priceList: [],
    filteredList: [],
    query: '',
  }

  getPrices = (event) => {
    event.preventDefault();
    const {
      query = '',
    } = this.state;

    fetch(`http://localhost:3000/search/${query}`)
      .then(response => response.json())
      .then(({ priceList }) =>
        this.setState({
          filteredList: priceList.slice(),
          priceList: Object.freeze(priceList),
        }));
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  sortBy = (type) => {
    const {
      priceList,
      filteredList,
    } = this.state;

    switch (type) {
      case 'priceLowToHigh':
        return this.setState({
          filteredList: filteredList.slice().sort((p1, p2) =>
            Number(p1.price.replace(/\$/, '')) - Number(p2.price.replace(/\$/, '')))
        });
      case 'priceHighToLow':
        return this.setState({
          filteredList: filteredList.slice().sort((p1, p2) =>
            Number(p2.price.replace(/\$/, '')) - Number(p1.price.replace(/\$/, '')))
        });
      default:
        return this.setState({ filteredList: priceList });
    }
  }

  render() {
    const {
      filteredList,
    } = this.state;

    return (
      <div className="App">
        <Navigation getPrices={this.getPrices} handleChange={this.handleChange}/>
        {
          !isEmpty(filteredList) &&
            <div className="text-center">
              <div className="btn-group" role="group" aria-label="Filter">
                <button onClick={() => this.sortBy('relevance')} type="button" className="btn btn-secondary">Relevance</button>
                <button onClick={() => this.sortBy('priceLowToHigh')} type="button" className="btn btn-secondary">$ - $$$$</button>
                <button onClick={() => this.sortBy('priceHighToLow')} type="button" className="btn btn-secondary">$$$$ - $</button>
              </div>
              <PriceList priceList={filteredList} />
            </div>
        }
      </div>
    );
  }
}

export default App;
