import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import './App.css';
import Navigation from './components/Navigation';
import PriceList from './components/PriceList';
import Filter from './components/Filter';

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

  updateFilteredPriceList = (filteredList) => {
    this.setState({ filteredList });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  render() {
    const {
      priceList,
      filteredList,
    } = this.state;

    return (
      <div className="App">
        <Navigation getPrices={this.getPrices} handleChange={this.handleChange}/>
        {
          !isEmpty(filteredList) &&
            <div className="text-center">
              <Filter
                priceList={priceList}
                updateFilteredPriceList={this.updateFilteredPriceList} />
              <PriceList priceList={filteredList} />
            </div>
        }
      </div>
    );
  }
}

export default App;
