import React, { Component } from 'react';
import { shuffle, isEmpty } from 'lodash';
import './App.css';
import Navigation from './components/Navigation';
import PriceList from './components/PriceList';
import Filter from './components/Filter';
import LayoutOptions from './components/LayoutOptions';
import { fetchPrices } from './utilities/';
import { fetchPricesMock } from './mocks/';

class App extends Component {
  /**
   * Ideally when using deployment it's
   * better to get this value from your
   * system environment.
   */
  static mock = true;

  state = {
    priceList: [],
    filteredList: [],
    query: '',
    loading: true,
    layout: 'grid',
    error: '',
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
    if (this.mock) {
      const priceList = fetchPricesMock();
      this.setLists(priceList);
    } else {
      fetchPrices(query)
        .then(({ priceList }) => this.setLists(priceList))
        .catch(error => this.setState(
          {
            error: 'We had trouble fetching prices',
            loading: false,
          }
         ));
    }
  };

  setLayout = (layout) => {
    this.setState({ layout });
  }

  componentDidMount() {
    const randomQuery = shuffle([
      'neopixel ring',
      'teensy',
      'arduino',
    ]).pop();

    /**
     * Do a default search for something random to
     * populate the landing page with some items.
     */
    if (this.mock) {
      const priceList = fetchPricesMock();
      this.setLists(priceList);
    } else {
      fetchPrices(randomQuery)
        .then(({ priceList }) => this.setLists(priceList))
        .catch(error => this.setState(
          {
            error: 'We had trouble fetching prices',
            loading: false,
          }
         ));
    }
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
      layout,
      error,
    } = this.state;

    return (
      <div className="App">
        <Navigation getPrices={this.getPrices} handleChange={this.handleChange}/>
        {
          loading &&
            <div className="pt-3">
              <h1 className="text-center">Loading...</h1>
              <div className="text-center">
                <img
                  className="img-fluid"
                  src="https://i.giphy.com/10NI9u4qOWNdmw.gif"
                  alt="loading"
                />
              </div>
            </div>
        }
        {
          error &&
            <div className="pt-3">
              <h1 className="text-center">{error}</h1>
              <div className="text-center">
                <img
                  className="img-fluid"
                  src="https://media.giphy.com/media/elHCBSN6hjvpvsQ8nn/giphy.gif"
                  alt="error"
                />
              </div>
            </div>
        }
        {
          (!isEmpty(filteredList) && !loading) &&
            <div className="row">
              <div className="col-md-9">
                <PriceList priceList={filteredList} layout={layout} />
              </div>
              <div className="text-center col-md-2 pt-3">
                <Filter
                  priceList={priceList}
                  updateFilteredPriceList={this.updateFilteredPriceList}
                />
                <LayoutOptions layout={layout} setLayout={this.setLayout} />
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;
