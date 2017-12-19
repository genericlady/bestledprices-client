import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/';
import PriceTable from './components/PriceTable/';
import { isEmpty } from 'lodash';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
  state = {
    priceList: [],
    filteredList: [],
    query: '',
  }

  getPrices = () => {
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
          filteredList: priceList.slice().sort((p1, p2) =>
            Number(p1.price.replace(/\$/, '')) - Number(p2.price.replace(/\$/, '')))
        });
      case 'priceHighToLow':
        return this.setState({
          filteredList: priceList.slice().sort((p1, p2) =>
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
            <div>
              <ButtonGroup>
                <Button onClick={() => this.sortBy('relevance')}>Relevance</Button>{' '}
                <Button onClick={() => this.sortBy('priceLowToHigh')}>Price Low to High</Button>{' '}
                <Button onClick={() => this.sortBy('priceHighToLow')}>Price High to Low</Button>
              </ButtonGroup>
              <PriceTable priceList={filteredList} />
            </div>
        }
      </div>
    );
  }
}

export default App;
