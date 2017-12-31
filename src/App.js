import React, { Component } from 'react';
import { shuffle, isEmpty } from 'lodash';
import './App.css';
import Navigation from './components/Navigation';
import PriceList from './components/PriceList';
import Filter from './components/Filter';
import { fetchPrices } from './utilities/';

class App extends Component {
  state = {
    priceList: [],
    filteredList: [],
    query: '',
    loading: true,
  }

  setLists = (priceList) => {
    this.setState({
      filteredList: priceList.slice(),
      priceList: Object.freeze(priceList),
      loading: false,
    });
  }

  getPrices = (event) => {
    event.preventDefault();
    const {
      query = '',
    } = this.state;

    this.setState({ loading: true });
    fetchPrices(query).then(({ priceList }) => this.setLists(priceList));
  };

  componentDidMount() {
    const randomQuery = shuffle([
      'neopixel ring',
      'teensy',
      'arduino',
    ]).pop();

    /**
     * Do a default search for NeoPixel Ring to
     * populate the landing page with some items.
     */
    fetchPrices(randomQuery)
      .then(({ priceList }) => this.setLists(priceList));
  }

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
      loading,
    } = this.state;

    return (
      <div className="App">
        <Navigation getPrices={this.getPrices} handleChange={this.handleChange}/>
        {
          loading &&
            <div>
              <h1 className="text-center">Loading...</h1>
              <div className="text-center">
                <img
                  src="https://media.giphy.com/media/10NI9u4qOWNdmw/giphy.gif"
                  alt="loading"
                />
              </div>
            </div>
        }
        {
          (!isEmpty(filteredList) && !loading) &&
            <div className="row">
              <div className="col-md-9">
                <PriceList priceList={filteredList}/>
              </div>
              <div className="text-center col-md-2">
                <Filter
                  priceList={priceList}
                  updateFilteredPriceList={this.updateFilteredPriceList} />
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;
