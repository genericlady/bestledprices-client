import React, { Component } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { uid } from 'uid';
import classNames from 'classnames'

class Filter extends Component {
  static defaultProps = {
    priceList: [],
    updateFilteredPriceList: () => {},
  }

  static propTypes = {
    priceList: arrayOf(shape()).isRequired,
    updateFilteredPriceList: func.isRequired,
  }

  state = {
    selectedButton: 0,
  }

  renderClassName = (index) => {
    const { selectedButton } = this.state;
    return classNames({
      "btn btn-secondary btn-block": true,
      "active": selectedButton === Number(index),
    });
  }

  sortBy = (type, { target: { value } }) => {
    const {
      priceList,
      updateFilteredPriceList,
    } = this.props;
    this.setState({ selectedButton: Number(value) });

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
    const buttons = [
      { type: 'relevance', label: 'Sort By Relevance' },
      { type: 'priceLowToHigh', label: '$ - $$$$' },
      { type: 'priceHighToLow', label: '$$$$ - $' },
    ].map(({ type, label }, index) => (
      <button
        key={uid()}
        value={index}
        onClick={(event) => this.sortBy(type, event)}
        type="button"
        className={this.renderClassName(index)}
      >
        { label }
      </button>
    ));

    return (
      <div role="group" aria-label="Filter">
        <h1>Sort By</h1>
        { buttons }
      </div>
    );
  }
}
export default Filter;
