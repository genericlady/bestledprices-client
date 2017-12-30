import React, { Component } from 'react';

class Filter extends Component {
  sortBy = (type) => {
    const {
      priceList = [],
      updateFilteredPriceList = () => {},
    } = this.props;

    switch (type) {
      case 'priceLowToHigh':
        return updateFilteredPriceList(priceList.slice().sort((p1, p2) =>
          Number(p1.price.replace(/\$/, '')) - Number(p2.price.replace(/\$/, '')))
        );
      case 'priceHighToLow':
        return updateFilteredPriceList(priceList.slice().sort((p1, p2) =>
          Number(p2.price.replace(/\$/, '')) - Number(p1.price.replace(/\$/, '')))
        );
      default:
        updateFilteredPriceList(priceList);
    }
  }

  render() {
    return (
      <div className="btn-group" role="group" aria-label="Filter">
        <button
          onClick={() => this.sortBy('relevance')}
          type="button"
          className="btn btn-secondary"
        >
          Relevance
        </button>
        <button
          onClick={() => this.sortBy('priceLowToHigh')}
          type="button"
          className="btn btn-secondary"
        >
          $ - $$$$
        </button>
        <button
          onClick={() => this.sortBy('priceHighToLow')}
          type="button"
          className="btn btn-secondary"
        >
          $$$$ - $
        </button>
      </div>
    );
  }
}
export default Filter;
