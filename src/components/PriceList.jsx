import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import PriceGrid from './PriceGrid';
import PriceTable from './PriceTable';

/**
 * This class should be treated like a Factory.
 * It's only concern is to produce the price list
 * in a variety of layouts.
 *
 * @class
 * @kind component
 */
export default class PriceList extends React.Component {
  static defaultProps = {
    priceList: [{}],
    layout: '',
  }

  static propTypes = {
    priceList: arrayOf(shape()).isRequired,
    layout: string.isRequired,
  }

  render() {
    const {
      priceList,
      layout,
    } = this.props;

    return (
      <div>
      {
        layout === 'grid' &&
          <PriceGrid priceList={priceList} />
      }
      {
        layout === 'table' &&
          <PriceTable priceList={priceList} />
      }
      </div>
    );
  }
}
